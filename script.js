document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('hidden');
  }

  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener('click', openMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Page sections
  const sections = {
    '#home': document.getElementById('home'),
    '#about': document.getElementById('about'),
    '#contact': document.getElementById('contact')
  };

  function hideAllSections() {
    Object.values(sections).forEach(section => section.classList.add('hidden'));
  }

  function showSection(id) {
    hideAllSections();
    const section = sections[id];
    if (section) {
      section.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      showSection(target);
      history.pushState(null, null, target);
    });
  });

  const initialHash = window.location.hash || '#home';
  showSection(initialHash);

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    showSection(hash);
  });

  const emailInput = document.getElementById("newsletter-email");
  if (emailInput) {
    emailInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleNewsletterSubscribe();
    });
  }

  function handleNewsletterSubscribe() {
    const email = emailInput.value.trim();
    if (email) {
      alert("Email aboneliğiniz başarıyla başladı!");
      emailInput.value = "";
    } else {
      alert("Lütfen geçerli bir email adresi girin.");
    }
  }

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
    if (!heroBg) return;
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
});
