<script>
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import { changeTheme } from '$lib/helper';
	import { theme } from '$lib/stores';

	onMount(async () => {
		if (localStorage.theme === undefined || localStorage.theme === null) {
			localStorage.theme = 'light';
			theme.set('light');
		}
		changeTheme();
	});
</script>

<div class="flex flex-col h-screen justify-between bg-white dark:bg-gray-800">
	<Navbar />

	<main class="mb-auto h-auto mt-16 text-black dark:text-white">
		<slot />
	</main>

	<Footer />
</div>
