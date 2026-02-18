const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const applyTheme = (dark) => {
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('studysync-theme', dark ? 'dark' : 'light');
};

if (localStorage.getItem('studysync-theme') === 'dark') {
  applyTheme(true);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    applyTheme(!isDark);
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

if (chatForm && chatInput && chatMessages) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!chatInput.value.trim()) return;

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = `You: ${chatInput.value.trim()}`;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
  });
}
