import { svelte } from '@sveltejs/vite-plugin-svelte';

export default {
	plugins: [ svelte() ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};