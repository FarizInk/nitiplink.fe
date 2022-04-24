<script>
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../app.css';
	import "flowbite/dist/flowbite.css";
	import Footer from '$lib/Footer.svelte';
</script>


<div class="flex flex-col h-screen justify-between">
	<Navbar />

	<main class="mb-auto h-auto mt-16">
		<slot />
	</main>
	
	<Footer/>
</div>