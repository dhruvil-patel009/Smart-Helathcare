import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
  define: {
    "import.meta.env.VITE_UPLOAD_PRESET": JSON.stringify("your_upload_preset"),
    "import.meta.env.VITE_CLOUD_NAME": JSON.stringify("your_cloud_name"),
  },
});
