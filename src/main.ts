import './styles.css'
import { docsTopics, examples, libraries, sections } from './content/site'

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
        <a href="#docs">Docs</a>
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
          <div class="hero-actions">
            <a class="button primary" href="#docs">Read the docs</a>
            <a class="button secondary" href="#libraries">Browse libraries</a>
            <a class="button ghost" href="#examples">Explore examples</a>
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
          <p class="eyebrow">Docs</p>
          <h2>A documentation shell that serves both adoption and support.</h2>
          <p>
            The docs site should explain the conceptual contract once and then show how each
            runtime maps it to platform-native code.
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
            <h3>Concept first, runtime second.</h3>
            <p>
              The central docs should define the ODE vocabulary once, then branch into
              Kotlin, Swift, TypeScript, .NET and Python setup notes without changing the
              explanatory narrative between platforms.
            </p>
            <p>
              That keeps support, release notes and community examples aligned with the same
              mental model instead of duplicating divergent documentation trees.
            </p>
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
    </main>
  </div>
`
