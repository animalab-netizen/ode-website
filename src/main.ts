import './styles.css'
import {
  contactLinks,
  docsTopics,
  examples,
  libraries,
  marketingHighlights,
  sections,
  sniperExamples,
  valueProps,
} from './content/site'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found.')
}

const statusLabel = {
  published: 'Published',
  partial: 'Partially published',
  pending: 'Pending',
} as const

app.innerHTML = `
  <div class="shell">
    <header class="topbar">
      <a class="brand" href="#hero">ODE</a>
      <nav class="topnav">
        <a href="#libraries">Libraries</a>
        <a href="./docs/">Docs</a>
        <a href="#examples">Examples</a>
        <a href="#release-status">Release Status</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy">
          <p class="eyebrow">Official ecosystem hub</p>
          <h1>One delivery vocabulary. Multiple native runtimes.</h1>
          <p class="lead">
            ODE is a cross-ecosystem architecture family for teams that want direct,
            chained, sequenced and guarded product flows expressed in the native language
            of each platform.
          </p>
          <p class="hero-support">
            Built for product delivery teams that need clearer orchestration, cleaner examples
            and package-native adoption across mobile, web and backend ecosystems.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="./docs/">Read the docs</a>
            <a class="button secondary" href="#libraries">Browse libraries</a>
            <a class="button ghost" href="#contact">Contact ÂnimaLab</a>
          </div>
        </div>
        <div class="hero-panel">
          <div class="signal-card">
            <span class="signal-title">Ecosystem signals</span>
            <strong>5 runtimes</strong>
            <p>Native Kotlin, Swift, TypeScript, .NET and Python expressions of ODE.</p>
          </div>
          <div class="mode-grid">
            <article>
              <span>UseCase</span>
              <p>Single request, direct delivery.</p>
            </article>
            <article>
              <span>ChainUseCase</span>
              <p>Two-step comparison or dependent flow.</p>
            </article>
            <article>
              <span>SequenceUseCase</span>
              <p>Ordered execution across three or more entries.</p>
            </article>
            <article>
              <span>GuardUseCase</span>
              <p>Reject invalid dispatch before business work starts.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="value-grid" id="positioning">
        ${valueProps
          .map(
            (item) => `
              <article class="value-card">
                <h2>${item.title}</h2>
                <p>${item.body}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="section marketing-band">
        <div class="section-heading">
          <p class="eyebrow">For teams and partners</p>
          <h2>ODE is positioned as an ecosystem, not a single isolated library.</h2>
          <p>
            The public face of ODE should help engineering leaders, contributors and adopters
            understand the value quickly: what problem it solves, where it is live and how to
            start safely.
          </p>
        </div>
        <div class="highlight-list">
          ${marketingHighlights.map((item) => `<article class="highlight-item"><p>${item}</p></article>`).join('')}
        </div>
      </section>

      <section class="section snippets-section" id="snippets">
        <div class="section-heading">
          <p class="eyebrow">Technical preview</p>
          <h2>Short code snippets that show the ODE style without hiding the mechanics.</h2>
          <p>
            The landing should not try to be the full developer guide, but it should give enough
            real code for an experienced engineer to understand the direction immediately.
          </p>
        </div>
        <div class="snippet-grid">
          ${sniperExamples
            .map(
              (snippet) => `
                <article class="snippet-card">
                  <div class="snippet-head">
                    <div>
                      <p class="runtime">${snippet.runtime}</p>
                      <h3>${snippet.title}</h3>
                    </div>
                  </div>
                  <pre><code>${snippet.code
                    .replaceAll('&', '&amp;')
                    .replaceAll('<', '&lt;')
                    .replaceAll('>', '&gt;')}</code></pre>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="narrative-grid">
        ${sections
          .map(
            (section) => `
              <article class="narrative-card" id="${section.id}">
                <p class="eyebrow">${section.eyebrow}</p>
                <h2>${section.title}</h2>
                <p>${section.body}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="section" id="libraries">
        <div class="section-heading">
          <p class="eyebrow">Libraries</p>
          <h2>Public runtimes and release readiness in one place.</h2>
          <p>
            This is the catalog that should eventually drive every consumer through package
            managers instead of local source references.
          </p>
        </div>
        <div class="library-grid">
          ${libraries
            .map(
              (library) => `
                <article class="library-card">
                  <div class="library-head">
                    <div>
                      <p class="runtime">${library.runtime}</p>
                      <h3>${library.name}</h3>
                    </div>
                    <span class="status status-${library.status}">${statusLabel[library.status]}</span>
                  </div>
                  <p class="summary">${library.summary}</p>
                  <dl class="meta">
                    <div><dt>Registry</dt><dd>${library.registry}</dd></div>
                    <div><dt>Version</dt><dd>${library.version}</dd></div>
                    <div><dt>Consumer</dt><dd>${library.example}</dd></div>
                  </dl>
                  ${
                    library.blocker
                      ? `<p class="blocker"><strong>Current blocker:</strong> ${library.blocker}</p>`
                      : ''
                  }
                  <div class="links">
                    <a href="${library.repositoryUrl}" target="_blank" rel="noreferrer">Repository</a>
                    <a href="${library.packageUrl}" target="_blank" rel="noreferrer">Registry</a>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section docs-layout" id="docs">
        <div class="section-heading">
          <p class="eyebrow">Developer docs</p>
          <h2>The dense material belongs in a dedicated docs surface, not only on the landing.</h2>
          <p>
            The landing introduces ODE. The docs area should carry the technical argument:
            concept, objective, broken paradigms, execution model and adoption path.
          </p>
        </div>
        <div class="docs-shell">
          <aside class="docs-sidebar">
            <span>Documentation map</span>
            <ul>
              ${docsTopics.map((topic) => `<li>${topic}</li>`).join('')}
            </ul>
          </aside>
          <article class="docs-preview">
            <p class="eyebrow">Docs strategy</p>
            <h3>Reserved, practical and developer-facing.</h3>
            <p>
              The central docs should define the ODE vocabulary once, then branch into runtime
              setup notes without changing the conceptual explanation between technologies.
            </p>
            <p>
              Put the dense material in a standalone docs page so engineers can study the
              architecture without the marketing surface getting overloaded.
            </p>
            <a class="button secondary inline-button" href="./docs/">Open developer docs</a>
          </article>
        </div>
      </section>

      <section class="section" id="examples">
        <div class="section-heading">
          <p class="eyebrow">Examples</p>
          <h2>Consumers as product-facing adoption guides.</h2>
          <p>
            Each example should prove wiring, tests, edge-case handling and the migration path
            from local source usage to public package consumption.
          </p>
        </div>
        <div class="example-grid">
          ${examples
            .map(
              (example) => `
                <article class="example-card">
                  <p class="runtime">${example.stack}</p>
                  <h3>${example.name}</h3>
                  <p>${example.emphasis}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section release-status" id="release-status">
        <div class="section-heading">
          <p class="eyebrow">Release Status</p>
          <h2>Marketing, support and engineering should read the same truth.</h2>
        </div>
        <div class="status-board">
          <div class="status-column">
            <span class="status status-published">Published</span>
            <ul>
              <li>typescript-ode on npm</li>
              <li>swift-ode on CocoaPods</li>
            </ul>
          </div>
          <div class="status-column">
            <span class="status status-partial">Partial</span>
            <ul>
              <li>python-ode on PyPI with legacy public line</li>
            </ul>
          </div>
          <div class="status-column">
            <span class="status status-pending">Pending</span>
            <ul>
              <li>kotlin-ode on Maven Central</li>
              <li>dotnet-ode on NuGet</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="section-heading">
          <p class="eyebrow">Contact and Community</p>
          <h2>Adoption, support and collaboration need a visible front door.</h2>
          <p>
            The site should not stop at runtime status. It should also tell people where to ask,
            where to contribute and how to start a conversation with ÂnimaLab around ODE.
          </p>
        </div>
        <div class="contact-grid">
          <article class="contact-card">
            <p class="eyebrow">Get in touch</p>
            <h3>Talk to the maintainers</h3>
            <ul class="contact-list">
              ${contactLinks
                .map(
                  (item) => `
                    <li>
                      <span>${item.label}</span>
                      <a href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>
                    </li>
                  `,
                )
                .join('')}
            </ul>
          </article>
          <article class="contact-card">
            <p class="eyebrow">Community pathways</p>
            <h3>Support, roadmap and contribution flow</h3>
            <ul class="community-list">
              <li>Open issues for runtime bugs and publication blockers.</li>
              <li>Use GitHub repositories as the current support and roadmap surface.</li>
              <li>Keep examples aligned with published packages, not hidden local forks.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  </div>
`
