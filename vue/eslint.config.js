import koffeine from '@koffeine/eslint-config';
import globals from 'globals';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';

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
		files: [ 'src/**/*.vue' ],
		languageOptions: {
			globals: globals.browser,
			parser: vueParser
		},
		processor: vuePlugin.processors.vue,
		plugins: {
			vue: vuePlugin
		},
		rules: {
			// eslint
			'no-useless-assignment': 'off', // https://github.com/vuejs/eslint-plugin-vue/issues/2660

			// vue
			...vuePlugin.configs['flat/essential'].reduce((rules, config) => ({ ...rules, ...config.rules }), {})
		}
	}
];
