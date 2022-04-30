<script>
	import Modal from '$lib/components/Modal.svelte';

	let modalLvOne, modalLvTwo;

	function showModalOne() {
		modalLvOne.show();
	}

	const showModalTwo = () => modalLvTwo.show(); 
</script>

<svelte:head>
	<title>NitipLink</title>
</svelte:head>

<section>
	<div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
		<div
			class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0"
		>
			<h2
				class="mb-8 text-xs font-semibold tracking-widest text-black dark:text-white uppercase title-font"
			>
				Your tagline
			</h2>
			<h1 class="mb-8 sm:text-2xl text-5xl font-black tracking-tighter text-black dark:text-white">
				Medium length display headline.
			</h1>
			<p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
				Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for
				your landing page.
			</p>
			<div class="flex flex-col justify-center lg:flex-row">
				<button class="btn-primary"> Show me </button>
				<p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
					It will take you to candy shop. <br class="hidden lg:block" />
					<a
						href="#"
						class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
						title="read more"
					>
						Read more about it »
					</a>
				</p>
			</div>
		</div>
		<div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
			<img
				class="object-cover object-center rounded-lg "
				alt="hero"
				src="https://dummyimage.com/720x600/F3F4F7/8693ac"
			/>
		</div>
	</div>
</section>

<button on:click={showModalOne} class="btn-secondary btn-sm ml-3">Show modal 1</button>

<Modal bind:this={modalLvTwo} id="modal-lv-two" position="center-center" size="sm" zIndex="z-[52]" backdropIndex="z-[51]" type="popup">
	<div class="p-6 text-center" slot="body">
		<svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
		<button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
			Yes, I'm sure
		</button>
		<button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
	</div>
</Modal>

<Modal bind:this={modalLvOne} id="modal-lv-one" position="center-center" size="lg" footer={false} title="Test Modal">
	<div slot="body">
		<button on:click={showModalTwo} class="btn-primary btn-sm">Show modal 2</button>
	</div>
</Modal>