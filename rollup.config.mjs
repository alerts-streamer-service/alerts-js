import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.mjs',
    output: {
        sourcemap: 'inline',
        file: 'output/bundle.mjs'
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};
