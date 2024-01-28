// Importing styles and components
import "./style.css";
import Button from "./components/ui/button";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Autoplay, Navigation, Grid, Pagination } from "swiper/modules";
import createThreadCard from "./components/ui/threats-card";
import header from './components/header.html'
import banner from './components/banner.html'
import brandArea from './components/brand-area.html'
import stats from './components/stats.html'
import expertise from './components/expertise.html'
import risk from './components/risk.html'
import success from './components/success.html'
import social from './components/social.html'
import visual from './components/visual.html'
import company from './components/company.html'
import bakery from './components/bakery.html'
import form from './components/form.html'
import team from './components/team.html'
import faq from './components/faq.html'
import guide from './components/guide.html'
import topFooter from './components/top-footer.html'
import bottomFooter from './components/bottom-footer.html'
import { toggleMobileMenu } from "./js/mobile-menu";

// Load partials .html in index.html
document.getElementById('header-container').innerHTML = header;
document.getElementById('banner-container').innerHTML = banner;
document.getElementById('brand-area-container').innerHTML = brandArea;
document.getElementById('stats-container').innerHTML = stats;
document.getElementById('expertise-container').innerHTML = expertise;
document.getElementById('risk-container').innerHTML = risk;
document.getElementById('success-container').innerHTML = success;
document.getElementById('social-container').innerHTML = social;
document.getElementById('visual-container').innerHTML = visual;
document.getElementById('company-container').innerHTML = company;
document.getElementById('bakery-container').innerHTML = bakery;
document.getElementById('form-container').innerHTML = form;
document.getElementById('team-container').innerHTML = team;
document.getElementById('faq-container').innerHTML = faq;
document.getElementById('guide-container').innerHTML = guide;
document.getElementById('top-footer-container').innerHTML = topFooter;
document.getElementById('bottom-footer-container').innerHTML = bottomFooter;

// Mobile menu
window.toggleMobileMenu = toggleMobileMenu;

// Initializing components
const viewPlansButton = Button("View Our Plans");
document.getElementById("banner-container").appendChild(viewPlansButton);

// Function to animate numerical values
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}



// Initializing ScrollReveal for animations
const sr = ScrollReveal();
sr.reveal(".stat-card", {
  afterReveal: function (el) {
    const number = el.querySelector(".stat-number");
    const endValue = parseInt(number.textContent.replace(/\D/g, ""));
    animateValue(number, 0, endValue, 2000); // 2000 ms = 2 seconds
  },
});

const contactUsButton = Button("Contact Us");
document.getElementById("stats-section").appendChild(contactUsButton);

// Initializing Swiper for sliding elements
const swiper = new Swiper(".swiper-container-without-navigation", {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 24,
});

const swiperWithNavigation = new Swiper(".swiper-container-with-navigation", {
  modules: [Autoplay, Navigation, Grid],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 22.4,
  autoplay: {
    delay: 8000, // Zmiana na 8 sekund
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next", // Klasa przycisku "następny slajd"
    prevEl: ".swiper-button-prev", // Klasa przycisku "poprzedni slajd"
  },
});

const swiperWithPagination = new Swiper(".swiper-container-with-pagination", {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

});

const viewMoreButton = Button("View More");
document.getElementById("view-more-button").appendChild(viewMoreButton);


// Do poprawy
const startReplyingButton = Button("Start Replying Faster");
document.getElementById("risk-container").appendChild(startReplyingButton);

// Do poprawy
const successButton = Button("Start Driving Sales");
document.getElementById("success-container").appendChild(successButton);

// Data for threat cards
let cardsData = [
  { text: "Brand Impersonation", backgroundColor: "#FFFAF1", borderColor: "#FFD78D" },
  { text: "Compromised Account", backgroundColor: "#FFFFEE", borderColor: "#FFEF3E" },
  { text: "Scams", backgroundColor: "#FFFAF1", borderColor: "#FFD78D" },
  { text: "Hi-jacked Posts", backgroundColor: "#F6FCFF", borderColor: "#C0D4F1" },
  { text: "Bad Sentiment", backgroundColor: "#FFFFEE", borderColor: "#FFEF3E" },
  { text: "Bad Reviews", backgroundColor: "#FFF6FA", borderColor: "#FFB6D8" },
  { text: "Competitor Envy", backgroundColor: "#F7FFF7", borderColor: "#CFE2CF" },
  { text: "False Media", backgroundColor: "#F6FCFF", borderColor: "#C0D4F1" },
  { text: "Low Social Authority", backgroundColor: "#FFF6F6", borderColor: "#FFAFAF" },
  { text: "Information Inaccuracy", backgroundColor: "#FCF9FF", borderColor: "#DAC0FF" },
  { text: "Missed Messages", backgroundColor: "#FFF6FF", borderColor: "#FFB6FF" },
];

const threatsCards = document.getElementById("social-trolls-threats");
cardsData.forEach((card) => {
  createThreadCard(threatsCards, card.text, card.backgroundColor, card.borderColor);
});

const protectBrandButton = Button("Protect Your Brand");
document.getElementById("social-container").appendChild(protectBrandButton);

document.getElementById("visually-impressive__button").appendChild(protectBrandButton);

const discoverMoreButton = Button("Discover More");
document.getElementById("company-container").appendChild(discoverMoreButton);

const consultationButton = Button("Consultation");
document.getElementById("form").appendChild(consultationButton);

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    if (button.classList.contains('active')) {
      button.classList.remove('active');
      accordionContent.style.maxHeight = 0;
    } else {
      document.querySelectorAll('.accordion-button').forEach(otherButton => {
        otherButton.classList.remove('active');
        otherButton.nextElementSibling.style.maxHeight = 0;
      });
      button.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
