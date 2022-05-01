<script>
	import { generateModalSize } from '$lib/helper';
import { modals } from '$lib/stores';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const baseModalEffect = 'translate-y-6 opacity-0';
	let modal, modalEffect, backdropEffect, modalStore;

	modals.subscribe((value) => modalStore = value)

	export let id, modalContainerClass;
	export let type = 'default'; // avaiable: default, popup;
	export let position = 'center-center';
	export let size = 'md'; // avaiable: sm, md, lg, xl, full, screen;
	export let backdropClass = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0';
	export let backdropIndex = 'z-40';
	export let zIndex = 'z-50';
	export let footer = true;
	export let title = "";

	modalContainerClass = 'relative p-4 w-full h-full md:h-auto';
	modalContainerClass += generateModalSize(size);

	onMount(async () => {
		// const Modal = (await import('$lib/libs/Modal')).default;
		const Modal = (await import('flowbite/src/components/modal')).default;

		// set the modal menu element
		const targetEl = document.getElementById(id);

		// options with default values
		const options = {
			placement: position,
			backdropClasses: 'hidden',
			onHide: () => {
				modalEffect = baseModalEffect
				backdropEffect = 'opacity-0'
				modals.set(modalStore.filter((obj) => obj.id !== id))
				dispatch('hide');
			},
			onShow: () => {
				modalEffect = baseModalEffect
				backdropEffect = 'opacity-0'
				setTimeout(() => modalEffect = backdropEffect = 'opacity-100', 10)
				modals.set([
					{
						'id': id,
						'class': modal
					},
					...modalStore
				]);
				dispatch('show');
			},
			onToggle: () => {
				dispatch('toggle');
			}
		};

		modal = new Modal(targetEl, options);
	});

	export function show() {
		modal.show();
	}

	export function hide() {
		modalEffect = baseModalEffect
		backdropEffect = 'opacity-0'
		setTimeout(() => modal.hide(), 150)
		// modal.hide();
	}
</script>

<div
	id={id}
	tabindex="-1"
	class={'hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full ' + zIndex}
>
	<div class={`transition duration-150 ease-in-out ${modalContainerClass} ${modalEffect} ${zIndex}`}>
		{#if type === 'default'}
		<!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <slot name="header">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						{title}
					</h3>
				</slot>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" on:click={hide}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <slot name="body"/>
            </div>
            {#if footer}
			<!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <slot name="footer"/>
            </div>
			{/if}
        </div>
		{:else if type === 'popup'}
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<button
				type="button"
				class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
			<div class="py-6 px-6 lg:px-8">
				<slot name="body" />
			</div>
		</div>
		{/if}
	</div>
	<div class={`transition duration-150 ease-in-out ${backdropClass} ${backdropEffect} ${backdropIndex}`} on:click={hide}></div>
</div>
