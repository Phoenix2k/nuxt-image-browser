const pkg = require( './package' );

module.exports = {
	build: {
		extend( config, ctx ) {
			// Run ESLint on save
			if ( ctx.isDev && ctx.isClient ) {
				config.module.rules.push( {
					enforce: 'pre',
					exclude: /(node_modules)/,
					loader: 'eslint-loader',
					test: /\.(js|vue)$/
				} );
			}

			// Use relative paths
			if ( !ctx.isDev ) {
				config.output.publicPath = './_nuxt/';
			}
		}
	},
	css: [
		{ src: 'swiper/swiper-bundle.css', lang: 'css' },
		{ src: '@/assets/scss/variables.scss', lang: 'scss' },
		{ src: '@/assets/scss/base.scss', lang: 'scss' },
		{ src: '@/assets/scss/buttons.scss', lang: 'scss' },
		{ src: '@/assets/scss/icons.scss', lang: 'scss' },
		{ src: '@/assets/scss/swiper.scss', lang: 'scss' }
	],
	head: {
		title: pkg.name,
		meta: [
			{
				charset: 'utf-8'
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport'
			},
			{
				content: pkg.description,
				hid: 'description',
				name: 'description'
			}
		],
		link: [
			{
				href: '/favicon.ico',
				rel: 'icon',
				type: 'image/x-icon'
			}
		]
	},
	loading: {
		color: '#fff'
	},

	/**
	 * Nuxt.js modules
	 */
	modules: [ '@nuxtjs/style-resources' ],

	/**
	 * Plugins to load before mounting the App
	 */
	plugins: [{ src: '@/plugins/icons.js', ssr: true }],

	/**
	 * Router
	 */
	router: {
		// Enable functionality when loading `dist/index.html`
		// directly in the browser
		mode: 'hash'
	},

	/**
	 * Global Sass variables
	 */
	styleResources: {
		scss: [ './assets/scss/variables.scss' ]
	}
};
