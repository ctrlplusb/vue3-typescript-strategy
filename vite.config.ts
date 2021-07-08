import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    vue(),
    vueJsx({ enableObjectSlots: false, optimize: true }),
  ],
});
