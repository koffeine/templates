import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte-hot';
import postcss from '@koffeine/rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy-glob';
import serve from 'rollup-plugin-serve';
import hot from 'rollup-plugin-hot';
import livereload from 'rollup-plugin-livereload';

import cssnano from 'cssnano';

const development = Boolean(process.env.ROLLUP_WATCH);
const production = !development;

export default {
	input: 'src/index.js',

	plugins: [
		nodeResolve({ dedupe: [ 'svelte' ] }),

		svelte({
			compilerOptions: { dev: development },
			emitCss: production,
			hot: development
		}),

		postcss({
			sourcemap: development,
			sourcemapPathTransform: (source, id) =>
				path.isAbsolute(source) ? path.relative(process.cwd(), source) : path.join(path.relative(process.cwd(), path.dirname(id)), source),
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

		development && hot({ inMemory: true }),

		development && livereload('public')
	],

	output: {
		format: 'esm',
		dir: 'build',
		entryFileNames: 'js/[name].js',
		chunkFileNames: 'js/[hash].js',
		sourcemap: development,
		sourcemapPathTransform: (sourcePath) => path.join('build/js', sourcePath)
	},

	watch: {
		clearScreen: false
	}
};