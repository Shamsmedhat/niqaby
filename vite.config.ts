import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Niqaby/", // Ensure it matches your GitHub repo name
  plugins: [react()],
});