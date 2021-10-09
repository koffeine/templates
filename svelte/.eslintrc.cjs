'use strict'; // eslint-disable-line strict

module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 2021, // 12
		sourceType: 'module'
	},
	env: {
		es2021: true,
		node: true
	}
};