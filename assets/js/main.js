// ============================================================
//  MANNI RAAM REDDY PANNALA — Portfolio JavaScript
// ============================================================

/* ===== SMOOTH SCROLL + SCROLLSPY ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Sticky nav shadow
  navbar.classList.toggle('scrolled', y > 20);

  // Back-to-top visibility
  backToTop.classList.toggle('visible', y > 400);

  // Scrollspy: highlight nav link for current section
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// Nav link smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Back to top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

/* ===== SCROLL REVEAL (IntersectionObserver) ===== */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings within same parent
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ===== STAT COUNTER ANIMATION ===== */
const statNums = document.querySelectorAll('.stat-num[data-target]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };

    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));

/* ===== PROJECTS TAB SWITCHING ===== */
const companyTabs = document.querySelectorAll('.company-tab');
const projectPanels = document.querySelectorAll('.project-panel');

companyTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const company = tab.dataset.company;

    // Update tabs
    companyTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Update panels
    projectPanels.forEach(panel => {
      const isTarget = panel.id === `proj-${company}`;
      panel.hidden = !isTarget;
      if (!isTarget) panel.classList.remove('active');
    });

    const target = document.getElementById(`proj-${company}`);
    if (target) target.classList.add('active');
  });
});

/* ===== COPY BUTTONS + TOAST ===== */
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg = 'Copied!') {
  toast.innerHTML = `<i class="fa-solid fa-check"></i> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const text = btn.dataset.copy;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied!');
      // Brief feedback on icon
      const icon = btn.querySelector('i');
      icon.className = 'fa-solid fa-check';
      setTimeout(() => icon.className = 'fa-regular fa-copy', 1500);
    } catch {
      showToast('Copy failed');
    }
  });
});

/* ===== KEYBOARD NAVIGATION (Tab switching) ===== */
document.querySelector('.company-tabs').addEventListener('keydown', e => {
  const tabs = Array.from(companyTabs);
  const idx = tabs.indexOf(document.activeElement);
  if (idx === -1) return;

  let next;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    next = tabs[(idx + 1) % tabs.length];
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    next = tabs[(idx - 1 + tabs.length) % tabs.length];
  }
  if (next) {
    next.focus();
    next.click();
    e.preventDefault();
  }
});
