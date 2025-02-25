
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { componentTagger } from "lovable-tagger";
import path from "path";
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    react(),
    tailwindcss(),
    process.env.NODE_ENV === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "2b1e5db9-1d79-4369-82f0-8adb51b07b0d.lovableproject.com"
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
};

export default defineConfig(config);
