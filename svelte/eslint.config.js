import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';

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
			globals: globals.browser,
			parser: svelteParser
		},
		processor: sveltePlugin.processors.svelte,
		plugins: {
			svelte: sveltePlugin
		},
		rules: {
			'no-inner-declarations': 'off', 'svelte/no-inner-declarations': [ 'error', 'both' ],
			'no-self-assign': 'off',

			'svelte/comment-directive': 'error',
			'svelte/system': 'error'
		}
	}
];
