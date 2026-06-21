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
      'Every runtime is shaped around the same four concepts so examples, docs and support material stay aligned across Android, iOS, web, .NET and Python.',
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
]
