import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ svelte({
		compilerOptions: { runes: true },
		configFile: false
	}) ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};
