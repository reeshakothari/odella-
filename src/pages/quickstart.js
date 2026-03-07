export const quickstartPage = `
<div class="page active" id="page-quickstart">
  <div class="page-header">
    <p class="breadcrumb">Get Started</p>
    <h1 class="page-title">Quickstart Guide</h1>
    <p class="page-sub">Get your AI workforce up and running in minutes — no technical setup required.</p>
    <div class="page-actions">
      <button class="copy-btn" onclick="copyLink()">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy page
      </button>
    </div>
  </div>

  <div class="intro-block reveal" id="qs-intro-welcome">
    <h3>Welcome to Odella</h3>
    <p>Odella puts an AI workforce at your fingertips — a team of digital employees that handle the day-to-day so your people can focus on what only humans can do. Set up in minutes, scale in seconds, no engineering degree required.</p>
    <img src="/odella-screenshot.png" alt="Odella – Your AI Workforce Factory"
      style="width:100%;border-radius:12px;margin-top:1.25rem;display:block;box-shadow:0 4px 20px rgba(108,71,255,0.1);" />
  </div>

  <div class="intro-block reveal" id="qs-intro-model">
    <h3>A New Way to Work</h3>
    <p>Think of Odella's AI agents as tireless colleagues: they read, write, reason, and act — following your rules and your precedents. You get the output; they handle the grind.</p>
    <ul class="intro-bullets">
      <li>AI agents take care of repetitive, process-heavy work so your team isn't stuck doing it</li>
      <li>Your people stay focused on judgement, relationships, and the work that actually needs a human</li>
      <li>Grow your output without growing your headcount — quality stays consistent as you scale</li>
    </ul>
  </div>

  <div class="intro-block reveal" id="qs-intro-capabilities">
    <h3>What You Can Build</h3>
    <p>Odella gives you four core capabilities you can mix and match to fit exactly how your organisation works.</p>
    <div class="intro-cards">
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
        <h4>Template Automation</h4>
        <p>Turn your existing documents and precedents into smart templates. Pull in data from any source and watch hours of drafting collapse into seconds.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <h4>AI Process Automation</h4>
        <p>Design custom workflows that mirror your exact processes — connect any tool, transform any data, and let your AI handle the handoffs.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h4>AI Workforces</h4>
        <p>Stand up virtual teams that work alongside your people. Delegate tasks, assign roles, and scale capacity on demand — no hiring, no onboarding.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h4>Private Knowledge Bases</h4>
        <p>Feed your organisation's internal knowledge directly to your AI workforce. Your agents work with your expertise, not generic training data.</p>
      </div>
    </div>
  </div>

  <div class="intro-block reveal" id="qs-intro-enterprise">
    <h3>Built to Enterprise Standard</h3>
    <div class="intro-cards">
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>Enterprise-Grade Security</h4>
        <p>End-to-end encryption, full data isolation, role-based access controls, and SSO support. SOC 2 compliance in progress — your data never leaves your control.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
        <h4>Seamless Integration</h4>
        <p>Odella slots into your existing stack. Connect the tools your team already uses and let AI work inside your real workflows — not alongside them.</p>
      </div>
    </div>
  </div>

  <!-- Step 1 -->
  <div class="step-block reveal" id="qs-step1">
    <div class="step-tag-row"><span class="step-chip">Step 01</span><div class="step-line"></div></div>
    <h2>Create Your Account</h2>
    <p class="step-desc">Get into Odella in under two minutes. No credit card required — just pick your sign-in method and you're in.</p>
    <div class="video-wrap">
      <video autoplay muted loop playsinline>
        <source src="/video-onboarding.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: Creating your Odella account from start to finish</p>
    <div class="substep-grid">
      <div class="substep-card"><div class="sc-num">1</div><div class="sc-body"><h4>Choose Your Sign-Up Method</h4><ul><li>Click <strong>Continue with Google</strong> or <strong>Continue with Microsoft</strong> for instant one-click access</li><li>Or use your email: enter your name and email address to receive a verification link</li></ul></div></div>
      <div class="substep-card"><div class="sc-num">2</div><div class="sc-body"><h4>Verify Your Email</h4><p>Check your inbox — including spam — for a verification email from Odella. Click the link to activate your account instantly.</p></div></div>
      <div class="substep-card"><div class="sc-num">3</div><div class="sc-body"><h4>Complete Your Profile</h4><p>Answer a few short questions so Odella can tailor the experience to your organisation's size, industry, and goals. Takes under 60 seconds.</p></div></div>
    </div>
    <div class="tip-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span><strong>Tip:</strong> Signing in with Google or Microsoft is the fastest option — you'll be inside Odella in seconds with no password to set.</span>
    </div>
    <div class="next-pill"><a href="#qs-step2">Continue to Step 2 &rarr;</a></div>
  </div>

  <!-- Step 2 -->
  <div class="step-block reveal" id="qs-step2">
    <div class="step-tag-row"><span class="step-chip">Step 02</span><div class="step-line"></div></div>
    <h2>Meet Your AI Workforce</h2>
    <p class="step-desc">Once you're signed in, you land on your Workforce Overview — your round-the-clock team of specialised AI employees, each built for a specific job.</p>
    <div class="substep-grid">
      <div class="substep-card"><div class="sc-num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="sc-body"><h4>Document Processor</h4><p>Takes in documents, pulls out the data that matters, and validates it automatically.</p></div></div>
      <div class="substep-card"><div class="sc-num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="sc-body"><h4>Research Assistant</h4><p>Scours multiple sources, synthesises the findings, and delivers thorough reports.</p></div></div>
      <div class="substep-card"><div class="sc-num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div class="sc-body"><h4>Operations Specialist</h4><p>Keeps your workflows moving — managing task routing, handoffs, and process continuity.</p></div></div>
      <div class="substep-card"><div class="sc-num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><div class="sc-body"><h4>Data Analyst</h4><p>Crunches your numbers, surfaces the patterns, and builds clear visualisations.</p></div></div>
    </div>
    <div class="next-pill"><a href="#qs-step3">Continue to Step 3 &rarr;</a></div>
  </div>

  <!-- Step 3 -->
  <div class="step-block reveal" id="qs-step3">
    <div class="step-tag-row"><span class="step-chip">Step 03</span><div class="step-line"></div></div>
    <h2>Start Automating</h2>
    <p class="step-desc">Your workforce is ready. Here's how to put it to work and reshape the way your organisation operates:</p>
    <div class="intro-cards" style="margin-bottom:2rem;">
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h4>Free Up Your Team</h4><p>Hand off the repetitive work to your AI employees. Your people get their time back to focus on strategy and decisions that need a human.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h4>Scale Without Hiring</h4><p>Your AI employees work 24/7 and can take on more the moment you need them to. Grow output without adding headcount.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><h4>Start with Templates</h4><p>Pick a pre-built workflow for common tasks, customise it to your context, and have it running in minutes.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><h4>Build Custom Workflows</h4><p>Design your own automations with the visual workflow builder. No coding required — just drag, connect, and deploy.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><h4>Integrate Seamlessly</h4><p>Odella connects to the tools your team already uses — working inside your real environment.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h4>Enterprise Security</h4><p>End-to-end encryption and complete data isolation as standard. SOC 2 compliance actively underway.</p></div>
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:13px;padding:1.5rem 1.6rem;margin-top:0.5rem;">
      <p style="font-size:0.7rem;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem;">What's Next</p>
      <div style="display:flex;flex-direction:column;gap:0.65rem;">
        <a onclick="showPage('workforce');return false;" href="#" style="display:flex;align-items:center;gap:0.85rem;padding:0.85rem 1rem;background:var(--bg);border:1px solid var(--border);border-radius:9px;text-decoration:none;color:var(--text);transition:border-color 0.15s,box-shadow 0.15s;" onmouseover="this.style.borderColor='rgba(108,71,255,0.35)';this.style.boxShadow='0 2px 12px rgba(108,71,255,0.08)'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
          <div style="width:32px;height:32px;border-radius:8px;background:rgba(108,71,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6C47FF" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <div><p style="font-size:0.875rem;font-weight:700;margin:0 0 0.1rem;color:var(--text);">Meet Your Workforce</p><p style="font-size:0.78rem;color:var(--muted);margin:0;">Get to know your AI-powered team and what each member specialises in</p></div>
          <svg style="margin-left:auto;flex-shrink:0;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a onclick="showPage('videos');return false;" href="#" style="display:flex;align-items:center;gap:0.85rem;padding:0.85rem 1rem;background:var(--bg);border:1px solid var(--border);border-radius:9px;text-decoration:none;color:var(--text);transition:border-color 0.15s,box-shadow 0.15s;" onmouseover="this.style.borderColor='rgba(108,71,255,0.35)';this.style.boxShadow='0 2px 12px rgba(108,71,255,0.08)'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
          <div style="width:32px;height:32px;border-radius:8px;background:rgba(108,71,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6C47FF" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
          <div><p style="font-size:0.875rem;font-weight:700;margin:0 0 0.1rem;color:var(--text);">Explore Workflows</p><p style="font-size:0.78rem;color:var(--muted);margin:0;">Learn how to build and manage automations that reshape your operations</p></div>
          <svg style="margin-left:auto;flex-shrink:0;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div class="page-nav">
    <div></div>
    <a class="pn-btn next" onclick="showPage('workforce');return false;" href="#">
      <span class="pn-label">Next &rarr;</span>
      <span class="pn-title">Workforce</span>
    </a>
  </div>
  <p class="content-footer">Made for <a href="https://odella.ai" target="_blank">Odella.ai</a></p>
</div>
`;
