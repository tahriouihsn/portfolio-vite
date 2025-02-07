import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: false,
    historyApiFallback: true,
  },
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
