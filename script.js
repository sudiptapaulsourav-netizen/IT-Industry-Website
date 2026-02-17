const yearElement = document.getElementById('year');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

yearElement.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');

  formMessage.textContent = `Thanks ${name}! Our team will contact you shortly.`;
  form.reset();
});
