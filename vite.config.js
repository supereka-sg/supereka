import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // These ship CommonJS or browser-only entry points that Node can't import as-is.
    noExternal: ["react-tilt", "framer-motion"],
  },
});
