'use strict';

module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 'latest'
	},
	env: {
		es2021: true
	},
	overrides: [
		{
			files: 'src/**/*',
			extends: '@koffeine/eslint-config-vue',
			plugins: [ 'vue' ],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				sourceType: 'module'
			},
			env: {
				browser: true
			}
		},
		{
			files: './*.js',
			parserOptions: {
				sourceType: 'module'
			},
			env: {
				node: true
			}
		},
		{
			files: './*.cjs',
			parserOptions: {
				sourceType: 'script'
			},
			env: {
				node: true
			}
		}
	]
};
