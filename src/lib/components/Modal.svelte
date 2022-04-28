<script>
import { generateModalSize } from "$lib/helper";

	import { onMount } from "svelte"

	let modal;

    export let id, modalContainerClass;
    export let position = 'center-center';
	export let size = 'md' // avaiable: sm, md, lg, xl, full, screen;
	export let backdropClass = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0';
	export let backdropIndex = 'z-40';
	export let zIndex = 'z-50';

	modalContainerClass = 'relative p-4 w-full h-full md:h-auto';
	modalContainerClass+= generateModalSize(size);

	onMount(async () => {
		const Modal = (await import('$lib/libs/Modal')).default;
		
		// set the modal menu element
		const targetEl = document.getElementById(id);

		// options with default values
		const options = {
			placement: position,
			backdropClasses: backdropClass + ' ' + backdropIndex,
			onHide: () => {
				console.log('modal is hidden');
			},
			onShow: () => {
				console.log('modal is shown');
			},
			onToggle: () => {
				console.log('modal has been toggled');
			}
		};

		modal = new Modal(targetEl, options)
	})

	export function show() {
		modal.show();
	}

	export function hide() {
		modal.hide();
	}
</script>

<!-- Modal Register -->
<div
	{id}
	tabindex="-1"
	class="{'hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full ' + zIndex }"
>
	<div class={modalContainerClass}>
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<div class="flex justify-end p-2">
				<button
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					on:click={hide}
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>
			<slot />
		</div>
	</div>
</div>
