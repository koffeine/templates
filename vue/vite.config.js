import vue from '@vitejs/plugin-vue';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ vue() ],

	server: { open: true },

	build: {
		target: 'esnext',
		rollupOptions: { output: { generatedCode: 'es2015' } },
		reportCompressedSize: false
	}
};
