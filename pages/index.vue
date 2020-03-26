<template lang="html">
	<div v-swiper:views="viewOptions">
		<div class="swiper-wrapper">
			<div class="swiper-slide swiper-slide-column">
				<div class="swiper-content">
					<button id="start" class="button button--start next-view" type="button">Start</button>
				</div>
			</div>
			<div class="swiper-slide disable-user-selection">
				<button class="button button--transparent slide-home" title="Go back to the start" type="button" @click.prevent="resetViews">
					<svg class="icon icon-home">
						<use xlink:href="#icon-home" />
					</svg>
				</button>
				<a class="prev-slide icon--left" title="Slide left">
					<svg class="icon icon-arrow-left">
						<use xlink:href="#icon-arrow-left" />
					</svg>
				</a>
				<div v-swiper:imageBrowser="imageBrowserOptions" class="image-browser">
					<div class="swiper-wrapper">
						<div v-for="( image, image_index ) in images" :key="image_index" class="swiper-image-slide swiper-slide swiper-slide-column">
							<img :alt="image.alt" :src="image.src" />
						</div>
					</div>
					<div class="swiper-pagination-wrapper">
						<div slot="pagination" class="swiper-pagination" />
					</div>
				</div>
				<a class="next-slide">
					<svg class="icon icon-arrow-right" title="Slide right">
						<use xlink:href="#icon-arrow-right" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import imageJSON from '@/assets/data/images.json';

export default {
	directives: {
		swiper: directive
	},

	data() {
		return {
			imageBrowserOptions: {
				allowTouchMove: false,
				direction: 'horizontal',
				effect: 'fade',
				navigation: {
					nextEl: '.next-slide',
					prevEl: '.prev-slide'
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				},
				preloadImages: true,
				speed: 400,
				touchReleaseOnEdges: true
			},
			images: imageJSON,
			viewOptions: {
				allowTouchMove: false,
				direction: 'vertical',
				effect: 'slide',
				navigation: {
					nextEl: '.next-view',
					prevEl: '.prev-view'
				},
				speed: 600
			}
		};
	},

	destroyed() {
		console.log( 'Application shut down.' );
	},

	mounted() {
		console.log( 'Application started.' );
	},

	methods: {
		nextView() {
			this.views.slideNext();
		},

		resetImageBrowser() {
			return new Promise( resolve => {
				this.imageBrowser.slideTo( 0, this.viewOptions.speed, false );
				setTimeout( () => {
					resolve();
				}, this.viewOptions.speed );
			} );
		},

		async resetViews() {
			this.views.slideTo( 0, this.viewOptions.speed, false );
			await this.resetImageBrowser();
			document.getElementById( 'start' ).focus();
		}
	}
};
</script>

<style lang="scss" scoped>
.slide-home {
	display: inline-block;
	left: 1.25rem;
	opacity: 0.8;
	position: absolute;
	top: 1.25rem;
	transition: opacity 0.2s linear;
	z-index: 20;

	&:focus,
	&:hover {
		opacity: 1;
	}

	@media (min-width: $breakpoint-medium) {
		font-size: 1.5em;
	}

	@media (min-width: $breakpoint-large) {
		font-size: 2em;
	}
}
</style>
