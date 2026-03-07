export const faqPage = `
<div class="page" id="page-faq">
  <div class="page-header">
    <p class="breadcrumb">Get Started</p>
    <h1 class="page-title">Frequently Asked Questions</h1>
    <p class="page-sub">Common questions about getting started with Odella.</p>
  </div>

  <div class="step-block reveal" id="faq-what">
    <h2>What is Odella?</h2>
    <p class="step-desc">Odella is an AI workforce platform that lets you create, deploy, and manage AI-powered digital employees. They handle tasks like research, content generation, data processing, and customer communication — at scale, 24/7.</p>
  </div>

  <div class="step-block reveal" id="faq-start">
    <h2>How do I get started?</h2>
    <p class="step-desc">Follow the <a href="#" onclick="showPage('quickstart');return false;" style="color:var(--brand);font-weight:600;">Quickstart Guide</a>. Sign up, set up your workspace, and launch your first workflow — no developer needed.</p>
  </div>

  <div class="step-block reveal" id="faq-free">
    <h2>Is there a free plan?</h2>
    <p class="step-desc">Yes. Odella offers a free tier to explore the platform. Visit <a href="https://odella.ai" target="_blank" style="color:var(--brand);">odella.ai</a> for current pricing details.</p>
  </div>

  <div class="step-block reveal" id="faq-secure">
    <h2>Is my data secure?</h2>
    <p class="step-desc">Absolutely. Odella uses enterprise-grade security: encryption at rest and in transit, role-based access control, SSO support, and audit logs. Your data is never used to train third-party AI models.</p>
  </div>

  <div class="page-nav">
    <a class="pn-btn" onclick="showPage('quickstart');return false;" href="#">
      <span class="pn-label">&larr; Previous</span>
      <span class="pn-title">Quickstart Guide</span>
    </a>
    <a class="pn-btn next" onclick="showPage('videos');return false;" href="#">
      <span class="pn-label">Next &rarr;</span>
      <span class="pn-title">Video Tutorials</span>
    </a>
  </div>
  <p class="content-footer">Made for <a href="https://odella.ai" target="_blank">Odella.ai</a></p>
</div>
`;
