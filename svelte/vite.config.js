import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfigExport} */
export default ({ mode }) => ({
	plugins: [ svelte() ],

	server: { open: true },

	resolve: {
		alias: mode === 'production' && [
			{ find: /^(.*)\/env\.js$/v, replacement: '$1/env.production.js' }
		]
	},

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
});
