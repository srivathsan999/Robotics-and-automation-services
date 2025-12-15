// Main JavaScript for Robotics & Automation Services Website

// Theme Toggle Functionality
(function() {
  // Get theme from localStorage or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply theme on page load
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  }
  
  // Theme toggle function
  function toggleTheme() {
    const isLight = document.documentElement.classList.contains('light-theme');
    
    if (isLight) {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      updateThemeIcons('☀️');
    } else {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      updateThemeIcons('🌙');
    }
  }
  
  // Update all theme toggle icons
  function updateThemeIcons(icon) {
    const toggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile, #theme-toggle-tablet');
    toggles.forEach(toggle => {
      if (toggle) toggle.innerHTML = icon;
    });
  }
  
  // Theme toggle button handlers
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeToggleTablet = document.getElementById('theme-toggle-tablet');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
  
  if (themeToggleTablet) {
    themeToggleTablet.addEventListener('click', toggleTheme);
  }
  
  // Set initial icons
  if (currentTheme === 'light') {
    updateThemeIcons('🌙');
  } else {
    updateThemeIcons('☀️');
  }
})();

// Scroll Animation with Intersection Observer
(function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
  });
})();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Mobile menu toggle
(function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
})();

// Tablet menu toggle
(function() {
  const tabletMenuButton = document.getElementById('tablet-menu-button');
  const tabletMenu = document.getElementById('tablet-menu');
  
  if (tabletMenuButton && tabletMenu) {
    tabletMenuButton.addEventListener('click', function() {
      tabletMenu.classList.toggle('hidden');
    });
  }
})();

// Form validation and submission handlers
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  // Contact form handler
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real application, this would submit to a backend
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Login form handler
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real application, this would authenticate the user
      alert('Login functionality would be handled by backend.');
    });
  }
  
  // Register form handler
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real application, this would register the user
      alert('Registration functionality would be handled by backend.');
    });
  }
});

