// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Handle background thumbnails hover effects
const bgThumbnails = document.querySelector(".bg-thumbnails");
const thumbnailImages = bgThumbnails.querySelectorAll("img");

thumbnailImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.opacity = "0.4";
    img.style.filter = "blur(0px)";
    img.style.transform = "scale(1)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.opacity = "0.15";
    img.style.filter = "blur(2px)";
    img.style.transform = "scale(0.95)";
  });
});

// Pause animation on hover
bgThumbnails.addEventListener("mouseenter", () => {
  bgThumbnails.style.animationPlayState = "paused";
});

bgThumbnails.addEventListener("mouseleave", () => {
  bgThumbnails.style.animationPlayState = "running";
});

// Particles.js configuration for right side background
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: "#FFBF00" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#FFBF00",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 6 },
    },
  },
  retina_detect: true,
});

// Typed.js for hero section
var typed = new Typed("#typed", {
  strings: ["Web Developer", "MERN Stack Enthusiast", "UI/UX Designer"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter projects
    projects.forEach((project) => {
      const category = project.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Contact form submission (placeholder)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Placeholder for form submission
    document.getElementById("form-response").innerHTML =
      "<p>Thank you for your message! I will get back to you soon.</p>";
    this.reset();
  });

// Animate skill progress bars on scroll
const skillItems = document.querySelectorAll(".skill-item");

function animateSkills() {
  skillItems.forEach((item) => {
    const progressBar = item.querySelector(".progress");
    const percentage = progressBar.style.width;
    progressBar.style.width = "0%";
    setTimeout(() => {
      progressBar.style.width = percentage;
    }, 500);
  });
}

// Trigger skill animation when skills section is in view
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

observer.observe(skillsSection);

// Add hover effects to projects
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "translateY(-10px)";
    project.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "translateY(0)";
    project.style.boxShadow = "none";
  });
});

// Theme toggle has been removed; the site uses its default theme styling.


// Back to Top Button - Removed as per user request

// PWA Service Worker Registration (placeholder)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => console.log("SW registered"))
      .catch((error) => console.log("SW registration failed"));
  });
}
