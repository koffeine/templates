'use strict';

module.exports = {
	root: true,
	extends: '@koffeine',
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
