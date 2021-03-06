'use strict';

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		es2022: true
	},
	overrides: [
		{
			files: './*',
			env: {
				node: true
			}
		},
		{
			files: 'src/**/*',
			env: {
				browser: true
			}
		},
		{
			files: '*.svelte',
			plugins: [ 'svelte3' ],
			processor: 'svelte3/svelte3'
		},
		{
			files: '*.cjs',
			parserOptions: {
				sourceType: 'script'
			}
		}
	]
};
