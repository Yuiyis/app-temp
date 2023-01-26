import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: 'tsconfig.json'
    }),
        //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        dts({
            outputDir: 'lib',
            tsConfigFilePath: 'tsconfig.json'
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: 'lib',
        lib: {
            entry: 'src/entry.ts',
            name: 'index', // umd的变量名
            fileName: (format) => `index.${format}.js`, // 输出文件名
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue'],
        },
    },
})
