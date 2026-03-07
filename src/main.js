import './style.css';
import { quickstartPage } from './pages/quickstart.js';
import { faqPage } from './pages/faq.js';
import { videosPage } from './pages/videos.js';
import { workforcePage } from './pages/workforce.js';

// ─── PAGE CONFIG ───
const pages = {
  quickstart: {
    nav: 'nav-quickstart',
    sections: [
      { id: 'qs-intro-welcome',      label: 'Welcome to Odella' },
      { id: 'qs-intro-model',        label: 'A New Way to Work' },
      { id: 'qs-intro-capabilities', label: 'What You Can Build' },
      { id: 'qs-intro-enterprise',   label: 'Built for Enterprise' },
      { id: 'qs-step1',              label: 'Step 1 – Create Your Account' },
      { id: 'qs-step2',              label: 'Step 2 – Meet Your AI Workforce' },
      { id: 'qs-step3',              label: 'Step 3 – Start Automating' },
    ]
  },
  faq: {
    nav: 'nav-faq',
    sections: [
      { id: 'faq-what',   label: 'What is Odella?' },
      { id: 'faq-start',  label: 'How do I get started?' },
      { id: 'faq-free',   label: 'Is there a free plan?' },
      { id: 'faq-secure', label: 'Is my data secure?' },
    ]
  },
  videos: {
    nav: 'nav-videos',
    sections: [
      { id: 'vid-featured', label: 'Getting Started' },
      { id: 'vid-more',     label: 'The AI Workforce Factory' },
      { id: 'vid-build',    label: 'Building Your AI Employees' },
    ]
  },
  workforce: {
    nav: 'nav-workforce',
    sections: [
      { id: 'wf-factory',  label: 'The AI Workforce Factory' },
      { id: 'wf-build',    label: 'Building Your AI Employees' },
      { id: 'wf-delegate', label: 'Delegate Work' },
      { id: 'wf-connect',  label: 'Connecting Applications' },
      { id: 'wf-scale',    label: 'Scale Without Costs' },
    ]
  }
};

// ─── BUILD HTML ───
const LOGO_SVG = `<svg viewBox="0 0 40 40" fill="none">
  <path d="M20 4C14 4 10 9 10 14C10 19 14 20 20 20C26 20 30 19 30 14C30 9 26 4 20 4Z" fill="#6C47FF"/>
  <path d="M20 36C26 36 30 31 30 26C30 21 26 20 20 20C14 20 10 21 10 26C10 31 14 36 20 36Z" fill="#6C47FF"/>
  <path d="M4 20C4 14 9 10 14 10C19 10 20 14 20 20C20 26 19 30 14 30C9 30 4 26 4 20Z" fill="#6C47FF"/>
  <path d="M36 20C36 26 31 30 26 30C21 30 20 26 20 20C20 14 21 10 26 10C31 10 36 14 36 20Z" fill="#6C47FF"/>
</svg>`;

document.querySelector('#app').innerHTML = `
<!-- TOP NAV -->
<header class="topnav">
  <a class="nav-brand" href="#" onclick="showPage('quickstart');return false;">
    ${LOGO_SVG}
    Odella
  </a>
  <ul class="nav-links">
    <li><a href="https://odella.ai" target="_blank" class="nav-cta">Go to Odella</a></li>
  </ul>
</header>

<!-- FLOATING VIDEO TUTORIALS BUTTON -->
<a onclick="showPage('videos')" id="float-videos-btn" style="position:fixed;top:50vh;transform:translateY(-50%);right:2rem;width:220px;z-index:200;display:flex;align-items:center;justify-content:center;gap:0.45rem;background:var(--brand);color:#fff;padding:0.55rem 1rem;border-radius:8px;font-weight:600;font-size:0.82rem;font-family:'Inter',sans-serif;cursor:pointer;text-decoration:none;box-shadow:0 2px 12px rgba(108,71,255,0.35);transition:background 0.15s;" onmouseover="this.style.background='var(--brand-dark)'" onmouseout="this.style.background='var(--brand)'">
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
  Video Tutorials
</a>

<!-- SHELL -->
<div class="shell">
  <!-- LEFT SIDEBAR -->
  <nav class="left-sidebar">
    <div class="nav-section">
      <p class="nav-section-label">Get Started</p>
      <ul>
        <li>
          <a onclick="showPage('quickstart')" id="nav-quickstart" class="active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Quickstart Guide
          </a>
        </li>
        <li>
          <a onclick="showPage('quickstart');setTimeout(()=>{const el=document.getElementById('qs-step1');if(el)el.scrollIntoView({behavior:'smooth'})},100)" style="padding-left:2rem;font-size:0.8rem;color:var(--sub);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Create your account
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-section">
      <p class="nav-section-label">Product Overview</p>
      <ul>
        <li>
          <a onclick="showPage('videos')" id="nav-videos" style="display:flex;align-items:center;justify-content:space-between;">
            <span style="display:flex;align-items:center;gap:0.5rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              Video Tutorials
            </span>
            <span style="background:var(--brand);color:#fff;font-size:0.6rem;font-weight:700;letter-spacing:0.05em;padding:2px 7px;border-radius:20px;text-transform:uppercase;flex-shrink:0;">New</span>
          </a>
        </li>
        <li>
          <a onclick="showPage('workforce')" id="nav-workforce">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Workforce
          </a>
        </li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Templates</a></li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Workflows</a></li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Documents</a></li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Security</a></li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>Models</a></li>
        <li><a class="dim"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Integrations</a></li>
      </ul>
    </div>
  </nav>

  <!-- MAIN -->
  <main class="main">
    ${quickstartPage}
    ${faqPage}
    ${videosPage}
    ${workforcePage}
  </main>

  <!-- RIGHT SIDEBAR (ON THIS PAGE) -->
  <aside class="right-sidebar">
    <p class="otp-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
      On this page
    </p>
    <ul class="otp-list" id="otp-list"></ul>
  </aside>
</div>
`;

// ─── APP LOGIC ───
let otpObserver = null;

window.showPage = function(name) {
  if (!pages[name]) return;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  document.querySelectorAll('.nav-section a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  const otpList = document.getElementById('otp-list');
  otpList.innerHTML = pages[name].sections.map((s, i) =>
    `<li><a href="#${s.id}" data-id="${s.id}" class="${i === 0 ? 'active' : ''}">${s.label}</a></li>`
  ).join('');

  window.scrollTo({ top: 0, behavior: 'instant' });

  document.querySelectorAll('#page-' + name + ' .reveal').forEach(el => el.classList.remove('visible'));
  setTimeout(() => triggerReveals(name), 50);
  setupOtp(name);
};

function triggerReveals(name) {
  const els = document.querySelectorAll('#page-' + name + ' .reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

function setupOtp(name) {
  if (otpObserver) otpObserver.disconnect();
  const ids = pages[name].sections.map(s => s.id);
  otpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.otp-list a').forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.otp-list a[data-id="${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  ids.forEach(id => { const el = document.getElementById(id); if (el) otpObserver.observe(el); });
}

window.copyLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.copy-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
    setTimeout(() => btn.innerHTML = orig, 1500);
  });
};

// Init
showPage('quickstart');
