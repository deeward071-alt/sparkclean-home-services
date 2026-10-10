import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['sparkclean-home-services.onrender.com'],
  },
});
