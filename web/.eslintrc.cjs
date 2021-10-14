'use strict';

module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		es2021: true
	},
	overrides: [
		{
			files: './*',
			env: {
				node: true
			}
		},
		{
			files: 'src/*',
			env: {
				browser: true
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
