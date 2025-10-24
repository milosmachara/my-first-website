$(function () {
  $(".Home").click(function () {
    window.location.href = "index.html"; // Presmerovanie na domovskú stránku
  });
});
window.addEventListener("scroll", () => {
  const mainImg = document.querySelector(".main-img img");
  let scrollY = window.scrollY;
  
  // rýchlosť efektu – môžeš doladiť (0.3 = jemný pohyb)
  mainImg.style.transform = `translateY(${scrollY * 0.3}px)`;
});
