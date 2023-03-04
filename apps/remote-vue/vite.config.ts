import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/remote-vue',
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    viteTsConfigPaths({
      root: '../../'
    }),
    federation({
      name: 'remote-vue',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteVue': './apps/remote-vue/src/remote-entry.ts'
      },
      shared: ['vue']
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
