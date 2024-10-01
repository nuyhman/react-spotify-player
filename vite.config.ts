import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib'),
      name: '@nuyhman/react-spotify-player',
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`;
        }
        return `${name}.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
        banner: '"use client";',
        interop: 'auto',
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
    outDir: './dist',
  },
});
