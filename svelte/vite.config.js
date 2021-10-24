import { svelte } from '@sveltejs/vite-plugin-svelte';

export default {
	plugins: [ svelte() ],

	server: { open: true },

	build: {
		target: 'esnext',
		rollupOptions: { output: { generatedCode: 'es2015' } },
		reportCompressedSize: false
	}
};
