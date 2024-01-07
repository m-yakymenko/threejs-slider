import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        src: "/src",
      },
    },
  };

  if (command !== "serve") {
    config.base = "/threejs-vite/";
  }

  return config;
});
