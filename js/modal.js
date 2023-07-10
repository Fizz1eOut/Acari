document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');

    const lockScroll = () => {
        document.body.classList.add('lock');
    };
    const unlockScroll = () => {
        document.body.classList.remove('lock');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn')) {
            modalOverlay.classList.add('modal-overlay--visible');
            modal.classList.add('modal--visible');
            lockScroll();
        } else {
            if (e.target == modalOverlay) {
                modalOverlay.classList.remove('modal-overlay--visible');
                modal.classList.remove('modal--visible');
                unlockScroll();
            }
        }
        if (e.target.closest('.modal__button')) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modal.classList.remove('modal--visible');
            unlockScroll();
        }
    });
});