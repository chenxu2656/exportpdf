import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
export default {
    input: 'index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: "esm",
            name: 'exportpdf',
            sourcemap: 'inline'
        }
    ],
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/*'
        })
    ]
}