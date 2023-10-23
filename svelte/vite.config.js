import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
	plugins: [ svelte() ],

	server: { open: true },

	resolve: {
		alias: mode === 'production' && [
			{ find: /^(.*)\/env\.js$/u, replacement: '$1/env.production.js' }
		]
	},

	build: {
		target: 'esnext',
		rollupOptions: { output: { generatedCode: 'es2015' } },
		reportCompressedSize: false
	}
}));
