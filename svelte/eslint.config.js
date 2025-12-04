import koffeine from '@koffeine/eslint-config';
import koffeineSvelte from '@koffeine/eslint-config-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	...koffeineSvelte,
	{
		ignores: [ 'dist' ],
	},
	{
		files: [ '*', 'test/**/*' ],
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [ 'src/**/*' ],
		languageOptions: {
			globals: globals.browser
		}
	}
];
