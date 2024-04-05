document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.dropdown-content a');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const filter = button.getAttribute('data-filter');
            filterImages(filter);
            setActiveButton(button);
        });
    });

    function filterImages(filter) {
        const items = document.querySelectorAll('.item');
        items.forEach(function(item) {
            const category = item.classList.contains(filter);
            if (filter === 'all' || category) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function setActiveButton(activeButton) {
        const buttons = document.querySelectorAll('.dropdown-content a');
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});
