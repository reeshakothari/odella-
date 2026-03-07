export const workforcePage = `
<div class="page" id="page-workforce">
  <div class="page-header">
    <p class="breadcrumb">Product Overview</p>
    <h1 class="page-title">Workforce</h1>
    <p class="page-sub">Build digital employees that execute tasks, follow your precedents, and scale on demand — without adding headcount.</p>
    <div class="page-actions">
      <button class="copy-btn" onclick="copyLink()">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy page
      </button>
    </div>
  </div>

  <div class="intro-block reveal" id="wf-factory">
    <h3>The AI Workforce Factory</h3>
    <p>Odella is where you design, build, and deploy your AI workforce. Define a role, set the task, connect your systems and templates — then hit publish. Your new AI employee is live, working to your standards, around the clock.</p>
    <p>These aren't general-purpose assistants. They're purpose-built employees that slot into your real workflows, handle your process work, and free your team to focus on the judgement-heavy tasks that actually need a human.</p>
    <div class="video-wrap" style="margin-bottom:1rem;">
      <video autoplay muted loop playsinline controls>
        <source src="/video-workforce-factory.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: The AI Workforce Factory overview</p>
    <div class="intro-cards">
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h4>Scale Without Headcount</h4><p>Bring on AI employees in minutes, not months. Add capacity exactly when you need it — without the overhead of hiring, onboarding, or managing more people.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h4>Work Where You Work</h4><p>Delegate via email, chat, Slack, or Teams — the same way you'd hand something off to a colleague. No new system to learn, no workflow overhaul required.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h4>Always On</h4><p>AI employees don't burn out, take holidays, or miss deadlines. They're available 24/7, handling your workload consistently whether it's 9am or 3am.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><h4>Trained on Your Precedents</h4><p>Each AI employee learns your firm's tone, preferences, and way of working. They execute tasks to your standards — not to a generic default.</p></div>
    </div>
  </div>

  <div class="intro-block reveal" id="wf-build">
    <h3>Building Your AI Employees</h3>
    <p>You can deploy a pre-built AI employee or create a custom one from scratch. Here's how to build a new one:</p>
    <div class="video-wrap" style="margin-bottom:1rem;">
      <video autoplay muted loop playsinline controls>
        <source src="/video-build-employees.mp4" type="video/mp4">
      </video>
    </div>
    <p class="video-caption">Watch: Building your AI employees step by step</p>
    <div class="substep-grid" style="margin-top:1.25rem;">
      <div class="substep-card"><div class="sc-num">1</div><div class="sc-body"><h4>Open the Workforce Overview</h4><p>Head to the Workforce Overview page in your dashboard and click <strong>Create New Worker</strong>.</p></div></div>
      <div class="substep-card"><div class="sc-num">2</div><div class="sc-body"><h4>Fill Out the Employee Form</h4><ul><li><strong>Avatar</strong> — pick one for quick visual identification</li><li><strong>Name</strong> — something that reflects the role, like "Document Processor" or "Research Analyst"</li><li><strong>Role</strong> — the specific function this employee will carry out</li><li><strong>Description</strong> — the tasks and responsibilities they'll own</li><li><strong>Generate with AI</strong> — just tell Odella the role you want and it will automatically fill in the name, role, and description for you</li></ul></div></div>
      <div class="substep-card"><div class="sc-num">3</div><div class="sc-body"><h4>Save and Configure</h4><p>Click <strong>Save Assistant</strong>. Your new employee appears on the Workforce Overview. Click their profile to connect workflows, attach knowledge bases, and manage their settings.</p></div></div>
    </div>
    <div class="tip-box" style="margin-top:1.25rem;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div><strong>Best practices for effective AI employees:</strong><ul style="padding-left:1.1rem;margin-top:0.4rem;font-size:0.835rem;"><li>Give each employee a narrow, well-defined role that maps to a real workflow need</li><li>Connect relevant knowledge bases so they can draw on your organisation's expertise</li><li>Start with simple tasks, then expand their capabilities as you build confidence</li><li>Use names that describe what they do — it makes delegation feel natural</li></ul></div>
    </div>
  </div>

  <div class="intro-block reveal" id="wf-delegate">
    <h3>Delegate Work Like You Would to Any Employee</h3>
    <p>Your AI employees live inside the tools your team already uses. Hand off work the same way you would to a human colleague — no new interface to learn.</p>
    <div class="intro-cards">
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><h4>Email</h4><p>Send tasks directly to your AI employee's inbox. They reply, follow up, and deliver results just like a real team member would.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h4>Chat</h4><p>Use the built-in web chat for back-and-forth conversation. Ideal for quick tasks, clarifications, and anything you'd normally handle in real time.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.08 9c-.22-4.05-3.6-7.27-7.68-7.27a7.72 7.72 0 0 0-7.72 7.72c0 1.19.27 2.31.74 3.32L5 17l4.23-2.4a7.65 7.65 0 0 0 3.17.69"/><circle cx="18" cy="18" r="4"/></svg></div><h4>Slack</h4><p>Add AI employees to your Slack workspace. Mention them in a channel or send them a direct message — they'll get to work straight away.</p></div>
      <div class="intro-card"><div class="intro-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><h4>Microsoft Teams</h4><p>Bring AI employees into your Teams environment. They join the conversation, pick up tasks, and collaborate within your existing workflow.</p></div>
    </div>
  </div>

  <div class="intro-block reveal" id="wf-connect">
    <h3>Connecting Applications</h3>
    <p>Once your AI employee exists, you configure what they can access and how they receive work. Here's how:</p>
    <div class="substep-grid" style="margin-top:1.25rem;">
      <div class="substep-card"><div class="sc-num">1</div><div class="sc-body"><h4>Go to the Employee's Profile</h4><p>Select the AI employee from your Workforce Overview and open their <strong>Applications</strong> tab.</p></div></div>
      <div class="substep-card"><div class="sc-num">2</div><div class="sc-body"><h4>Choose a Communication Channel</h4><p>Pick how this employee receives work — email, chat, Slack, or Teams — based on how your team prefers to delegate.</p></div></div>
      <div class="substep-card"><div class="sc-num">3</div><div class="sc-body"><h4>Connect Knowledge, Workflows &amp; Templates</h4><ul><li><strong>Knowledge Bases</strong> — give them access to your internal expertise and precedents</li><li><strong>Workflows</strong> — assign the automations they're authorised to run</li><li><strong>Templates</strong> — attach document templates they can populate automatically</li><li><strong>Tools</strong> — connect the apps and integrations this employee is permitted to use</li></ul></div></div>
      <div class="substep-card"><div class="sc-num">4</div><div class="sc-body"><h4>Review and Publish</h4><p>Check the configuration, then click <strong>Publish</strong> to deploy. Your AI employee is live and ready to receive work.</p></div></div>
    </div>
    <div class="tip-box" style="margin-top:1.25rem;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span>Give workflows clear, descriptive titles. Your AI employees match incoming tasks to available workflows by name — the more specific the title, the more accurately they'll route work.</span>
    </div>
  </div>

  <div class="intro-block reveal" id="wf-scale" style="border-bottom:none;">
    <h3>Scale Your Operations Without Scaling Costs</h3>
    <p>With Odella's AI workforce, capacity is no longer a constraint. Deploy new employees in minutes, not months. Your team shifts its focus to strategy, client relationships, and high-value outcomes — while AI handles the volume work that used to eat everyone's time.</p>
    <p>The more you build, the more you can delegate. Start with one employee and one workflow, then grow from there.</p>
    <div style="margin-top:1.5rem;">
      <a onclick="showPage('quickstart');return false;" href="#" style="display:inline-block;background:var(--brand);color:#fff;padding:0.7rem 1.6rem;border-radius:9px;font-weight:700;font-size:0.9rem;text-decoration:none;transition:background 0.15s;">Start Building Your AI Workforce &rarr;</a>
    </div>
  </div>

  <div class="page-nav">
    <a class="pn-btn" onclick="showPage('videos');return false;" href="#">
      <span class="pn-label">&larr; Previous</span>
      <span class="pn-title">Video Tutorials</span>
    </a>
  </div>
  <p class="content-footer">Made for <a href="https://odella.ai" target="_blank">Odella.ai</a></p>
</div>
`;
