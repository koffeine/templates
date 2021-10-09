/* eslint-env node */
'use strict'; // eslint-disable-line strict

module.exports = {
	root: true,
	extends: '@koffeine',
	plugins: [ 'svelte3' ],
	overrides: [ { files: [ '*.svelte' ], processor: 'svelte3/svelte3' } ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021, // 12
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	},
	settings: {
		'svelte3/typescript': true
	}
};
