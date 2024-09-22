import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Element-plus 按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import * as path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", // 分析图生成的文件名
      open:true // 如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'can-ui': path.resolve(__dirname, 'can-ui')
    }
  },
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080
    }
  }
})
