import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { transformSync } from 'esbuild';

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				typescript: ({ content }) => transformSync(
					content,
					{
						loader: 'ts',
						target: 'esnext',
						tsconfigRaw: { compilerOptions: { importsNotUsedAsValues: 'preserve' } }
					}
				)
			})
		})
	],

	server: { open: true },

	build: {
		target: 'esnext',
		rollupOptions: { output: { generatedCode: 'es2015' } },
		reportCompressedSize: false
	}
});
