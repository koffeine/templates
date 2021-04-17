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
	input: 'src/index.js',

	plugins: [
		nodeResolve(),

		postcss({
			sourcemap: development,
			plugins: [
				production
					? cssnano({ preset: [ 'default', { discardComments: { removeAll: true } } ] })
					: () => () => {} // eslint-disable-line no-empty-function
			],
			output: 'css/index.css'
		}),

		production && terser({ ecma: 2021 }),

		production && copy([ { files: 'public/**/*', dest: 'build' } ]),

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