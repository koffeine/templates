/** @type {import('vitest/config').ViteUserConfigExport} */
export default {
	test: {
		reporters: 'tree',
		coverage: {
			enabled: true,
			include: [ 'src/**/*.js' ],
			reporter: 'text'
		}
	}
};
