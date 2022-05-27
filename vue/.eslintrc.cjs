'use strict';

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		es2022: true
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
			files: [ '*.ts', '*.vue' ],
			plugins: [ '@typescript-eslint' ],
			parser: '@typescript-eslint/parser',
			rules: {
			}
		},
		{
			files: '*.vue',
			extends: '@koffeine/eslint-config-vue',
			plugins: [ 'vue' ],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
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
