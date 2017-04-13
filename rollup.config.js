import alias from 'rollup-plugin-alias';
import path from 'path';

export default {
    entry: 'test/index.js',
    dest: 'output.js',
    format: 'es',
    plugins: [
        alias({
            src: path.resolve(__dirname, './src')
        })
    ]
}
