import path from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', 'vue/macros', '@vueuse/head', '@vueuse/core'],
        dts: './auto-imports.d.ts',
        vueTemplate: true,
      }),
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, 'src')
    },
  }
})
