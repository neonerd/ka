import html from '@rollup/plugin-html'
import typescript from '@rollup/plugin-typescript'

import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
    },
    plugins: [
        typescript(),

        scss({
        }),

        html({
            title: 'pedagogický manifest'
        }),       

        copy({
            targets: [
                { src: 'vendor/fonts', dest: 'dist' }
            ]
        })
    ]
}