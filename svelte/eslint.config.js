import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		files: [ 'src/**/*.js' ],
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: [ 'src/**/*.svelte.js' ],
		languageOptions: {
			globals: globals.browser,
			parser: svelteParser
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
			// svelte
			...sveltePlugin.configs['flat/recommended'].reduce((rules, config) => ({ ...rules, ...config.rules }), {}),
			'svelte/no-inner-declarations': koffeine.reduce((rules, config) => ({ ...rules, ...config.rules }), {})['no-inner-declarations']
		}
	}
];
