<script>
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import { changeTheme } from '$lib/helper';
	import { theme, token } from '$lib/stores';

	const activeMenu =
		'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white';
	// 'block py-2 pr-4 pl-3 md:p-0 animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:400%] bg-clip-text text-transparent';
	const baseMenu =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

	let modalSignIn, modalSignUp, themeVal, authToken;

	function handleSignInBtnShow() {
		modalSignIn.show();
	}

	function handleSignUpBtnShow() {
		modalSignUp.show();
	}

	function toggleTheme() {
		const changedTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
		localStorage.theme = changedTheme;
		theme.set(changedTheme);
		changeTheme();
	}

	theme.subscribe((val) => (themeVal = val));
	token.subscribe((val) => (authToken = val));
</script>

<nav
	class="backdrop-blur-sm bg-white/80 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-700 px-2 sm:px-4 py-2.5 fixed w-full z-40"
>
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a sveltekit:prefetch href="/" class="flex items-center">
			<svg class="mr-3 h-6 sm:h-9" viewBox="0 0 170 229" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.16932 0.778884L1.41032 200.848L51.7966 165.228L51.5343 122.86L169.29 228.054L168.068 30.9264L117.699 69.4885L117.944 108.914L0.16932 0.778884Z"
					fill={themeVal === 'dark' ? 'white' : 'black'}
				/>
			</svg>
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				NitipLink
			</span>
		</a>

		<div class="flex items-center md:order-2">
			{#if authToken === null}
				<button
					type="button"
					class="btn-primary btn-xs bg-blue-600 mr-3"
					on:click={handleSignInBtnShow}>Sign In</button
				>
				<button class="btn-secondary btn-xs mr-3" on:click={handleSignUpBtnShow}>Sign Up</button>
			{/if}

			<button class="btn-secondary btn-compact mr-3" on:click={toggleTheme}>
				{#if themeVal === 'light'}
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/></svg
					>
				{:else}
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/></svg
					>
				{/if}
			</button>

			{#if authToken !== null}
				<button
					type="button"
					class="flex md:mr-3 text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
					id="user-menu-button"
					aria-expanded="false"
					data-dropdown-toggle="dropdown-user"
				>
					<span class="sr-only">Open user menu</span>
					<img
						class="w-8 h-8 rounded-full"
						src="https://ui-avatars.com/api/?background=random&name=Fariz"
						alt="user photo"
					/>
				</button>
				<!-- Dropdown menu -->
				<div
					class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
					id="dropdown-user"
				>
					<div class="py-3 px-4">
						<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
						<span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
							>name@flowbite.com</span
						>
					</div>
					<ul class="py-1" aria-labelledby="dropdown-user">
						<li>
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>Dashboard</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>Settings</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>Earnings</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>Sign out</a
							>
						</li>
					</ul>
				</div>
				<button
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
					<svg
						class="hidden w-6 h-6"
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
			{/if}
		</div>

		<div
			class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
			id="mobile-menu-2"
		>
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li>
					<a
						sveltekit:prefetch
						href="/discover"
						class={$page.url.pathname === '/discover' ? activeMenu : baseMenu}
						aria-current="page">Discover</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/about"
						class={$page.url.pathname === '/about' ? activeMenu : baseMenu}>About</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<Modal bind:this={modalSignIn} id="modal-sign-in" type="popup" size="sm">
	<form class="space-y-6" action="#" slot="body">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>
		<div>
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
			<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
			<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
		</div>
		<div class="flex justify-between">
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
				</div>
				<div class="ml-3 text-sm">
				<label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
				</div>
			</div>
			<a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
		</div>
		<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" on:click={() => modalSignUp.show()}>Create account</a>
		</div>
	</form>
</Modal>

<Modal bind:this={modalSignUp} id="modal-sign-up" type="popup" size="sm" zIndex="z-[52]" backdropIndex="z-[51]">
	<form class="space-y-6" action="#" slot="body">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h3>
		<div>
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
			<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
			<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
		</div>
		<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
	</form>
</Modal>
