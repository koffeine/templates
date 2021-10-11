/* eslint-env node */
'use strict'; // eslint-disable-line strict

module.exports = {
	root: true,
	extends: [ '@koffeine', '@koffeine/eslint-config-vue' ],
	plugins: [ 'vue' ],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2021, // vue-eslint-parser doesn't support 'latest'
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	}
};
