export const videosPage = `
<div class="page" id="page-videos">
  <div class="page-header">
    <p class="breadcrumb">Product Overview</p>
    <h1 class="page-title">Video Tutorials</h1>
    <p class="page-sub">Step-by-step walkthroughs of everything Odella can do.</p>
  </div>

  <div class="step-block reveal" id="vid-featured">
    <h2>Getting Started</h2>
    <p class="step-desc">A complete walkthrough — from creating your account to launching your first AI workflow.</p>
    <div class="video-wrap" style="margin-bottom:0.75rem;">
      <video autoplay muted loop playsinline controls>
        <source src="../Downloads/WhatsApp Video 2026-03-07 at 1.09.23 PM.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: Full Odella onboarding walkthrough</p>
  </div>

  <div class="step-block reveal" id="vid-more">
    <h2>The AI Workforce Factory</h2>
    <p class="step-desc">See how Odella lets you design, build, and deploy purpose-built AI employees that work to your standards around the clock.</p>
    <div class="video-wrap" style="margin-bottom:0.75rem;">
      <video autoplay muted loop playsinline controls>
        <source src="../OneDrive/Desktop/Blueprxnt/WhatsApp Video 2026-03-07 at 3.05.43 PM.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: The AI Workforce Factory overview</p>
  </div>

  <div class="step-block reveal" id="vid-build">
    <h2>Building Your AI Employees</h2>
    <p class="step-desc">A step-by-step walkthrough of creating a custom AI employee — from defining a role to deploying it in your workflow.</p>
    <div class="video-wrap" style="margin-bottom:0.75rem;">
      <video autoplay muted loop playsinline controls>
        <source src="../OneDrive/Desktop/Blueprxnt/WhatsApp Video 2026-03-07 at 3.13.04 PM.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: Building your AI employees step by step</p>
  </div>

  <div class="page-nav">
    <a class="pn-btn" onclick="showPage('faq');return false;" href="#">
      <span class="pn-label">&larr; Previous</span>
      <span class="pn-title">FAQ</span>
    </a>
    <a class="pn-btn next" onclick="showPage('workforce');return false;" href="#">
      <span class="pn-label">Next &rarr;</span>
      <span class="pn-title">Workforce</span>
    </a>
  </div>
  <p class="content-footer">Made for <a href="https://odella.ai" target="_blank">Odella.ai</a></p>
</div>
`;
