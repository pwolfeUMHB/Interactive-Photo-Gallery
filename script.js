document.addEventListener("DOMContentLoaded", function() {
    // When an image is clicked, show it in the modal
    document.querySelectorAll('.photo-img').forEach(function(img) {
        img.onclick = function() {
            var modal = document.getElementById('imageModal');
            modal.style.display = 'block';
            document.getElementById('enlargedImage').src = this.src;
            document.getElementById('caption').textContent = this.alt;
        };
    });

    // Get the element that closes the modal
    var closeBtn = document.getElementsByClassName('close')[0];

    // When the close button is clicked, close the modal
    closeBtn.onclick = function() {
        var modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    };
});
