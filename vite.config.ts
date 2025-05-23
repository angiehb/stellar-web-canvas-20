
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]'
      },
    },
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2015',
    assetsInlineLimit: 0,
  },
  base: '',
}));
