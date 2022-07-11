<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	// imgs
	import facebook from '$lib/assets/fontAwesome/facebook.svg';
	import instagram from '$lib/assets/fontAwesome/instagram.svg';
	import twitter from '$lib/assets/fontAwesome/twitter.svg';
	import linkedin from '$lib/assets/fontAwesome/linkedin.svg';
	import download from '$lib/assets/fontAwesome/download.svg';
	onMount(() => {
		async function extractJSON<T>(url: string): Promise<T> {
			// Fetch data from JSON file
			return fetch(url)
				.then((response) => response.json())
				.catch((error) => console.log(error));
		}

		// Quotes
		interface Quote {
			text: string;
			author: string;
		}

		interface Quotes {
			status: number;
			message: string;
			count: number;
			quotes: Array<Quote>;
		}
		let q = extractJSON<Quotes>('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
		q.then(function (data) {
			let quotes_Conts = document.querySelectorAll('.quote');
			let author_Conts = document.querySelectorAll('.author');
			for (let i = 0; i < quotes_Conts.length; i++) {
				quotes_Conts[i].innerHTML = data.quotes[0].text;
				author_Conts[i].innerHTML = `-${data.quotes[0].author}`;
			}
		}).catch((err) => console.log('Error: ' + err));
	});
	import fav from '$lib/assets/favicon.png';
	import imgSrc from '$lib/assets/imgs/zeyad_alagamy.png';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" href={fav} />
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="about" id="about">
	<div class="my-img">
		<span class="corner" />
		<input
			type="image"
			src={imgSrc}
			alt="Zeyad's Personal Photo"
			title="Zeyad Alagamy"
			class="personalImg"
		/>
		<span class="corner2" />
	</div>
	<div class="about-content">
		<h1>About Me</h1>
		<div class="favQuote">
			<span class="quote" />
			<span class="author" />
		</div>
		<ul class="personal-info">
			<li><i>Name: </i> <span> Zeyad Abdelhady Alagamy </span></li>
			<li><i>Date of birth:</i> <span> October 1<sup>st</sup>, 2003 </span></li>
			<li><i>Address:</i> <span> Cairo, Egypt</span></li>
			<li><i>Zip code:</i> <span> 11848 </span></li>
			<li><i>Email: </i><span> wezza2003@gmail.com </span></li>
			<li><i>Phone: </i><span> +20 (11) 192 365 35 <br /> +7 (987) 729 336 61 </span></li>
		</ul>
		<div class="socialMedia">
			<a target="_blank" href="https://www.facebook.com/">
				<img src={facebook} alt="Facebook Icon" />
			</a>
			<a target="_blank" href="https://www.instagram.com/">
				<img src={instagram} alt="Instagram Icon" /></a
			>
			<a target="_blank" href="https://www.linkedin.com/">
				<img src={linkedin} alt="linkedin Icon" />
			</a>
			<a target="_blank" href="https://twitter.com/"> <img src={twitter} alt="twitter Icon" /> </a>
		</div>
		<a class="cv" href="{base}/">
			CV <img class="fa-download" src={download} alt="download Icon" /></a
		>
	</div>
</section>

<style lang="scss">
	@import '../lib/assets/style_src/styleVars.scss';

	.about {
		display: flex;
		flex-flow: row wrap;
		width: 100vw;
		height: fit-content;
		min-height: 90vh;
		overflow: hidden;
		position: relative;
		justify-content: center;
		align-items: center;
		z-index: 1;
		background-color: white;
		padding-bottom: 40px;
		.personalImg,
		.my-img {
			max-width: 700px;
			width: 50vw;
			min-width: 400px;
			margin: 0px;
			padding: 0px;
			position: sticky;
			right: 50%;
			z-index: 1;
		}
		.corner {
			width: 60px;
			z-index: 2;
			height: 60px;
			position: absolute;
			left: 40px;
			top: 40px;
			border-top: 5px solid $secondary-color;
			border-left: 5px solid $secondary-color;
		}
		.corner2 {
			width: 120px;
			height: 120px;
			display: none;
			position: absolute;
			bottom: -40px;
			right: -60px;
			border: 5px solid $secondary-color;
		}
		.about-content {
			max-width: 450px;
			min-width: 350px;
			position: sticky;
			padding: 0 30px;
			margin: 0px;
			@include mainHead();
			@include quote(rgba(0, 0, 0, 0.5), 'white');
			.personal-info {
				list-style: none;
				font-family: Arial, Helvetica, sans-serif;
				margin: 50px auto;
				li {
					margin-bottom: 10px;
					display: flex;
					flex-flow: row wrap;
					justify-content: flex;
					font-size: 1rem;
					width: 100%;
					color: $primary-color;
					text-decoration: none;
					i {
						font-style: normal;
						font-weight: bolder;
						width: 40%;
					}
					span {
						width: 50%;
						color: #c5a591;
						right: 0px;
					}
				}
			}
			.socialMedia {
				width: 100%;
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				img {
					width: 30px;
					height: 30px;
					margin: 10px;
					opacity: 0.8;
					cursor: pointer;
					transition: all 0.1s ease-in-out;
					&:hover {
						opacity: 1;
						transform: scale(1.2);
					}
				}
			}
			.cv {
				width: 100px;
				height: 30px;
				border: 2px solid white;
				border-radius: 15px;
				padding: 20px 30px 20px 30px;
				font-family: Arial, Helvetica, sans-serif;
				font-weight: 100;
				font-size: 16px;
				color: white;
				background-color: #f17c32;
				transition: background-color 0.3s ease-in-out;
				cursor: pointer;
				&:hover {
					background-color: #c5a591;
				}
				.fa-download {
					width: 20px;
					filter: invert(100%);
					margin: 20px 0px -2px 10px;
				}
			}
		}
	}
	@media screen and (max-width: 1120px) {
		.about {
			.personalImg,
			.my-img {
				margin: 0;
			}
			.about-content {
				width: 50vw;
				margin: auto;

				.cv {
					margin: auto;
					display: block;
					height: fit-content;
					text-align: center;
					padding: 10px 20px 10px 20px;
					.fa-download {
						margin: 0px;
					}
				}
			}
			.my-img {
				.corner2 {
					display: flex;
				}
			}
		}
	}
	@media screen and (max-width: 1050px) {
		.about {
			.personalImg,
			.my-img {
				position: relative;
				left: 0px;
				margin: 0 auto;
			}
			.about-content {
				h1 {
					text-align: center;
				}
			}
		}
	}
	@media screen and (max-width: 620px) {
		.about {
			.personalImg,
			.my-img {
				width: 100vw;
				min-width: none;
				position: relative;
				margin: 0;
			}
			.about-content {
				width: 100vw;
				margin: auto;
			}
		}
	}
</style>
