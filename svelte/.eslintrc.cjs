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
			files: [ '*.ts', '*.svelte' ],
			plugins: [ '@typescript-eslint' ],
			parser: '@typescript-eslint/parser',
			rules: {
			}
		},
		{
			files: '*.svelte',
			plugins: [ 'svelte3' ],
			processor: 'svelte3/svelte3',
			settings: {
				'svelte3/typescript': true
			}
		},
		{
			files: '*.cjs',
			parserOptions: {
				sourceType: 'script'
			}
		}
	]
};
