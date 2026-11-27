import koffeine from '@koffeine/eslint-config';
import koffeineSvelte from '@koffeine/eslint-config-svelte';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		files: [ '**/*.ts' ],
		languageOptions: {
			parser: typescriptParser
		}
	},
	...koffeineSvelte,
	{
		files: [ '**/*.svelte', '**/*.svelte.ts' ],
		languageOptions: {
			parserOptions: {
				parser: {
					ts: typescriptParser
				}
			}
		}
	},
	{
		ignores: [ 'dist' ],
	},
	{
		files: [ '*' ],
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
