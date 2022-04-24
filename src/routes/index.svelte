<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Your tagline </h2>
            <h1 class="mb-8 sm:text-2xl text-5xl font-black tracking-tighter text-black"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <button class="btn-primary"> Show me </button>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block">
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac">
        </div>
    </div>
</section>