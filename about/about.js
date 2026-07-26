const menuIcon = document.querySelector('.menu-icon');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-btn');

// Open menu when clicking the 3-line icon
menuIcon.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

// Close menu when clicking the × button
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});

// Optional: close menu when clicking outside the menu content
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove('active');
  }
});
