// Importing styles and components
import "./style.css";
import Button from "./components/button";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Autoplay, Navigation, Grid } from "swiper/modules";
import createThreadCard from "./components/threats-card";

// Function to toggle mobile menu visibility
function toggleMobileMenu() {
  let menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

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

// Initializing components
window.toggleMobileMenu = toggleMobileMenu;

const viewPlansButton = Button("View Our Plans");
document.getElementById("banner-section").appendChild(viewPlansButton);

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

const viewMoreButton = Button("View More");
document.getElementById("view-more-button").appendChild(viewMoreButton);

const startReplyingButton = Button("Start Replying Faster");
document.getElementById("team").appendChild(startReplyingButton);

const successButton = Button("Start Driving Sales");
document.getElementById("success").appendChild(successButton);

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
document.getElementById("social-trolls").appendChild(protectBrandButton);
