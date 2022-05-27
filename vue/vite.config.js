import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	define: {
		__VUE_OPTIONS_API__: false
	},

	plugins: [ vue() ],

	server: { open: true },

	build: {
		target: 'esnext',
		rollupOptions: { output: { generatedCode: 'es2015' } },
		reportCompressedSize: false
	}
});
