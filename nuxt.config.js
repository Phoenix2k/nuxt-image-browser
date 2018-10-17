const pkg = require( './package' );

module.exports = {
	mode: 'universal',

	/**
	 * Build configuration
	 */
	build: {

		/**
		 * Webpack config
		 */
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
			if ( ! ctx.isDev ) {
				config.output.publicPath = './_nuxt/';
			}
		}
	},

	/**
	 * Global CSS
	 */
	css: [
		{ src: 'swiper/dist/css/swiper.css', lang: 'css' },
		{ src: '@/assets/scss/variables.scss', lang: 'scss' },
		{ src: '@/assets/scss/base.scss', lang: 'scss' },
		{ src: '@/assets/scss/buttons.scss', lang: 'scss' },
		{ src: '@/assets/scss/icons.scss', lang: 'scss' },
		{ src: '@/assets/scss/swiper.scss', lang: 'scss' }
	],

	/**
	 * Headers of the page
	 */
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

	/**
	 * Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},
	/**
	 * Nuxt.js modules
	 */
	modules:  [[ 'nuxt-sass-resources-loader', [ '@/assets/scss/variables.scss' ]]],

	/**
	 * Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/icons.js', ssr: true },
		{ src: '@/plugins/vue-awesome-swiper.js', ssr: false }
	],

	/**
	 * Router
	 */
	router: {
		// Enable functionality when loading `dist/index.html`
		// directly in the browser
		mode: 'hash'
	}
};
