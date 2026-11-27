import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [ '**/*.ts' ],
		languageOptions: {
			parser: typescriptParser
		}
	}
];
