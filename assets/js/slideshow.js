// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slideshow-image');
    let currentImageIndex = 0;

    // Show initial image
    images[currentImageIndex].classList.add('active');

    // Function to switch images
    function switchImage() {
        // Remove active class from current image
        images[currentImageIndex].classList.remove('active');
        
        // Move to next image or back to first if at end
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // Add active class to new current image
        images[currentImageIndex].classList.add('active');
    }

    // Switch images every 5 seconds
    setInterval(switchImage, 5000);
});
