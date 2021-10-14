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
