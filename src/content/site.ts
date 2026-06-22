export type LibraryStatus = 'published' | 'partial' | 'pending'

export type LibraryEntry = {
  name: string
  runtime: string
  registry: string
  version: string
  status: LibraryStatus
  summary: string
  repositoryUrl: string
  packageUrl: string
  example: string
  blocker?: string
}

export const libraries: LibraryEntry[] = [
  {
    name: 'typescript-ode',
    runtime: 'TypeScript',
    registry: 'npm',
    version: '0.1.0',
    status: 'published',
    summary: 'Web-first ODE runtime ready for npm consumers and showcase apps.',
    repositoryUrl: 'https://github.com/animalab-netizen/typescript-ode',
    packageUrl: 'https://www.npmjs.com/package/typescript-ode',
    example: 'typescript-ode-consumer',
  },
  {
    name: 'swift-ode',
    runtime: 'Swift',
    registry: 'CocoaPods',
    version: '0.1.0',
    status: 'published',
    summary: 'Native Apple runtime with the same ODE vocabulary used by the iOS showcase.',
    repositoryUrl: 'https://github.com/animalab-netizen/swift-ode',
    packageUrl: 'https://cocoapods.org/pods/swift-ode',
    example: 'swift-ode-consumer',
  },
  {
    name: 'python-ode',
    runtime: 'Python',
    registry: 'PyPI',
    version: '0.0.3 public / 0.1.1 pending',
    status: 'partial',
    summary: 'Project exists on PyPI, but the new Trusted Publishing release line is not live yet.',
    repositoryUrl: 'https://github.com/animalab-netizen/python-ode',
    packageUrl: 'https://pypi.org/project/python-ode/',
    example: 'python-ode-consumer',
    blocker: 'Trusted Publisher entry does not yet match the GitHub workflow claims for 0.1.1.',
  },
  {
    name: 'kotlin-ode',
    runtime: 'Kotlin',
    registry: 'Maven Central',
    version: 'pending',
    status: 'pending',
    summary: 'Android and JVM runtime prepared for publication, but not yet available in Maven Central.',
    repositoryUrl: 'https://github.com/animalab-netizen/kotlin-ode',
    packageUrl: 'https://central.sonatype.com/',
    example: 'kotlin-ode-consumer',
    blocker: 'Namespace and signature flow still need final Maven Central publication completion.',
  },
  {
    name: 'dotnet-ode',
    runtime: '.NET',
    registry: 'NuGet',
    version: 'pending',
    status: 'pending',
    summary: 'NuGet package pipeline and Trusted Publishing policy are prepared, but no public package is live yet.',
    repositoryUrl: 'https://github.com/animalab-netizen/dotnet-ode',
    packageUrl: 'https://www.nuget.org/packages',
    example: 'dotnet-ode-consumer',
    blocker: 'First release has not been published to NuGet yet.',
  },
  {
    name: 'go-ode',
    runtime: 'Go',
    registry: 'Go modules',
    version: 'pending',
    status: 'pending',
    summary: 'Backend-oriented Go runtime already scaffolded and locally validated, pending public repository release flow.',
    repositoryUrl: 'https://github.com/animalab-netizen/go-ode',
    packageUrl: 'https://pkg.go.dev/',
    example: 'go-ode-consumer',
    blocker: 'Repository publication and public semantic tags are still pending.',
  },
  {
    name: 'java-ode',
    runtime: 'Java',
    registry: 'Maven Central',
    version: 'pending',
    status: 'pending',
    summary: 'JVM-oriented Java runtime scaffolded and validated through javac/java, awaiting repository and registry publication.',
    repositoryUrl: 'https://github.com/animalab-netizen/java-ode',
    packageUrl: 'https://central.sonatype.com/',
    example: 'java-ode-consumer',
    blocker: 'No public release has been published yet.',
  },
  {
    name: 'ruby-ode',
    runtime: 'Ruby',
    registry: 'RubyGems',
    version: 'pending',
    status: 'pending',
    summary: 'Ruby gem runtime and backend showcase are scaffolded and validated locally, pending gem publication.',
    repositoryUrl: 'https://github.com/animalab-netizen/ruby-ode',
    packageUrl: 'https://rubygems.org/',
    example: 'ruby-ode-consumer',
    blocker: 'Gem has not been published to RubyGems yet.',
  },
  {
    name: 'php-ode',
    runtime: 'PHP',
    registry: 'Packagist',
    version: 'pending',
    status: 'pending',
    summary: 'Composer-first PHP runtime and web showcase are scaffolded and now validated locally, pending Packagist publication.',
    repositoryUrl: 'https://github.com/animalab-netizen/php-ode',
    packageUrl: 'https://packagist.org/',
    example: 'php-ode-consumer',
    blocker: 'Package metadata is ready, but the public repository and Packagist release are still pending.',
  },
  {
    name: 'dart-ode',
    runtime: 'Dart',
    registry: 'pub.dev',
    version: 'pending',
    status: 'pending',
    summary: 'Dart runtime is scaffolded and validated, and its Flutter consumer is also running under local test, pending pub.dev publication.',
    repositoryUrl: 'https://github.com/animalab-netizen/dart-ode',
    packageUrl: 'https://pub.dev/',
    example: 'dart-ode-consumer',
    blocker: 'The package has not yet been published to pub.dev.',
  },
]

export const sections = [
  {
    id: 'why',
    eyebrow: 'Why ODE',
    title: 'One delivery vocabulary, multiple native runtimes.',
    body:
      'ODE helps teams model product flows as direct, chained, sequenced and guarded use cases without forcing the same implementation style across every platform.',
  },
  {
    id: 'execution',
    eyebrow: 'Execution Modes',
    title: 'Readable business orchestration instead of hidden controller logic.',
    body:
      'Every runtime is shaped around the same four concepts so examples, docs and support material stay aligned across mobile, web, backend and JVM ecosystems.',
  },
  {
    id: 'adoption',
    eyebrow: 'Adoption',
    title: 'Learn with runnable consumers, then swap local references for package managers.',
    body:
      'ODE examples are not disposable demos. They are adoption guides that prove how each runtime should be wired in a real consumer application.',
  },
]

export const docsTopics = [
  'Introduction to the ODE vocabulary',
  'UseCase, ChainUseCase, SequenceUseCase and GuardUseCase',
  'Outputs, dispatch and semantic delivery channels',
  'ViewModel wiring and UI responsibilities',
  'Consumer structure and package integration strategy',
  'Per-runtime release and publication notes',
]

export const sniperExamples = [
  {
    title: 'Direct delivery',
    runtime: 'TypeScript',
    code: `class LoadSpotlightUseCase extends UseCase<string, PokemonSpotlight> {
  async execute(name: string): Promise<Output<PokemonSpotlight>> {
    const pokemon = await gateway.fetch(name)
    return Outputs.value(pokemon)
  }
}`,
  },
  {
    title: 'Guard before dispatch',
    runtime: 'Kotlin',
    code: `override fun guard(param: CompareRequest): Output<Nothing>? {
    if (param.left == param.right) {
        return ErrorOutput(IllegalArgumentException("Comparison requires distinct entries"))
    }
    return null
}`,
  },
  {
    title: 'Ordered sequence',
    runtime: 'Swift',
    code: `let sequence = StarterSequenceUseCase(
    entries: ["bulbasaur", "charmander", "squirtle"],
    gateway: gateway
)

viewModel.dispatch(sequence, into: .starterSequence)`,
  },
]

export const examples = [
  {
    name: 'Android Consumer',
    stack: 'Kotlin + Android',
    emphasis: 'UseCase, Chain, Sequence, Guard and network edge cases in a native app.',
  },
  {
    name: 'iOS Consumer',
    stack: 'Swift + UIKit/SwiftPM',
    emphasis: 'Mirrors the Android narrative while preserving platform-native structure.',
  },
  {
    name: 'Web Consumer',
    stack: 'TypeScript + Vite',
    emphasis: 'A browser-first showcase for public documentation and package adoption.',
  },
  {
    name: '.NET Consumer',
    stack: 'Blazor + NuGet-ready layout',
    emphasis: 'Demonstrates the same vocabulary in a Microsoft ecosystem flow.',
  },
  {
    name: 'Python Consumer',
    stack: 'Standard library web showcase',
    emphasis: 'Lightweight example of ODE orchestration in backend-friendly Python.',
  },
  {
    name: 'Go Consumer',
    stack: 'Go + HTTP server',
    emphasis: 'Backend showcase with explicit direct, chain, sequence and guard-oriented endpoints.',
  },
  {
    name: 'Java Consumer',
    stack: 'Java + HttpServer',
    emphasis: 'Backend JVM showcase that keeps the ODE vocabulary explicit without framework-heavy indirection.',
  },
  {
    name: 'Ruby Consumer',
    stack: 'Ruby + WEBrick',
    emphasis: 'Backend showcase for gem-style adoption with the same delivery narrative.',
  },
  {
    name: 'PHP Consumer',
    stack: 'PHP + built-in web server',
    emphasis: 'Web showcase proving the ODE vocabulary in a lightweight Composer-oriented stack.',
  },
  {
    name: 'Dart Consumer',
    stack: 'Flutter mobile + web',
    emphasis: 'Cross-surface showcase that now validates both the Dart runtime and Flutter consumer flow.',
  },
]

export const valueProps = [
  {
    title: 'Native by design',
    body: 'Every runtime is written for its own ecosystem instead of wrapping a hidden cross-platform core.',
  },
  {
    title: 'Adoption-first examples',
    body: 'Consumers are treated as onboarding assets that show wiring, tests, release shape and edge-case handling.',
  },
  {
    title: 'One conceptual language',
    body: 'UseCase, ChainUseCase, SequenceUseCase and GuardUseCase stay consistent across docs, support and releases.',
  },
]

export const marketingHighlights = [
  'Reduce orchestration drift between product teams and platform teams.',
  'Make business flow explicit instead of burying it in controller conditionals.',
  'Create examples and docs that transfer cleanly across technologies.',
  'Grow one conceptual architecture across mobile, web, backend and JVM targets.',
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'animalab.desenvolvimento@gmail.com',
    href: 'mailto:animalab.desenvolvimento@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'animalab-netizen',
    href: 'https://github.com/animalab-netizen',
  },
  {
    label: 'Website repo',
    value: 'ode-website',
    href: 'https://github.com/animalab-netizen/ode-website',
  },
]

export const docsSections = [
  {
    id: 'premise',
    title: 'Premise',
    body:
      'ODE treats delivery logic as a first-class product artifact. Instead of diluting orchestration across presenters, controllers, fragments, view models and callbacks, it concentrates business flow in named use cases that can be read, tested and discussed directly.',
    bullets: [
      'The code should tell the product story, not just satisfy framework mechanics.',
      'Business flow should be explicit enough to survive team rotation and platform expansion.',
      'The same conceptual vocabulary should remain stable across runtimes.',
    ],
  },
  {
    id: 'objective',
    title: 'Objective',
    body:
      'The objective is not to invent a new abstract meta-framework. The objective is to provide a disciplined execution vocabulary that keeps product commitments visible while remaining native to each ecosystem.',
    bullets: [
      'Use package managers native to each technology.',
      'Publish examples that consume real released artifacts.',
      'Keep docs, support and architecture language aligned across platforms.',
    ],
  },
  {
    id: 'paradigms',
    title: 'Paradigms ODE pushes against',
    body:
      'ODE deliberately pushes against a few habits that are common in modern apps but harmful to readability and long-term product maintenance.',
    bullets: [
      'Hidden orchestration spread across UI layers.',
      'Presenter or controller methods overloaded with branching and edge-case plumbing.',
      'Examples that are visually polished but architecturally meaningless.',
      'Documentation that changes its language between Android, iOS, web and backend implementations.',
    ],
  },
  {
    id: 'execution-model',
    title: 'Execution model',
    body:
      'ODE organizes flows into direct, chained, sequenced and guarded execution models. Each model should exist because the product narrative demands it, not because the UI or transport layer happened to be convenient.',
    bullets: [
      'UseCase for a single request and a single semantic outcome.',
      'ChainUseCase for two-step comparison or dependency-aware flow.',
      'SequenceUseCase for ordered execution across three or more entries.',
      'GuardUseCase for validation that must stop invalid work before execution begins.',
    ],
  },
  {
    id: 'adoption-path',
    title: 'Adoption path',
    body:
      'ODE adoption should move from local proof, to showcase app, to package manager integration, to internal team guidelines. The consumer applications are not throwaway demos; they are the public proof of how the ecosystem is meant to be used.',
    bullets: [
      'Start with one consumer and one narrow product flow.',
      'Extract the runtime into a publishable library.',
      'Replace physical source references with public package dependencies.',
      'Keep technical explanations identical across runtimes where the concept is identical.',
    ],
  },
]
