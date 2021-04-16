import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy-glob';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const development = Boolean(process.env.ROLLUP_WATCH);
const production = !development;

export default {
	input: 'src/index.js',

	plugins: [
		nodeResolve(),

		production && copy([ { files: 'public/**/*', dest: 'build' } ]),

		production && terser({ ecma: 2021 }),

		development && serve({ contentBase: [ 'public', 'build' ], historyApiFallback: true, open: true }),

		development && livereload([ 'public', 'build' ])
	],

	output: {
		format: 'esm',
		dir: 'build',
		entryFileNames: 'js/[name].js',
		chunkFileNames: 'js/[name].js',
		sourcemap: development,
		sourcemapPathTransform: (sourcePath) => path.join('build/js', sourcePath)
	},

	watch: {
		clearScreen: false
	}
};