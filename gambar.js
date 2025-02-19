let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// Fungsi untuk membuka modal
function openModal(src) {
    currentIndex = Array.from(images).findIndex(img => img.src.includes(src.split('/').pop())); 
    updateModalImage();
    modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.display = "none";
}

// Fungsi untuk mengganti gambar
function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateModalImage();
}

// Fungsi untuk memperbarui gambar dalam modal
function updateModalImage() {
    modalImg.src = images[currentIndex].src;
}

// Navigasi dengan keyboard
document.addEventListener("keydown", function(event) {
    if (modal.style.display === "flex") {
        if (event.key === "ArrowLeft") changeImage(-1);
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "Escape") closeModal();
    }
});

// Swipe navigasi untuk mobile
let touchStartX = 0;

modal.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
});

modal.addEventListener("touchend", function(event) {
    let touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < touchStartX - 50) changeImage(1); // Swipe kiri
    if (touchEndX > touchStartX + 50) changeImage(-1); // Swipe kanan
});
