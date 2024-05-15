import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/styles/global.scss";` }
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '~bootstrap',
        replacement:path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    ]
  },
  build: {
    cssCodeSplit: false,
    minify: true,
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        },
    },
  }
})
