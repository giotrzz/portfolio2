/* =====================
   GREETING BY TIME OF DAY
   ===================== */
function setGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  let text = '';
  let emoji = '';

  if (hour >= 5 && hour < 12) {
    text = 'Bom dia! ☀️';
  } else if (hour >= 12 && hour < 18) {
    text = 'Boa tarde! 🌤️';
  } else {
    text = 'Boa noite! 🌙';
  }

  greetingEl.textContent = text;
}

setGreeting();

/* =====================
   NAVBAR SCROLL EFFECT
   ===================== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =====================
   HAMBURGER MENU
   ===================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

/* =====================
   SCROLL REVEAL
   ===================== */
const revealEls = document.querySelectorAll(
  '.sobre-grid, .projeto-card, .skill-card, .timeline-item, .curso-card, .section-title, .section-label'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children if needed
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* Stagger cards inside grids */
function staggerGrid(gridSelector) {
  const cards = document.querySelectorAll(gridSelector);
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
}

staggerGrid('.projeto-card');
staggerGrid('.skill-card');
staggerGrid('.timeline-item');
staggerGrid('.curso-card');

/* =====================
   SKILL BARS ANIMATION
   ===================== */
const skillFills = document.querySelectorAll('.skill-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => barObserver.observe(fill));

/* =====================
   SMOOTH ACTIVE NAV LINK
   ===================== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.style.color = '';
        item.style.fontWeight = '';
      });
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) {
        active.style.color = 'var(--primary)';
        active.style.fontWeight = '600';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));
