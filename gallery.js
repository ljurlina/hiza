const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const btnClose = document.querySelector(".lb-close");
const btnPrev = document.querySelector(".lb-prev");
const btnNext = document.querySelector(".lb-next");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

btnPrev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  lightboxImg.src = images[currentIndex].src;
});

btnNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  lightboxImg.src = images[currentIndex].src;
});
