import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Fix: This prevents Windows permission errors when Vite tries to open the browser
    open: false,
  },
});
