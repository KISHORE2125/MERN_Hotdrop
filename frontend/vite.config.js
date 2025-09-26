import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),       // <-- ensures React JSX is handled
    tailwindcss()  // <-- integrates Tailwind CSS
  ],
});
