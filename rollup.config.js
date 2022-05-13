import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
export default {
    input: 'index.ts',
    output: [
        {
            file: 'dist/esm/index.js',
            format: "esm",
            name: 'exportpdf',
            sourcemap: 'inline'
        },
        {
            file: 'dist/iife/index.js',
            format: "iife",
            name: 'exportpdf',
        }
    ],
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/*'
        })
    ]
}