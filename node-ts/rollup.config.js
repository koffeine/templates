import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default {
	input: 'src/index.ts',
	plugins: [
		nodeResolve(),
		esbuild({
			tsconfig: false,
			target: 'esnext',
			sourceMap: false
		})
	],
	output: {
		generatedCode: 'es2015',
		file: 'dist/index.js'
	}
};
