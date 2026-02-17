import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    proxy: {
      "/jwt": {
        target:
          "https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app",
        changeOrigin: true,
        secure: false,
      },
      "/jobs": {
        target:
          "https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app",
        changeOrigin: true,
        secure: false,
      },
      "/applications": {
        target:
          "https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
