import vue from '@vitejs/plugin-vue';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ vue({ features: { optionsAPI: false } }) ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};
