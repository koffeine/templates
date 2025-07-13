import koffeine from '@koffeine/eslint-config';
import koffeineSvelte from '@koffeine/eslint-config-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	...koffeineSvelte,
	{
		files: [ 'src/**/*' ],
		languageOptions: {
			globals: globals.browser
		}
	}
];
