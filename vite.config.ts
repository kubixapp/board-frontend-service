import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3300,
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@features": "/src/features",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
  };
});
