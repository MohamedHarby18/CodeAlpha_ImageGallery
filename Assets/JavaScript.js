document.addEventListener("DOMContentLoaded", () => {
    const fullImgBox = document.getElementById("full_ImgBox");
    const fullImg = document.getElementById("fullImg");
    const galleryImages = document.querySelectorAll(".gallery img");
    const closeBtn = document.querySelector(".close-btn");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            fullImgBox.classList.add("active");
            fullImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        fullImgBox.classList.remove("active");
    });

    fullImgBox.addEventListener("click", (e) => {
        if (e.target === fullImgBox) {
            fullImgBox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fullImgBox.classList.remove("active");
        }
    });
});
