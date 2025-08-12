// 3D Carousel Auto-Rotate Script
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel__container");
  let angle = 0;
  const speed = 0.1; // degrees per frame — slow & smooth

  function rotate() {
    angle += speed;
    container.style.transform = `translateZ(-350px) rotateY(${angle}deg)`;
    requestAnimationFrame(rotate);
  }

  rotate();
});
