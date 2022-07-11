<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	onMount(() => {
		document.onreadystatechange = function () {
			if (document.readyState === 'complete') {
				setTimeout(function () {
					let loadingBage: HTMLElement | null = document.querySelector('.loading');
					if (loadingBage != null) {
						loadingBage.style.display = 'none';
					}
				}, 1000);
			}
		};
	});
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	:global(body) {
		font-family: Rozha;
		line-height: 2rem;
		overflow-x: hidden;
		padding: 0px;
		margin: 0px;
	}
</style>
