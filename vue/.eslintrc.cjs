'use strict';

module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 2022 // 13; vue-eslint-parser doesn't support 'latest'
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
