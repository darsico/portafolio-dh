"use strict";
// Hola, soy Diego Huaman,
// Puedo crear aplicaciones web fascinantes.
const documentReady = () => {
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroTitle = document.getElementById("hero-title");

  const latestWorkLink = document.getElementById("latest-work-link");

  const profile = ["Hola! Soy Diego Huaman,", "Puedo crear aplicaciones web fascinantes."];

  const workLinks = ["https://darsico.github.io/calculadora-retro/"];

  heroSubtitle.innerHTML = profile[0];
  heroTitle.innerHTML = profile[1];
  latestWorkLink.href = workLinks[0];
};

document.addEventListener("DOMContentLoaded", documentReady);
