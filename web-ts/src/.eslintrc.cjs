/* eslint-env node */
'use strict'; // eslint-disable-line strict

module.exports = {
	root: true,
	extends: '@koffeine',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021, // 12
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	}
};
