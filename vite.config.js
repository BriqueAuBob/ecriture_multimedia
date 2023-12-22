import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/ekin",
  build: {
    rollupOptions: {
      external: ["vue", "/ekin/src/main.js"],
    },
  },
});
