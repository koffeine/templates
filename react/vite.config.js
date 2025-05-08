import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfigExport} */
export default {
	plugins: [ react() ],

	server: { open: true },

	build: {
		target: 'esnext',
		reportCompressedSize: false
	}
};
