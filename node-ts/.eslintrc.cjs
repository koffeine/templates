'use strict';

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
		node: true
	},
	overrides: [
		{
			files: '.eslintrc.cjs',
			parserOptions: {
				sourceType: 'script'
			}
		}
	]
};
