import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), "src/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      dts: "src/auto-import.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
