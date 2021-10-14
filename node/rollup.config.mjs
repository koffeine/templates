import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig({
	input: 'src/index.ts',
	plugins: [
		nodeResolve(),
		esbuild({
			minify: true,
			sourceMap: false
		})
	],
	output: {
		generatedCode: 'es2015',
		file: 'dist/index.js'
	}
});
