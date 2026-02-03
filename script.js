document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('image-input');
    const displayImage = document.getElementById('display-image');
    const controls = document.getElementById('controls');

    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(event) {
                displayImage.src = event.target.result;
                displayImage.classList.add('visible');
                controls.classList.add('hidden');
            };

            reader.readAsDataURL(file);
        }
    });

    // Click anywhere to show controls again when image is displayed
    displayImage.addEventListener('click', function() {
        controls.classList.remove('hidden');
    });

    // Allow drag and drop
    document.body.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    document.body.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(event) {
                displayImage.src = event.target.result;
                displayImage.classList.add('visible');
                controls.classList.add('hidden');
            };

            reader.readAsDataURL(files[0]);
        }
    });
});
