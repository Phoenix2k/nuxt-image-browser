const pkg = require( './package' );

module.exports = {
	mode: 'universal',

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
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
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
	 * Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/icons.js', ssr: true },
		{ src: '@/plugins/vue-awesome-swiper.js', ssr: false }
	],

	/**
	 * Nuxt.js modules
	 */
	modules:  [[ 'nuxt-sass-resources-loader', [ '@/assets/scss/variables.scss' ]]],

	/**
	 * Build configuration
	 */
	build: {
		/**
		 * You can extend webpack config here
		 */
		extend( config, ctx ) {
			// Run ESLint on save
			if ( ctx.isDev && ctx.isClient ) {
				config.module.rules.push( {
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				} );
			}
		}
	}
};
