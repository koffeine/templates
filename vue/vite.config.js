import vue from '@vitejs/plugin-vue';

export default {
	define: {
		__VUE_OPTIONS_API__: false
	},

	plugins: [ vue() ],

	server: { open: true },

	build: {
		target: 'esnext',
		brotliSize: false
	}
};