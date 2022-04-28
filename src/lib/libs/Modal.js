import ModalFlowbite from 'flowbite/src/components/modal';

class Modal extends ModalFlowbite {
    _destroyBackdropEl() {
        if (!this._isHidden) {
            const getBackdrops = document.querySelectorAll('[modal-backdrop]');
            if (getBackdrops.length >= 1) getBackdrops[getBackdrops.length - 1].remove();
        }
    }
}

export default Modal;