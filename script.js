// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Particles.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, distance: 150, color: "#00e6e6" },
    color: { value: "#00e6e6" }
  }
});


