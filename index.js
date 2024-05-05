document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            const content = item.querySelector('.accordion-content');
            const isActive = content.classList.contains('active');

            accordionItems.forEach(item => {
                item.querySelector('.accordion-content').classList.remove('active');
            });

            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});
