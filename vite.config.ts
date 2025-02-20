
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react(), tailwindcss()],
  server: {
    port: 8080
  }
};

export default defineConfig(config);
