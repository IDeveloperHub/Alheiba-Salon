// نظام القائمة في الجوال
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// التمرير إلى أقسام الصفحة
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// زر العودة للأعلى
const scrollBtn = document.querySelector(".scroll-top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// تفعيل تأثيرات الظهور AOS بسيطة
window.addEventListener("scroll", revealElementsOnScroll);
document.addEventListener("DOMContentLoaded", revealElementsOnScroll);

function revealElementsOnScroll() {
  const elements = document.querySelectorAll("[data-aos]");
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const positionFromTop = el.getBoundingClientRect().top;
    const delay = el.getAttribute("data-aos-delay") || 0;

    if (positionFromTop - windowHeight <= 0) {
      setTimeout(() => {
        el.classList.add("aos-animate");
      }, delay);
    }
  });
}

/* =======================
     شريط الصور (Carousel)
     ======================= */
// Portfolio Slider
const slider = document.getElementById("slider");
const slides = slider.getElementsByClassName("slide");
let currentSlide = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Show the targeted slide
  slides[index].style.display = "block";
}

// Initial display of the first slide
showSlide(currentSlide);

// Move to the previous slide
prevBtn.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

// Move to the next slide
nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Automatically move to the next slide every 5 seconds
setInterval(() => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
}, 2500); // Adjust
