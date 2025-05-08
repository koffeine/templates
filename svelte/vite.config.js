import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ svelte() ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};
