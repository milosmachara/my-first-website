$(function () {
  $(".Home").click(function () {
    window.location.href = "index.html"; // Presmerovanie na domovskú stránku
  });
});


const faders = document.querySelectorAll('.fade-in'); // vyber všetky elementy s triedou fade-in

const appearOptions = { threshold: 0.1 }; // element sa považuje za "viditeľný", keď je 10% v okne prehliadača

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // už nepotrebujeme sledovať tento element, prestane sledovať, aby sa animácia nespúšťala opakovane.
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


