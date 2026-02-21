import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, []);

  if (!window.matchMedia('(pointer: fine)').matches) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        pointerEvents: 'none',
        zIndex: 99999,
        /* Tip of the blade is at (2,2) — hotspot aligns with mouse */
        transform: `translate(-2px, -2px) ${clicking ? 'rotate(22deg)' : 'rotate(0deg)'}`,
        transformOrigin: '2px 2px',
        transition: 'transform 0.08s ease',
        imageRendering: 'pixelated',
        willChange: 'transform',
      }}
    >
      {/*
        ── Diamond Sword — 32×32, 4px blocks ──
        Orientation: tip at top-left (hotspot), pommel at bottom-right.
        Blade goes diagonally from (0,0) → (8,8).
        Guard crosses perpendicular: (12,4) upper arm, (4,12) lower arm.
        Handle continues (12,12) → (20,20). Pommel at (24,24).
      */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        style={{ imageRendering: 'pixelated', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Blade (diamond — cyan) ── */}
        {/* Tip */}
        <rect x="0"  y="0"  width="4" height="4" fill="#9AEEFF" />
        {/* Highlight strip on top-left edge of tip */}
        <rect x="0"  y="0"  width="2" height="4" fill="#C8F8FF" opacity="0.55" />

        {/* Mid blade */}
        <rect x="4"  y="4"  width="4" height="4" fill="#4FC3F7" />
        <rect x="4"  y="4"  width="2" height="4" fill="#7DE8FF" opacity="0.5" />

        {/* Lower blade */}
        <rect x="8"  y="8"  width="4" height="4" fill="#4FC3F7" />
        <rect x="8"  y="8"  width="2" height="4" fill="#7DE8FF" opacity="0.4" />
        {/* Shadow on bottom-right edge */}
        <rect x="10" y="8"  width="2" height="4" fill="#2B8FAE" opacity="0.45" />

        {/* ── Guard / crossguard (iron gray) ── */}
        {/* Upper-right guard arm */}
        <rect x="12" y="4"  width="4" height="4" fill="#C8C8C8" />
        <rect x="12" y="4"  width="4" height="2" fill="#E0E0E0" />   {/* highlight top */}
        <rect x="12" y="6"  width="4" height="2" fill="#9E9E9E" />   {/* shadow bottom */}

        {/* Lower-left guard arm */}
        <rect x="4"  y="12" width="4" height="4" fill="#ADADAD" />
        <rect x="4"  y="12" width="4" height="2" fill="#C8C8C8" />
        <rect x="4"  y="14" width="4" height="2" fill="#7D7D7D" />

        {/* ── Handle (wood — brown) ── */}
        <rect x="12" y="12" width="4" height="4" fill="#C87941" />
        {/* Grain */}
        <rect x="12" y="12" width="2" height="4" fill="rgba(0,0,0,0.22)" />
        <rect x="14" y="13" width="2" height="2" fill="rgba(255,255,255,0.08)" />

        <rect x="16" y="16" width="4" height="4" fill="#A0522D" />
        <rect x="16" y="16" width="2" height="4" fill="rgba(0,0,0,0.20)" />

        <rect x="20" y="20" width="4" height="4" fill="#8B5E3C" />
        <rect x="20" y="20" width="2" height="4" fill="rgba(0,0,0,0.25)" />

        {/* ── Pommel (dark stone) ── */}
        <rect x="24" y="24" width="4" height="4" fill="#7D7D7D" />
        <rect x="24" y="24" width="4" height="2" fill="#9E9E9E" />  {/* highlight top */}
        <rect x="28" y="28" width="4" height="4" fill="#555555" />
      </svg>
    </div>
  );
}
