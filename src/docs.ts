import './styles.css'
import { docsSections, docsTopics, sniperExamples } from './content/site'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found.')
}

app.innerHTML = `
  <div class="shell docs-page-shell">
    <header class="topbar">
      <a class="brand" href="../">ODE</a>
      <nav class="topnav">
        <a href="../">Home</a>
        <a href="#concepts">Concepts</a>
        <a href="#snippets">Snippets</a>
        <a href="#adoption">Adoption</a>
      </nav>
    </header>

    <main>
      <section class="hero docs-hero">
        <div class="hero-copy">
          <p class="eyebrow">Developer documentation</p>
          <h1>Concept first. Runtime second.</h1>
          <p class="lead">
            This is the more reserved ODE surface: a technical explanation of what the style is
            trying to protect, what habits it rejects and how to adopt it without turning the
            codebase into framework theater.
          </p>
        </div>
        <div class="hero-panel">
          <div class="signal-card">
            <span class="signal-title">Documentation map</span>
            <strong>6 topics</strong>
            <ul class="docs-topic-list">
              ${docsTopics.map((topic) => `<li>${topic}</li>`).join('')}
            </ul>
          </div>
        </div>
      </section>

      <section class="section docs-layout" id="concepts">
        <div class="docs-shell docs-shell-wide">
          <aside class="docs-sidebar">
            <span>Guide sections</span>
            <ul>
              ${docsSections.map((section) => `<li><a href="#${section.id}">${section.title}</a></li>`).join('')}
            </ul>
          </aside>
          <div class="docs-article-list">
            ${docsSections
              .map(
                (section) => `
                  <article class="docs-article" id="${section.id}">
                    <p class="eyebrow">Documentation</p>
                    <h2>${section.title}</h2>
                    <p>${section.body}</p>
                    <ul class="dense-list">
                      ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
                    </ul>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section snippets-section" id="snippets">
        <div class="section-heading">
          <p class="eyebrow">Code snippets</p>
          <h2>Short technical cuts through the ODE style.</h2>
          <p>
            These are not decorative code blocks. They exist to show the shape of execution and
            validation in a way that experienced developers can assess quickly.
          </p>
        </div>
        <div class="snippet-grid">
          ${sniperExamples
            .map(
              (snippet) => `
                <article class="snippet-card">
                  <p class="runtime">${snippet.runtime}</p>
                  <h3>${snippet.title}</h3>
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

      <section class="section" id="adoption">
        <div class="section-heading">
          <p class="eyebrow">Adoption note</p>
          <h2>ODE is not asking you to rewrite your product around a hidden abstraction.</h2>
          <p>
            Start small. Pick one flow with business pressure, extract the orchestration into a
            use case vocabulary, validate it inside a consumer and then move toward package
            manager consumption when the runtime is stable enough to publish.
          </p>
        </div>
      </section>
    </main>
  </div>
`
