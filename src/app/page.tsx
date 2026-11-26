const certifications = [
  {
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    description:
      "Cloud infrastructure, deployment, operations and management on Google Cloud.",
    url: "https://www.credly.com/badges/5ff84959-2a9b-4933-aebf-bf45aaa3c46c/public_url",
    label: "Verify credential",
  },
  {
    name: "Google Gemini AI for DevOps Engineers",
    issuer: "Google Skills",
    description:
      "Exploring generative AI capabilities and their application in DevOps workflows.",
    url: "https://www.skills.google/public_profiles/e35073e2-371e-44f6-bca9-4453453362ea",
    label: "View Google Skills profile",
  },
  {
    name: "Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    description:
      "Microsoft credential in AI application and agent development.",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MirzaAbrarBaig-5370/2E40198421A30072?sharingId=7EBF50C9486DD2A8",
    label: "Verify Microsoft credential",
  },
  {
    name: "Wiz Certified Cloud Security Foundational",
    issuer: "Wiz",
    description:
      "Foundational cloud security knowledge and security operations.",
    url: null,
    label: "Credential details",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Site Reliability Engineering",
    description:
      "Keeping mission-critical systems dependable through proactive monitoring, incident response, service reliability practices and continuous operational improvements.",
    tags: ["Incident Management", "P1/P2 Response", "RCA", "SLI/SLO"],
  },
  {
    number: "02",
    title: "Cloud Infrastructure & Operations",
    description:
      "Supporting enterprise cloud infrastructure across GCP, AWS and Azure, including compute, networking, storage, identity and managed services.",
    tags: ["GCP", "AWS", "Azure", "Cloud Operations"],
  },
  {
    number: "03",
    title: "Kubernetes & Container Operations",
    description:
      "Supporting Kubernetes-based production environments, investigating application and infrastructure issues, and maintaining cluster health.",
    tags: ["GKE", "EKS", "Kubernetes", "Docker"],
  },
  {
    number: "04",
    title: "Infrastructure Automation",
    description:
      "Using Infrastructure as Code and configuration automation to improve consistency, repeatability and operational efficiency.",
    tags: ["Terraform", "Ansible", "Git", "GitLab CI/CD"],
  },
  {
    number: "05",
    title: "Monitoring & Observability",
    description:
      "Monitoring infrastructure and application health, investigating performance anomalies and using telemetry to support faster troubleshooting.",
    tags: ["Datadog", "Grafana", "Prometheus", "Nagios"],
  },
  {
    number: "06",
    title: "Cloud Security Operations",
    description:
      "Supporting vulnerability management, threat detection, cloud security monitoring, access controls and security operations.",
    tags: ["Wiz", "Tenable", "SentinelOne", "Google Chronicle"],
  },
];

const technologyGroups = [
  {
    title: "Cloud Platforms",
    number: "01",
    technologies: ["Google Cloud Platform", "Amazon Web Services", "Microsoft Azure"],
  },
  {
    title: "Containerization & Orchestration",
    number: "02",
    technologies: ["Kubernetes / GKE", "Amazon EKS", "Docker"],
  },
  {
    title: "Infrastructure as Code",
    number: "03",
    technologies: ["Terraform", "Ansible", "Infrastructure as Code"],
  },
  {
    title: "Monitoring & Observability",
    number: "04",
    technologies: [
      "Datadog",
      "Grafana",
      "Prometheus",
      "Nagios",
      "Catchpoint",
      "Google Cloud Monitoring",
      "Google Cloud Logging",
    ],
  },
  {
    title: "CI/CD & Development",
    number: "05",
    technologies: ["GitLab CI/CD", "Git", "Shell Scripting", "Python Automation"],
  },
  {
    title: "Cloud Security",
    number: "06",
    technologies: ["Wiz", "Cyderes", "SentinelOne", "Tenable", "Google Chronicle"],
  },
  {
    title: "Databases & Data Platforms",
    number: "07",
    technologies: ["Snowflake", "MySQL", "BigQuery"],
  },
  {
    title: "Operating Systems & ITSM",
    number: "08",
    technologies: [
      "Linux",
      "RedHat",
      "CentOS",
      "Ubuntu",
      "Windows",
      "Jira",
      "ServiceNow",
      "Zendesk",
      "Confluence",
    ],
  },
];

const operationalFocus = [
  {
    title: "Incident to Resolution",
    description:
      "Responding to production incidents, coordinating technical teams, investigating root causes and implementing corrective actions.",
  },
  {
    title: "Reliability Engineering",
    description:
      "Supporting service availability through observability, SLI/SLO monitoring, capacity planning and proactive maintenance.",
  },
  {
    title: "Change & Release Management",
    description:
      "Supporting production deployments, infrastructure changes, readiness checks, cutovers and post-deployment validation.",
  },
];

const experienceHighlights = [
  "Provide 24x7 production support for business-critical applications and cloud infrastructure.",
  "Manage GCP services including Compute Engine, GKE, Cloud Storage, IAM, VPC, Cloud SQL, BigQuery, Pub/Sub, Cloud Run and Cloud Composer.",
  "Administer Kubernetes clusters and troubleshoot application, networking, ingress, storage and container-related production issues.",
  "Monitor infrastructure and application health using Datadog, Grafana, Prometheus, Catchpoint, Nagios and Google Cloud observability tools.",
  "Respond to P1/P2/P3 incidents, coordinate stakeholder communication, perform RCA and implement preventive measures.",
  "Support real-time ad delivery platforms and cloud migration initiatives, including readiness checks, production cutovers and post-migration monitoring.",
  "Automate infrastructure provisioning and configuration using Terraform and Ansible.",
  "Design, support and maintain GitLab CI/CD pipelines for reliable application and infrastructure deployments.",
  "Administer Snowflake, MySQL and cloud-based data platforms, focusing on availability, performance and secure access.",
  "Support cloud security operations using Wiz, Cyderes, SentinelOne, Tenable and Google Chronicle.",
  "Use Jira, ServiceNow, Zendesk and Confluence for incident, change and problem management, documentation and knowledge sharing.",
  "Collaborate with Cloud Engineering, DevOps, Security, Product and Application teams on infrastructure changes and reliability improvements.",
];

const stats = [
  { value: "3.8+", label: "Years of experience" },
  { value: "3", label: "Cloud platforms" },
  { value: "24×7", label: "Production operations" },
  { value: "4", label: "Professional credentials" },
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#fbfbfd] text-[#111827]"
      style={{
        backgroundImage:
          "radial-gradient(#e5e7eb 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-6 py-5 lg:px-12">
          <a
            href="#top"
            className="shrink-0 font-mono text-xl font-bold tracking-tight"
          >
            ~/ <span className="text-[#5145e5]">mirza</span>.dev
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-gray-600 xl:flex">
            <a href="#capabilities" className="transition hover:text-[#5145e5]">
              Capabilities
            </a>
            <a href="#architecture" className="transition hover:text-[#5145e5]">
              Technology
            </a>
            <a href="#projects" className="transition hover:text-[#5145e5]">
              Projects
            </a>
            <a href="#story" className="transition hover:text-[#5145e5]">
              My story
            </a>
            <a href="#experience" className="transition hover:text-[#5145e5]">
              Experience
            </a>
            <a href="#certifications" className="transition hover:text-[#5145e5]">
              Certifications
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden items-center gap-2 font-mono text-sm text-gray-500 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Pune, India
            </div>
            <a
              href="mailto:mirzaabrarbaig98@gmail.com"
              className="rounded-xl bg-[#5145e5] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4035c7]"
            >
              Hire me ↗
            </a>
          </div>
        </nav>

        <div className="flex gap-5 overflow-x-auto border-t border-gray-100 px-6 py-3 text-xs font-medium text-gray-500 xl:hidden">
          <a href="#capabilities" className="whitespace-nowrap">Capabilities</a>
          <a href="#architecture" className="whitespace-nowrap">Technology</a>
          <a href="#projects" className="whitespace-nowrap">Projects</a>
          <a href="#story" className="whitespace-nowrap">My story</a>
          <a href="#experience" className="whitespace-nowrap">Experience</a>
          <a href="#certifications" className="whitespace-nowrap">Certifications</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-[1500px] gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:pb-32 lg:pt-28">
        <div className="relative z-10">
          <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50/90 px-5 py-3 font-mono text-sm text-indigo-800">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
            Technical Operations & DevOps Support
          </div>

          <p className="mb-4 font-mono text-sm font-medium text-gray-500">
            Hello, world! I&apos;m
          </p>

          <h1 className="max-w-4xl text-[clamp(3.3rem,7vw,6.8rem)] font-bold leading-[0.99] tracking-[-0.075em]">
            Mirza Abrar
            <br />
            Baig<span className="text-[#5145e5]">.</span>
          </h1>

          <h2 className="mt-8 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-gray-800 sm:text-3xl lg:text-4xl">
            I keep cloud infrastructure reliable, secure and running<span className="text-[#5145e5]">.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Site Reliability and Technical Operations Engineer with 3.8+ years
            of experience supporting mission-critical cloud and Kubernetes-based
            applications. I work across cloud operations, production reliability,
            automation, observability and security to help keep business-critical
            systems resilient.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:mirzaabrarbaig98@gmail.com"
              className="rounded-xl bg-[#5145e5] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#4035c7]"
            >
              <span aria-hidden="true">✉ </span>Email me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/abrar-mirza-baig-5156a5275"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-[#5145e5]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/mirza8778"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-[#5145e5]"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-gray-500">
            <span>⌖ Pune, India</span>
            <a href="tel:+917276793253" className="transition hover:text-indigo-600">
              ☎ +91 7276793253
            </a>
            <a href="/about" className="font-semibold text-indigo-600 hover:underline">
              Detailed profile ↗
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-indigo-200/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-[#34415b] bg-[#10182c] shadow-2xl shadow-slate-400/30">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1d2940] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-[#ff6b70]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#ffca45]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#37d5a0]" />
              </div>
              <span className="font-mono text-xs text-slate-400 sm:text-sm">
                abrar@cloud-ops ~ zsh
              </span>
              <span className="text-xs text-slate-500">UTF-8</span>
            </div>

            <div className="space-y-7 p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
              <div>
                <p className="text-emerald-400">$ whoami</p>
                <p className="mt-1 text-slate-200">
                  Mirza Abrar Baig
                </p>
                <p className="text-slate-400">
                  Site Reliability / Technical Operations Engineer
                </p>
              </div>

              <div>
                <p className="text-emerald-400">$ cloud --platforms</p>
                <p className="mt-1 text-[#86c8ff]">
                  Google Cloud | AWS | Microsoft Azure
                </p>
              </div>

              <div>
                <p className="text-emerald-400">$ kubectl get expertise</p>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2 text-slate-300">
                  <span>GKE / EKS</span>
                  <span className="text-emerald-400">ACTIVE</span>
                  <span>Terraform</span>
                  <span className="text-emerald-400">ACTIVE</span>
                  <span>Ansible</span>
                  <span className="text-emerald-400">ACTIVE</span>
                  <span>CI/CD</span>
                  <span className="text-emerald-400">ACTIVE</span>
                  <span>Observability</span>
                  <span className="text-emerald-400">ACTIVE</span>
                  <span>Cloud Security</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
              </div>

              <div>
                <p className="text-emerald-400">$ cat ./operational-mindset</p>
                <div className="mt-2 rounded-lg border border-white/10 bg-[#1b2941] p-4 text-slate-300">
                  <p>Monitor continuously.</p>
                  <p>Respond decisively.</p>
                  <p>Automate intelligently.</p>
                  <p>Improve relentlessly.</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-emerald-400">
                  abrar@cloud-ops:~$ <span className="animate-pulse">▋</span>
                </p>
              </div>
            </div>
          </div>
          <p className="relative mt-5 text-center font-mono text-xs text-gray-500">
              {"// Cloud operations · Reliability · Automation"}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 divide-x divide-y divide-gray-100 px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-12">
          {stats.map((stat) => (
            <div key={stat.label} className="px-5 py-8 sm:px-9 sm:py-10">
              <p className="text-3xl font-bold tracking-tight text-[#5145e5] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-28 py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              01 / Capabilities
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              More than keeping systems running.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              My work combines production support, reliability engineering,
              cloud infrastructure, automation and security. The focus is not
              just resolving issues, but improving the way systems operate.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-8"
              >
                <p className="font-mono text-sm text-[#5145e5]">
                  / {item.number}
                </p>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational mindset */}
      <section className="border-y border-gray-200 bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              02 / How I approach operations
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              From incident response to continuous improvement.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {operationalFocus.map((item, index) => (
              <div key={item.title} className="border-t-2 border-indigo-500 pt-7">
                <p className="font-mono text-sm text-indigo-600">
                  0{index + 1} / PRINCIPLE
                </p>
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="architecture" className="scroll-mt-28 py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              03 / Technology & architecture
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              The tools behind the operations.
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              A broad technical toolkit across cloud platforms, container
              orchestration, infrastructure automation, monitoring, security
              and enterprise operations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {technologyGroups.map((group) => (
              <article
                key={group.number}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <p className="font-mono text-xs text-indigo-600">
                  {group.number} /
                </p>
                <h3 className="mt-4 text-lg font-bold">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="flex items-start gap-2 border-b border-gray-100 pb-3 text-sm text-gray-600 last:border-0"
                    >
                      <span className="mt-1 text-indigo-500">↗</span>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-28 border-y border-gray-200 bg-[#11182c] py-24 text-white lg:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-indigo-300">
            04 / Selected work
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Building beyond day-to-day operations.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Exploring infrastructure automation and reusable cloud
            infrastructure through practical engineering and open-source work.
          </p>

          <article className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-[#1b2640] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-2 font-mono text-xs text-indigo-200">
                OPEN SOURCE / TERRAFORM
              </span>
              <h3 className="mt-8 text-3xl font-bold sm:text-4xl">
                Terraform Modules
              </h3>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                A repository of reusable Terraform infrastructure modules,
                promoting modular infrastructure design, repeatability and
                Infrastructure as Code practices.
              </p>

              <div className="mt-9 grid grid-cols-3 gap-4 border-y border-white/10 py-7">
                <div>
                  <p className="text-3xl font-bold text-white">257+</p>
                  <p className="mt-2 text-xs text-slate-400">Modules</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">1,277+</p>
                  <p className="mt-2 text-xs text-slate-400">Files</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">MIT</p>
                  <p className="mt-2 text-xs text-slate-400">License</p>
                </div>
              </div>

              <a
                href="https://github.com/mirza8778/terraform-modules"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex rounded-xl bg-[#5145e5] px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Explore GitHub repository ↗
              </a>
            </div>

            <div className="flex items-center justify-center border-t border-white/10 bg-[#172039] p-7 sm:p-12 lg:border-l lg:border-t-0">
              <div className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-600 bg-[#0d1527] shadow-2xl">
                <div className="border-b border-white/10 px-5 py-4 font-mono text-xs text-slate-400">
                  ~/terraform-modules/main.tf
                </div>
                <div className="space-y-3 p-6 font-mono text-xs leading-6 sm:text-sm">
                  <p className="text-slate-500"># Reusable infrastructure</p>
                  <p className="text-purple-300">
                    module <span className="text-slate-200">&quot;cloud_infrastructure&quot;</span> {"{"}
                  </p>
                  <p className="pl-5 text-sky-300">
                    source = <span className="text-emerald-300">&quot;./modules/cloud&quot;</span>
                  </p>
                  <p className="pl-5 text-sky-300">
                    environment = <span className="text-emerald-300">&quot;production&quot;</span>
                  </p>
                  <p className="pl-5 text-sky-300">
                    managed_by = <span className="text-emerald-300">&quot;terraform&quot;</span>
                  </p>
                  <p className="text-purple-300">{"}"}</p>
                  <div className="mt-7 border-t border-white/10 pt-5 text-emerald-400">
                    $ terraform init
                    <br />
                    $ terraform plan
                    <br />
                    $ terraform apply
                  </div>
                </div>
              </div>
            </div>
          </article>

          <p className="mt-5 text-xs text-slate-500">
            Repository statistics are based on the previously supplied project details.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="scroll-mt-28 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              05 / My story
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology is only as good as its reliability.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-600">
            <p>
              I&apos;m Mirza Abrar Baig, a Technical Operations and DevOps
              Support Engineer based in Pune, India. I have 3.8+ years of
              professional experience supporting enterprise technology,
              mission-critical applications and cloud infrastructure.
            </p>
            <p>
              My professional journey has focused on the operational side of
              modern technology: understanding how applications behave in
              production, identifying infrastructure issues, responding to
              incidents and helping services remain reliable.
            </p>
            <p>
              Working with Google Cloud Platform, AWS and Azure has given me
              exposure to cloud infrastructure, Kubernetes, networking,
              identity management, storage, managed services and cloud
              operations. I also work with Terraform, Ansible and GitLab CI/CD
              to support infrastructure automation and deployment workflows.
            </p>
            <p>
              I believe observability is essential to reliability. Tools such
              as Datadog, Grafana, Prometheus and Google Cloud Monitoring help
              me understand system behaviour, investigate issues and support
              informed operational decisions.
            </p>
            <p>
              Beyond operations, I have an interest in cloud security,
              infrastructure standardization and continuous improvement.
              I enjoy collaborating with engineering, security and product
              teams to solve problems that cross traditional team boundaries.
            </p>

            <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-6">
              <p className="font-semibold text-gray-900">
                My engineering philosophy
              </p>
              <p className="mt-2 leading-7 text-gray-600">
                Understand the system. Detect problems early. Respond with
                clarity. Automate what can be repeated. Learn from every
                incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-28 border-y border-gray-200 bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              06 / Professional experience
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Experience in the production environment.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <div className="sticky top-32">
                <p className="font-mono text-sm text-indigo-600">
                  MARCH 2023 — PRESENT
                </p>
                <h3 className="mt-5 text-2xl font-bold">
                  Associate – IT Operations Technology
                </h3>
                <p className="mt-3 text-gray-600">
                  Synechron Technologies Pvt. Ltd.
                </p>
                <div className="mt-7 inline-flex rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                  3.8+ years of experience
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">Responsibilities & contributions</h3>
              <ul className="mt-8 space-y-6">
                {experienceHighlights.map((highlight, index) => (
                  <li key={highlight} className="flex gap-4">
                    <span className="mt-1 font-mono text-xs text-indigo-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-gray-600">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              07 / Professional credentials
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Certifications & continuous learning.
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Professional credentials reflecting my continued learning
              across cloud engineering, AI and cloud security.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <article
                key={cert.name}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-indigo-50 px-3 py-2 font-mono text-xs font-semibold text-indigo-700">
                    CREDENTIAL / 0{index + 1}
                  </span>
                  <span className="text-2xl text-indigo-500">✳</span>
                </div>
                <p className="mt-7 text-sm font-medium text-gray-500">
                  {cert.issuer}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {cert.description}
                </p>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#5145e5] hover:underline"
                  >
                    {cert.label} ↗
                  </a>
                ) : (
                  <span className="mt-7 inline-flex text-sm text-gray-500">
                    {cert.label} — link not supplied
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-gray-200 bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
              08 / Education
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              Academic foundation.
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              An engineering education that built my foundation in analytical
              thinking, structured problem-solving and technical learning.
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-xl border border-gray-200 p-7">
              <p className="font-mono text-xs text-indigo-600">2021</p>
              <h3 className="mt-3 text-xl font-bold">
                Bachelor of Technology
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Mechanical Engineering
              </p>
              <p className="mt-4 text-sm text-gray-500">
                P.E.S. College of Engineering, Aurangabad
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 p-7">
              <p className="font-mono text-xs text-indigo-600">2017</p>
              <h3 className="mt-3 text-xl font-bold">
                Diploma
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Mechanical Engineering
              </p>
              <p className="mt-4 text-sm text-gray-500">
                P.E.S. College of Engineering, Aurangabad
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#5145e5]">
            09 / Let&apos;s connect
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s make technology more reliable.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Open to connecting with professionals, cloud engineering teams
            and people working on DevOps, SRE, infrastructure automation and
            cloud operations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mirzaabrarbaig98@gmail.com"
              className="rounded-xl bg-[#5145e5] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-[#4035c7]"
            >
              Send me an email ↗
            </a>
            <a
              href="https://www.linkedin.com/in/abrar-mirza-baig-5156a5275"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600"
            >
              Connect on LinkedIn ↗
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Pune, Maharashtra, India · +91 7276793253
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div>
            <a href="#top" className="font-mono text-lg font-bold">
              ~/ <span className="text-[#5145e5]">mirza</span>.dev
            </a>
            <p className="mt-2 text-xs text-gray-500">
              Technical Operations · DevOps · SRE
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <a href="mailto:mirzaabrarbaig98@gmail.com" className="hover:text-indigo-600">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/abrar-mirza-baig-5156a5275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/mirza8778"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              GitHub ↗
            </a>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 Mirza Abrar Baig
          </p>
        </div>
      </footer>
    </main>
  );
}
