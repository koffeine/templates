import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		files: [ 'src/**/*' ],
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: [ '**/*.jsx' ],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin
		},
		rules: {
			// react
			...reactPlugin.configs.flat.recommended.rules,
			...reactPlugin.configs.flat['jsx-runtime'].rules,
			'react/prop-types': 'off', // doesn't support JSDoc

			// react-hooks
			...reactHooksPlugin.configs.recommended.rules,

			// react-refresh
			...reactRefreshPlugin.configs.vite.rules
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
