import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import sveltePlugin from 'eslint-plugin-svelte3';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	koffeine,
	{
		files: [ 'src/**/*.js' ],
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: [ 'src/**/*.svelte' ],
		languageOptions: {
			globals: globals.browser
		},
		processor: sveltePlugin.processors.svelte3
	}
];
