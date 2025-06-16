// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Page navigation
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const homePage = document.getElementById('home');
const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const mobileLinks = document.querySelectorAll('.mobile-link');
const footerLinks = document.querySelectorAll('.footer-link');

function showPage(page) {
  homePage.classList.add('hidden');
  aboutPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  page.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  window.scrollTo(0, 0);
}

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPage(homePage);
});
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPage(aboutPage);
});
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPage(contactPage);
});

mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#home') showPage(homePage);
    if (href === '#about') showPage(aboutPage);
    if (href === '#contact') showPage(contactPage);
  });
});

footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#home') showPage(homePage);
    if (href === '#about') showPage(aboutPage);
    if (href === '#contact') showPage(contactPage);
  });
});

// Override initial hash behavior to always start on home
window.addEventListener('load', () => {
  history.replaceState(null, null, ' ');
  showPage(homePage);
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash === '#about') showPage(aboutPage);
  else if (hash === '#contact') showPage(contactPage);
  else showPage(homePage);
});

// Newsletter fake subscription
function handleNewsletterSubscribe() {
  const emailInput = document.getElementById("newsletter-email");
  const email = emailInput.value.trim();

  if (email) {
    alert("Email aboneliğiniz başarıyla başladı!");
    emailInput.value = "";
  } else {
    alert("Lütfen geçerli bir email adresi girin.");
  }
}

// Hero image slideshow
const heroSlideshow = document.getElementById('hero-slideshow');
const heroBg = document.getElementById('hero-bg');
const heroImages = [
  'assets/images/hero1.jpg',
  'assets/images/hero2.jpg',
  'assets/images/hero3.jpg',
  'assets/images/hero4.jpg',
  'assets/images/hero5.jpg',
  'assets/images/hero6.jpg',
  'assets/images/hero7.jpg',
  'assets/images/hero8.jpg',
  'assets/images/hero9.jpg',
  'assets/images/hero10.jpg'
];
let currentHeroIndex = 0;

function updateHeroImage() {
  heroBg.style.opacity = 0;
  setTimeout(() => {
    heroBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImages[currentHeroIndex]}')`;
    heroBg.style.opacity = 1;
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  }, 500);
}

if (heroSlideshow && heroBg) {
  updateHeroImage();
  setInterval(updateHeroImage, 5000);
}
