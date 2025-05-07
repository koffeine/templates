import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.Config[]} */
export default [
	koffeine,
	{
		files: [ 'src/**/*.js' ],
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: [ 'src/**/*.jsx' ],
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin
		},
		rules: {
			// eslint base
			'no-unused-vars': [ 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false, caughtErrors: 'all', ignoreClassWithStaticInitBlock: false, reportUsedIgnorePattern: false, varsIgnorePattern: '^[A-Z]' } ],

			// react-hooks recommended
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',

			// react-refresh recommended
			'react-refresh/only-export-components': 'error'
		}
	}
];
