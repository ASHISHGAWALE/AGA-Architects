// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-btn');
const logo = document.querySelector('.logo');

// Open menu
menuToggle.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});

// Close menu when clicking a link
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });
});

// Smooth scroll for footer links
document.querySelectorAll('.footer-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Color change based on background brightness
// Color change based on background brightness
const sections = document.querySelectorAll('section, footer');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bgColor = window.getComputedStyle(entry.target).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      const brightness = (0.299*rgb[0] + 0.587*rgb[1] + 0.114*rgb[2]);

      if (brightness < 128) {
        logo.style.color = '#fff';
        menuToggle.style.color = '#fff';
      } else {
        logo.style.color = '#000';
        menuToggle.style.color = '#000';
      }
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// ✅ Reset to default when at top of page
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    logo.style.color = '#000';       // default black at top
    menuToggle.style.color = '#000'; // default black at top
  }
});

// Auto-link project cards to project pages
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    window.location.href = `projects/project0${index + 1}.html`;
  });
});