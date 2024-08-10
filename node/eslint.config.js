import koffeine from '@koffeine/eslint-config';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	koffeine,
	{
		files: [ 'src/**/*.js' ],
		languageOptions: {
			globals: globals.node
		}
	}
];
