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
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(button.classList.contains('is-active')));
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    filterButtons.forEach((item) => item.setAttribute('aria-selected', String(item === button)));
    galleryCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const galleryImages = document.querySelectorAll('.gallery-image img');
if (galleryImages.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Shiko fotografinë');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Mbyll fotografinë">×</button><img class="lightbox-image" alt="" />';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  let lastTrigger = null;
  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lastTrigger?.focus();
  };
  galleryImages.forEach((image) => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Shiko fotografinë: ${image.alt}`);
    image.setAttribute('aria-haspopup', 'dialog');
    const openLightbox = () => {
      lastTrigger = image;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('is-open');
      document.body.classList.add('lightbox-open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.querySelector('.lightbox-close').focus();
    };
    image.addEventListener('click', openLightbox);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox();
      }
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}

const orderForm = document.querySelector('#order-form');
const formStatus = document.querySelector('#form-status');

orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(orderForm);
  const occasion = String(data.get('occasion') || '');
  const isRestaurant = occasion.toLowerCase().includes('restorant');
  const message = [
    isRestaurant
      ? 'Përshëndetje Nora’s Cake, dua të bëj një kërkesë për cheesecake për restorant.'
      : 'Përshëndetje Nora’s Cake, dua të bëj një kërkesë për porosi private.',
    `Emri: ${data.get('name')}`,
    `Telefoni: ${data.get('phone')}`,
    isRestaurant ? `Restoranti / rasti: ${occasion}` : `Rasti: ${occasion}`,
    `Data ose ritmi i furnizimit: ${data.get('date') || 'Ende e papërcaktuar'}`,
    isRestaurant ? `Sasia dhe kërkesa: ${data.get('message') || 'Nuk është specifikuar'}` : `Ideja, shija dhe numri i personave: ${data.get('message') || 'Nuk është specifikuar'}`,
  ].join('\n');
  const whatsappUrl = `https://wa.me/38345632148?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  if (formStatus) {
    formStatus.textContent = 'Kërkesa u përgatit për WhatsApp. Kontrolloni dritaren e re dhe dërgojeni mesazhin te Nora’s Cake.';
    formStatus.classList.add('is-success');
  }
});

const templateButtons = document.querySelectorAll('.template-copy');
const templateStatus = document.querySelector('#template-status');
templateButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const template = button.closest('.template-card')?.querySelector('pre')?.textContent?.trim();
    if (!template) return;
    try {
      await navigator.clipboard.writeText(template);
      if (templateStatus) templateStatus.textContent = 'Mesazhi u kopjua. Tani mund ta ngjisni në WhatsApp.';
    } catch (error) {
      if (templateStatus) templateStatus.textContent = 'Kopjimi automatik nuk u lejua nga shfletuesi. Përzgjidhni tekstin e mesazhit dhe kopjojeni manualisht.';
    }
  });
});

if (!document.querySelector('.floating-whatsapp')) {
  const floatingWhatsapp = document.createElement('a');
  floatingWhatsapp.className = 'floating-whatsapp';
  floatingWhatsapp.href = 'https://wa.me/38345632148?text=Përshëndetje%20Nora’s%20Cake,%20dua%20të%20bëj%20një%20porosi.';
  floatingWhatsapp.target = '_blank';
  floatingWhatsapp.rel = 'noreferrer';
  floatingWhatsapp.innerHTML = '<span class="floating-whatsapp-dot">⌁</span><span>WhatsApp Nora’s Cake</span><b>↗</b>';
  document.body.appendChild(floatingWhatsapp);
}
