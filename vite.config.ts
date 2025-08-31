import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 8081,          // usamos SIEMPRE 8081
    strictPort: true,    // si está ocupado, falla en vez de cambiar de puerto
    proxy: {
      "/api": {
        target: "http://localhost:3000", // backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));