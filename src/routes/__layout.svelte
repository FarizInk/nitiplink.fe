<script>
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { startedScipt } from '$lib/helper';

	onMount(async () => {
		startedScipt();
	});
</script>

<div class="flex flex-col h-screen justify-between bg-white dark:bg-gray-800">
	<Navbar />

	<main class="mb-auto h-auto mt-16 text-black dark:text-white">
		<slot />
	</main>

	<Footer />
</div>
