// Typing effect
const text = "Graphic Designer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".hero-content h2").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

document.querySelector(".hero-content h2").innerHTML = "";
typeEffect();


// Lightbox
function openImg(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeImg() {
  document.getElementById("lightbox").style.display = "none";
}


// Scroll animation
const cards = document.querySelectorAll(".grid img");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
document.querySelector(".btn").addEventListener("click", function () {
  const workSection = document.getElementById("work");

  workSection.style.boxShadow = "0 0 30px #00ffd5";

  setTimeout(() => {
    workSection.style.boxShadow = "none";
  }, 1500);
});