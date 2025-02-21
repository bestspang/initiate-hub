
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { componentTagger } from "lovable-tagger";
import path from "path";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    react(),
    tailwindcss(),
    process.env.NODE_ENV === "development" && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      ".lovableproject.com"
    ],
    hmr: {
      host: "2b1e5db9-1d79-4369-82f0-8adb51b07b0d.lovableproject.com",
      protocol: "wss",
      clientPort: 443
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

export default defineConfig(config);


