/* eslint-env node */

module.exports = {
	root: true,
	extends: '@koffeine',
	plugins: [ 'svelte3' ],
	overrides: [ { files: [ '*.svelte' ], processor: 'svelte3/svelte3' } ],
	parserOptions: {
		ecmaVersion: 2021, // 12
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	}
};