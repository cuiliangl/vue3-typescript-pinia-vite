import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      views: resolve('src/views'),
      store: resolve('src/store'),
      http: resolve('src/api/index.ts'),
      interface: resolve('src/interface')
    }
  },
  css: {
    postcss: resolve(__dirname, 'postcss.config.js'),
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/assets/style/scss/index.scss';`
      }
    }
  },
  server: {
    open: true,
    proxy: {}
  }
})
