// النظام القائم على قائمة البرغر
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener("click", function (event) {
  const navLinks = document.querySelector(".nav-links");
  const burgerMenu = document.querySelector(".burger-menu"); // Assuming your burger menu has the class "burger-menu"

  // If the click is outside the navLinks and burgerMenu, close the menu
  if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

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
// Handling form submission and error handling
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Form data collection
    const formData = new FormData(this);

    // Send the form data to Formspree via fetch
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Show confirmation pop-up if submission is successful
          document.getElementById("confirmationPopup").style.display = "flex";
        } else {
          // Show error message if submission failed
          alert("حدث خطأ! يرجى المحاولة لاحقًا.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("حدث خطأ! يرجى المحاولة لاحقًا.");
      });
  });

// Close the confirmation pop-up when the user clicks the close button
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("confirmationPopup").style.display = "none";
});

// Close the pop-up if the user clicks anywhere outside of the pop-up content
document
  .getElementById("confirmationPopup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("confirmationPopup").style.display = "none";
    }
  });
