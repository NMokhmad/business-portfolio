import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const staticPageRoutes = {
  '/mentions-legales': '/mentions-legales/index.html',
  '/mentions-legales/': '/mentions-legales/index.html',
  '/politique-de-confidentialite': '/politique-de-confidentialite/index.html',
  '/politique-de-confidentialite/': '/politique-de-confidentialite/index.html',
};

function serveStaticPagesPlugin() {
  return {
    name: 'serve-static-pages',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (staticPageRoutes[req.url]) {
          req.url = staticPageRoutes[req.url];
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveStaticPagesPlugin()],
})
