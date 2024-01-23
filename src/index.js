import './style.css'
import Button from './components/button';
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'


window.toggleMobileMenu = function() {
    let menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
  }

const viewPlansButton = Button('View Our Plans');

document.getElementById('banner-section').appendChild(viewPlansButton);

// Funkcja do animowania wartości
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

// Użycie ScrollReveal
const sr = ScrollReveal();
sr.reveal('.stat-card', {
    afterReveal: function (el) {
        // Znajdowanie elementu stat-number
        const number = el.querySelector('.stat-number');
        
        // Parsowanie wartości końcowej
        const endValue = parseInt(number.textContent.replace(/\D/g,''));

        // Animacja wartości
        animateValue(number, 0, endValue, 2000); // 2000 ms = 2 sekundy
    }
});

const contactUsButton = Button('Contact Us');

document.getElementById('stats-section').appendChild(contactUsButton);


const swiper = new Swiper('.swiper-container', {
    modules: [Autoplay],
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  });