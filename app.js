const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.desktop-nav a');

menuToggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Mbyll menunë' : 'Hap menunë');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    galleryCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const orderForm = document.querySelector('#order-form');
const formStatus = document.querySelector('#form-status');

orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formStatus) {
    formStatus.textContent = 'Faleminderit — kërkesa juaj është gati për t’u dërguar. Për versionin final, kjo lidhet direkt me WhatsApp-in ose emailin e Nora’s Cake.';
    formStatus.classList.add('is-success');
  }
  orderForm.reset();
});
