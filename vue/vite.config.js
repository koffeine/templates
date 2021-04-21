import vue from '@vitejs/plugin-vue';

export default {
	plugins: [ vue() ],

	server: { open: true },

	build: {
		target: 'esnext',
		brotliSize: false
	}
};