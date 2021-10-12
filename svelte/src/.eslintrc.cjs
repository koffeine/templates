'use strict';

module.exports = {
	root: true,
	extends: '@koffeine',
	plugins: [ 'svelte3' ],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	},
	overrides: [
		{
			files: '*.svelte',
			processor: 'svelte3/svelte3'
		},
		{
			files: '.eslintrc.cjs',
			parserOptions: {
				sourceType: 'script'
			},
			env: {
				node: true
			}
		}
	]
};
