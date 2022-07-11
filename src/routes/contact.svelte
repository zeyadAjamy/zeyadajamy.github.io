<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	// media import
	import facebook from '$lib/assets/fontAwesome/facebook.svg';
	import instagram from '$lib/assets/fontAwesome/instagram.svg';
	import twitter from '$lib/assets/fontAwesome/twitter.svg';
	import linkedin from '$lib/assets/fontAwesome/linkedin.svg';
	import envelope from '$lib/assets/fontAwesome/envelope.svg';
	import phone from '$lib/assets/fontAwesome/phone.svg';
	import share_nodes from '$lib/assets/fontAwesome/share-nodes.svg';
	import fav from '$lib/assets/favicon.png';
	import src from '$lib/assets/lottie/contact-lottie.json?url';
</script>

<svelte:head>
	<link rel="icon" href={fav} />
	<title>Contact</title>
	<meta name="description" content="Contact me" />
</svelte:head>

<section class="contact">
	<h1>Contact Me</h1>
	<p class="">I'd love to hear from you!</p>
	<div class="contact-main">
		<div class="card">
			<div class="card-header">
				<div class="img-container">
					<img src={envelope} alt="email" />
				</div>
				<span class="card-title"> Email Address</span>
			</div>
			<p class="card-info">wezza2003@gmail.com</p>
		</div>
		<div class="card">
			<div class="card-header">
				<div class="img-container">
					<img src={phone} alt="email" />
				</div>
				<span class="card-title"> Contact Numbers </span>
			</div>
			<p class="card-info">+20 (11) 192 365 35 <br /> +7 (987) 729 336 61</p>
		</div>
		<div class="card">
			<div class="card-header">
				<div class="img-container">
					<img src={share_nodes} alt="email" />
				</div>
				<span class="card-title"> Social media </span>
			</div>
			<div class="social-icons">
				<a target="_blank" href="https://www.facebook.com/">
					<img src={facebook} class="footSocial" alt="Facbeook Icon" />
				</a>
				<a target="_blank" href="https://www.instagram.com/">
					<img src={instagram} class="footSocial" alt="Instagram Icon" /></a
				>
				<a target="_blank" href="https://www.linkedin.com/">
					<img src={linkedin} class="footSocial" alt="Linkedin Icon" />
				</a>
				<a target="_blank" href="https://twitter.com/">
					<img src={twitter} class="footSocial" alt="Twitter Icon" />
				</a>
			</div>
		</div>
	</div>
	<div class="message">
		<div class="messageSvg">
			<lottie-player {src} speed="0.6" loop autoplay />
		</div>
		<form action="" class="message-card">
			<input type="text" name="name" placeholder="Name" />
			<input type="email" name="email" placeholder="Email" />
			<textarea name="message" id="" cols="30" rows="10" placeholder="Message" />
			<button type="submit"> Send </button>
		</form>
	</div>
</section>

<style lang="scss">
	@import '../lib/assets/style_src/styleVars.scss';

	.contact {
		width: 100vw;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		padding: 80px 0px 80px 0px;
		@include mainHead();
		background-color: white;
		h1::after {
			content: '';
			display: block;
			width: 20%;
			height: 2px;
			border-radius: 11px;
			background-color: $primary-color;
			margin: 20px auto;
		}

		& > p {
			font-family: Questrial;
			font-size: 15px;
			letter-spacing: 1.5px;
			font-weight: 100;
			padding: 20px;
			text-align: center;
			margin-top: -60px;
			opacity: 0.5;
		}

		.contact-main {
			display: flex;
			flex-flow: row wrap;
			width: 50vw;
			justify-content: center;
			.card {
				display: flex;
				flex-grow: 1;
				flex-shrink: 0;
				width: 250px;
				flex-flow: column nowrap;
				z-index: 1;
				align-items: center;
				margin: 30px;
				padding-bottom: 50px;
				box-shadow: 0px 0px 10px 0px rgba(53, 53, 53, 0.15);
				font-family: Questrial;
				transition: transform 0.2s ease-in-out;
				&:hover {
					transform: scale(1.2);
				}
				.card-header {
					font-size: 18px;
					font-weight: bolder;
					margin: 10px auto;
					text-align: center;
					.img-container {
						background-color: $primary-color;
						border-radius: 50%;
						height: 130px;
						width: 130px;
						margin: 20px auto;
						display: flex;
						justify-content: center;
						img {
							width: 50px;
							display: block;
							margin: auto;
							filter: invert(100%);
						}
					}
				}
				.social-icons {
					display: flex;
					flex-flow: row nowrap;
					justify-content: center;
					width: 100%;
					height: 15px;
					padding: 15px;
					.footSocial {
						width: 40px;
						height: 40px;
						margin: 0px 10px;
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
					}
				}
			}
		}
		.message {
			width: calc(50vw - 60px);
			flex-grow: 1;
			margin: 30px auto;
			display: flex;
			flex-flow: row wrap;
			height: fit-content;
			justify-content: center;
			align-items: center;
			background-color: $primary-color;
			min-width: 300px;
			.messageSvg {
				flex-grow: 1;
				background-color: #df7533;
				text-align: centers;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
				margin: 30px;
				lottie-player {
					width: clamp(100px, 100vw, 300px);
					display: block;
					margin: auto;
				}
			}
			.message-card {
				display: flex;
				flex-flow: column nowrap;
				background-color: #f8f9fa;
				width: 20vw;
				padding: 20px;
				transition: transform 0.2s ease-in-out;
				input,
				textarea {
					width: calc(100% - 20px);
					font-family: Questrial;
					height: 30px;
					border-radius: 11px;
					border: 1px solid rgba(128, 128, 128, 0.479);
					margin: 5px auto;
					padding: 10px 10px 10px 10px;
					background-color: white;
					color: rgba(0, 0, 0, 0.589);
					font-size: 16px;
					font-weight: 100;
					transition: background-color 0.3s ease-in-out;
				}
				textarea {
					height: 200px;
					margin-bottom: 10px;
				}
				button {
					width: 30%;
					height: 50px;
					border-radius: 11px;
					border: none;
					background-color: $primary-color;
					color: rgba(255, 255, 255, 0.664);
					font-family: Questrial;
					font-size: 16px;
					font-weight: 100;
					transition: background-color 0.3s ease-in-out;
					cursor: pointer;
					&:hover {
						background-color: #c5a591;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1050px) {
		.contact {
			.contact-main {
				width: 80vw;
				.card {
					width: none;
				}
			}

			.message {
				width: calc(80vw - 60px);
				.message-card {
					width: 100%;
				}
			}
		}
	}
</style>
