import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from '@koffeine/rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy-glob';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

import cssnano from 'cssnano';

const development = Boolean(process.env.ROLLUP_WATCH);
const production = !development;

export default {
	input: 'src/main.js',

	plugins: [
		nodeResolve(),

		postcss({
			sourcemap: development,
			plugins: [
				production
					? cssnano({ preset: [ 'default', { discardComments: { removeAll: true } } ] })
					: () => () => {} // eslint-disable-line no-empty-function
			],
			output: 'css/main.css'
		}),

		production && terser({ ecma: 2021 }),

		production && copy([ { files: 'public/**/*', dest: 'dist' } ]),

		development && serve({ contentBase: [ 'public', 'dist' ], historyApiFallback: true, open: true }),

		development && livereload([ 'public', 'dist' ])
	],

	output: {
		format: 'esm',
		dir: 'dist',
		entryFileNames: 'js/[name].js',
		chunkFileNames: 'js/[hash].js',
		sourcemap: development,
		sourcemapPathTransform: (sourcePath) => path.join('dist/js', sourcePath)
	},

	watch: {
		clearScreen: false
	}
};