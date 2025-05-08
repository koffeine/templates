import vue from '@vitejs/plugin-vue';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ vue() ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};
