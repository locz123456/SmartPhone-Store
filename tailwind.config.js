/** @format */

module.exports = {
	mode: 'jit',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			Roboto: ['Roboto'],
			body: ['"Open Sans"'],
		},
	},
	plugins: [],
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	
};
