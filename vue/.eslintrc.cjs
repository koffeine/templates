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
			files: 'src/**/*',
			env: {
				browser: true
			}
		},
		{
			files: '*.vue',
			extends: '@koffeine/eslint-config-vue',
			plugins: [ 'vue' ],
			parser: 'vue-eslint-parser',
			parserOptions: {
				ecmaVersion: 2022
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
