// JavaScript untuk horizontal scrolling pada gambar
document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.macbook-images');

    // Geser gambar secara horizontal menggunakan mouse wheel atau trackpad
    imagesContainer.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            imagesContainer.scrollLeft += 150; // Geser ke kanan
        } else {
            imagesContainer.scrollLeft -= 150; // Geser ke kiri
        }
    });

    console.log("MacBook Air M4 Landing Page Loaded");
});

