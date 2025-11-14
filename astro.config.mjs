import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ADD THIS LINE:
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: { port: 3000, host: true },
  vite: {
    plugins: [tailwindcss()]
  }
});