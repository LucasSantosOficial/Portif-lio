import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  base: "/Portif-lio/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
