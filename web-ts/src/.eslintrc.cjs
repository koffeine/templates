/* eslint-env node */
'use strict'; // eslint-disable-line strict

module.exports = {
	root: true,
	extends: '@koffeine',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		es2021: true,
		browser: true
	}
};
