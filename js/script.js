// Intersection Observer for Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(25px)';
  el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(el);
});

// Search functionality
const searchInput = document.getElementById('search');
const findButton = document.getElementById('find');
const messageEl = document.getElementById('message');

const stations = [
  {
    name: 'Baratao.mais Centro',
    address: 'Av. Principal, 1000 • Centro',
    distance: '1,2 km',
    city: 'centro'
  },
  {
    name: 'Baratao.mais Norte',
    address: 'Av. das Nações, 450 • Zona Norte',
    distance: '3,8 km',
    city: 'zona norte'
  },
  {
    name: 'Baratao.mais Sul',
    address: 'Rod. Estadual, km 12 • Zona Sul',
    distance: '6,4 km',
    city: 'zona sul'
  }
];

findButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (!searchTerm) {
    messageEl.textContent = 'Por favor, digite uma cidade, bairro ou CEP';
    messageEl.style.color = '#e74c3c';
    return;
  }

  const found = stations.some(station => 
    station.city.includes(searchTerm) || 
    station.name.toLowerCase().includes(searchTerm)
  );

  if (found) {
    messageEl.textContent = `✓ ${stations.filter(s => s.city.includes(searchTerm) || s.name.toLowerCase().includes(searchTerm)).length} posto(s) encontrado(s) próximo(s) a você!`;
    messageEl.style.color = '#009d4d';
  } else {
    messageEl.textContent = 'Nenhum posto encontrado nessa localidade. Tente outra busca.';
    messageEl.style.color = '#e74c3c';
  }
});

// Search on Enter key
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    findButton.click();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Mobile menu toggle (if you add a hamburger menu)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  });
}

// Add scroll animation to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Add scroll indicator
window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.documentElement.style.setProperty('--scroll', scrollPercentage + '%');
});

console.log('✓ Baratao.mais App Loaded - Combustível de qualidade. Economia de verdade.');