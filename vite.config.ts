import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  resolve: {
    alias: {
      "@": "/src/",
      "@shared": "/src/shared/",
      "@pages": "/src/pages/",
      "@widgets": "/src/widgets/",
      "@features": "/src/features/",
      "@entities": "/src/entities/",
      "@assets": "/src/shared/assets/",
    },
  },
});
