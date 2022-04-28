export function changeTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function generateModalSize(size) {
    let value = '';
    if (size !== 'screen') {
		if (size === 'sm') {
			value+= ' max-w-md';
		} else if (size === 'md') {
			value+= ' max-w-lg';
		} else if (size === 'lg') {
			value+= ' max-w-4xl';
		} else if (size === 'xl') {
			value+= ' max-w-7xl';
		} else if (size === 'full') {
			value+= ' max-w-full';
		}
		value+= ' p-4'
	} else {
		value+= ' max-w-full p-0';
	}

    return value;
}