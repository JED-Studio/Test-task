document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('[id^=openModal]');
    const closeModalButtons = document.querySelectorAll('.close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.id.replace('open', '').toLowerCase();
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10); // Небольшая задержка для запуска перехода
        });
    });

    const closeModal = (modal) => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400); // Соответствует времени перехода в CSS (0.4s)
    };

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            closeModal(modal);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
});
