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

// Home dropdown functionality
(function() {
  // Tablet dropdown
  const tabletDropdownButton = document.getElementById('home-dropdown-button-tablet');
  const tabletDropdown = document.getElementById('home-dropdown-tablet');
  if (tabletDropdownButton && tabletDropdown) {
    tabletDropdownButton.addEventListener('click', function(e) {
      e.stopPropagation();
      tabletDropdown.classList.toggle('hidden');
    });
  }

  // Mobile dropdown
  const mobileDropdownButton = document.getElementById('home-dropdown-button-mobile');
  const mobileDropdown = document.getElementById('home-dropdown-mobile');
  if (mobileDropdownButton && mobileDropdown) {
    mobileDropdownButton.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileDropdown.classList.toggle('hidden');
    });
  }

  // Desktop dropdown keyboard accessibility
  const desktopDropdownButton = document.getElementById('home-dropdown-button-desktop');
  const desktopDropdown = document.querySelector('#home-dropdown-desktop > div[role="menu"]');
  if (desktopDropdownButton && desktopDropdown) {
    // Keyboard support
    desktopDropdownButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        desktopDropdown.classList.toggle('opacity-0');
        desktopDropdown.classList.toggle('invisible');
        desktopDropdown.classList.toggle('opacity-100');
        desktopDropdown.classList.toggle('visible');
      }
    });
  }
})();

// Form validation and submission handlers
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const caseFilters = document.getElementById('case-filters');
  const caseCards = document.querySelectorAll('.case-study-preview .case-card');
  
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
  
  // Case Studies filter chips
  if (caseFilters && caseCards.length) {
    const chips = caseFilters.querySelectorAll('[data-filter]');
    function setActiveChip(chip) {
      chips.forEach(c => {
        c.classList.remove('bg-[#00D9FF]', 'text-[#0B0F1A]');
        c.classList.add('bg-[#00D9FF]/10', 'text-[#00D9FF]');
      });
      chip.classList.remove('bg-[#00D9FF]/10', 'text-[#00D9FF]');
      chip.classList.add('bg-[#00D9FF]', 'text-[#0B0F1A]');
    }
    chips.forEach(chip => {
      chip.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        setActiveChip(this);
        caseCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || filter === category) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
    // Set default active to 'All'
    const allChip = caseFilters.querySelector('[data-filter="all"]');
    if (allChip) {
      setActiveChip(allChip);
    }
  }
});
