import { modals } from "$lib/stores";

let modalStore;
modals.subscribe((value) => modalStore = value);

export function keydownListener() {
    document.addEventListener('keydown', function (e) {
        // ESC
        if (e.keyCode == 27) {
            if (modalStore.length > 0) {
                const lastModal = modalStore[0]; // get class lastest modal showed
                const modalElem = document.getElementById(lastModal['id']).getElementsByClassName('transition duration-150 ease-in-out');

                modalElem[0].classList.remove('opacity-100')
                modalElem[0].classList.add('translate-y-6', 'opacity-0')
                modalElem[1].classList.remove('opacity-100')
                modalElem[1].classList.add('opacity-0')
                setTimeout(() => lastModal['class'].hide(), 150)
            }
        }
    });
}