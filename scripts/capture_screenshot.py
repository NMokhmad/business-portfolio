import json
from playwright.sync_api import sync_playwright

URL = "https://mokhmad.fr/"
SCREENSHOTS_DIR = "/home/mokhmad/Développement-web/business-portfolio/screenshots"

JS_ANALYSIS = """
(args) => {
    const vw = args.vw;
    const vh = args.vh;

    function isAboveFold(el) {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0;
    }

    function getText(el) {
        return el ? el.innerText.trim().substring(0, 200) : null;
    }

    const title = document.title;
    const metaDescEl = document.querySelector('meta[name="description"]');
    const metaDescription = metaDescEl ? metaDescEl.getAttribute("content") : null;
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const canonical = canonicalEl ? canonicalEl.getAttribute("href") : null;

    const h1s = Array.from(document.querySelectorAll("h1"));
    const h1 = h1s.map(h => ({
        text: getText(h),
        aboveFold: isAboveFold(h)
    }));

    const h2s = Array.from(document.querySelectorAll("h2")).slice(0, 6);
    const h2 = h2s.map(h => ({
        text: getText(h),
        aboveFold: isAboveFold(h)
    }));

    const ctaKeywords = ["contact", "devis", "projet", "commencer", "decouvrir",
                         "voir", "hire", "start", "get", "book", "call", "talk", "travaillons"];
    const ctaData = Array.from(document.querySelectorAll("a, button"))
        .filter(el => {
            const t = (el.innerText || "").toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return ctaKeywords.some(k => t.includes(k));
        })
        .slice(0, 8)
        .map(el => ({
            tag: el.tagName,
            text: getText(el),
            aboveFold: isAboveFold(el),
            href: el.getAttribute("href") || null
        }));

    const nav = document.querySelector("nav, header nav, [role='navigation']");
    const navVisible = nav ? isAboveFold(nav) : false;

    const hamburgerSelectors = [
        "[class*='hamburger']", "[class*='burger']", "[class*='menu-toggle']",
        "[class*='nav-toggle']", "[aria-label*='menu']", "[aria-label*='Menu']",
        "button[class*='mobile']", ".menu-btn", "#menu-btn", "#hamburger",
        "[class*='toggle']", "[data-toggle]", "[aria-expanded]"
    ];
    let hamburger = null;
    for (const sel of hamburgerSelectors) {
        const el = document.querySelector(sel);
        if (el) {
            const style = window.getComputedStyle(el);
            if (style.display !== "none" && style.visibility !== "hidden") {
                hamburger = {
                    selector: sel,
                    text: (el.innerText || "").trim(),
                    aboveFold: isAboveFold(el)
                };
                break;
            }
        }
    }

    const overlaySelectors = [
        "[class*='modal']", "[class*='overlay']", "[class*='popup']",
        "[class*='cookie']", "[class*='banner']", "[role='dialog']"
    ];
    const overlays = overlaySelectors
        .map(sel => document.querySelector(sel))
        .filter(el => {
            if (!el) return false;
            const s = window.getComputedStyle(el);
            return s.display !== "none" && s.visibility !== "hidden" && s.opacity !== "0";
        })
        .map(el => ({ className: el.className, text: getText(el) }));

    const imgs = Array.from(document.querySelectorAll("img")).filter(isAboveFold);
    const images = imgs.map(i => ({
        src: (i.getAttribute("src") || "").substring(0, 80),
        alt: i.getAttribute("alt"),
        hasAlt: !!i.getAttribute("alt") && i.getAttribute("alt").trim() !== ""
    }));

    const bodyScrollWidth = document.body.scrollWidth;
    const hasHorizontalScroll = bodyScrollWidth > vw;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc  = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl   = document.querySelector('meta[property="og:url"]');

    return {
        title,
        metaDescription,
        canonical,
        h1,
        h2,
        ctas: ctaData,
        navVisible,
        hamburger,
        overlays,
        images,
        hasHorizontalScroll,
        bodyScrollWidth,
        viewportWidth: vw,
        viewportHeight: vh,
        openGraph: {
            title:       ogTitle ? ogTitle.getAttribute("content") : null,
            description: ogDesc  ? ogDesc.getAttribute("content")  : null,
            image:       ogImage ? ogImage.getAttribute("content") : null,
            url:         ogUrl   ? ogUrl.getAttribute("content")   : null
        }
    };
}
"""


def capture_and_analyze(url, output_path, viewport_width, viewport_height, device_label):
    mobile_ua = (
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) "
        "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
    )
    desktop_ua = (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox", "--disable-setuid-sandbox"])
        context = browser.new_context(
            viewport={"width": viewport_width, "height": viewport_height},
            user_agent=mobile_ua if viewport_width < 500 else desktop_ua,
        )
        page = context.new_page()
        page.goto(url, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(2000)

        page.screenshot(path=output_path, full_page=False)
        print(f"[{device_label}] Screenshot saved: {output_path}")

        analysis = page.evaluate(JS_ANALYSIS, {"vw": viewport_width, "vh": viewport_height})
        browser.close()
        return analysis


if __name__ == "__main__":
    desktop_path = f"{SCREENSHOTS_DIR}/page-desktop.png"
    mobile_path  = f"{SCREENSHOTS_DIR}/page-mobile.png"

    print("=== Capturing DESKTOP (1280x800) ===")
    desktop = capture_and_analyze(URL, desktop_path, 1280, 800, "DESKTOP")

    print("\n=== Capturing MOBILE (375x812) ===")
    mobile = capture_and_analyze(URL, mobile_path, 375, 812, "MOBILE")

    report = {"desktop": desktop, "mobile": mobile}
    report_path = f"{SCREENSHOTS_DIR}/analysis.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    print(f"\nAnalysis JSON saved: {report_path}")
