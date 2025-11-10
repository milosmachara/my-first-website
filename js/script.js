$(function () {
  $(".Home").click(function () {
    window.location.href = "index.html"; // Presmerovanie na domovskú stránku
  });
});

const faders = document.querySelectorAll(".fade-in"); // vyber všetky elementy s triedou fade-in

const appearOptions = { threshold: 0.1 }; // element sa považuje za "viditeľný", keď je 10% v okne prehliadača

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // už nepotrebujeme sledovať tento element, prestane sledovať, aby sa animácia nespúšťala opakovane.
    }
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

// Po načítaní stránky vždy scroll na vrch
window.onload = function () {
  window.scrollTo(0, 0);
};

// Nájdeme element s triedou "iam"
const quote = document.querySelector(".iam");

// Uložíme si texty
const slovakText =
  '„Nikdy nie je neskoro byť tým, kým si mal byť.“<span class="eliot"><br>-George Eliot</span>';
const englishText =
  '“It is never too late to be who you might have been.”<span class="eliot"><br>-George Eliot</span>';

// Keď prejdem myšou – zmeň text
quote.addEventListener("mouseenter", () => {
  quote.innerHTML = englishText;
});

// Keď kurzor odíde – vráť späť
quote.addEventListener("mouseleave", () => {
  quote.innerHTML = slovakText;
});
