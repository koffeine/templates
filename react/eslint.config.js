import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import reactPlugin from '@eslint-react/eslint-plugin';
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
			...reactPlugin.configs.recommended.plugins,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin
		},
		rules: {
			// react
			...reactPlugin.configs.recommended.rules,

			// react-hooks
			...reactHooksPlugin.configs.recommended.rules,

			// react-refresh
			...reactRefreshPlugin.configs.vite.rules
		},
		settings: {
			...reactPlugin.configs.recommended.settings
		}
	}
];
