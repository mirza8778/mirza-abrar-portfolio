import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Mirza Abrar Baig — Cloud, DevOps & SRE",
  description:
    "Professional profile of Mirza Abrar Baig (Pune, India): 3.6+ years in IT operations, cloud operations, DevOps, SRE, observability, and cloud security.",
};

const corePillars = [
  {
    title: "24x7 Production & Incident Operations",
    detail:
      "Supporting real-time ad-delivery and business-critical cloud platforms with P1/P2/P3 incident response, root cause analysis (RCA), change management, and runbook documentation.",
  },
  {
    title: "Infrastructure as Code & Automation",
    detail:
      "Authoring reusable multi-cloud Terraform/OpenTofu modules (257+ modules across GCP, AWS, Azure, Cloudflare, GitHub, Snowflake, and more) alongside Ansible and GitLab CI/CD.",
  },
  {
    title: "Observability & Cloud Security",
    detail:
      "Monitoring health and SLOs with Datadog, Grafana, Prometheus, Catchpoint, and Cloud Monitoring, while supporting security posture and triage via Wiz, Cyderes, SentinelOne, Tenable, and Google Chronicle.",
  },
];

const certifications = [
  "Google Cloud Certified: Associate Cloud Engineer",
  "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
  "Google Cloud: Gemini AI for DevOps Engineers",
  "Wiz Certified Cloud Security Foundational",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Resume Profile • Pune, India
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mirza Abrar Baig
            </h1>
            <p className="mt-1 text-base text-slate-300">
              Associate – IT Operations Technology | Cloud, DevOps &amp; SRE Focus
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/"
              className="rounded-lg border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Home
            </Link>
            <a
              href="https://github.com/mirza8778/terraform-modules"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-emerald-400"
            >
              Terraform Modules Repo
            </a>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">About Me</h2>
          <p className="leading-relaxed text-slate-300">
            I am a cloud and operations engineer based in Pune, Maharashtra, with 3.6+ years of
            hands-on experience at Synechron Technologies Pvt. Ltd. (since March 2023) supporting
            24x7 production workloads across Google Cloud Platform (GCP), AWS, and Microsoft Azure.
            My day-to-day work spans Kubernetes (GKE), Terraform infrastructure automation, GitLab
            CI/CD workflows, observability, incident management, and cloud security operations.
          </p>
          <p className="leading-relaxed text-slate-300">
            I am actively building toward Site Reliability Engineering (SRE), DevOps, Cloud Engineering,
            and Cloud Security roles where reliability, clear root cause analysis, and repeatable
            automation reduce toil and keep production systems resilient.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">How I Work</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <h3 className="text-sm font-semibold text-emerald-300">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold text-white">Flagship Open-Source Work</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            <strong className="text-white">mirza8778/terraform-modules</strong> — Published
            multi-cloud Terraform/OpenTofu module library (~257 modules across ~1,277 files under the
            MIT License) covering GCP, AWS, Azure, Cloudflare, GitHub, Snowflake, STACKIT, and
            Hetzner, structured with secret-safe <code className="text-emerald-300">.gitignore</code>{" "}
            rules and module documentation.
          </p>
        </section>

        <section className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">Certifications</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {certifications.map((cert) => (
                <li key={cert} className="rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Education &amp; Contact</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p className="rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2">
                B.Tech in Mechanical Engineering (2021) &amp; Diploma (2017) — P.E.S. College of
                Engineering, Aurangabad
              </p>
              <p className="rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2">
                Email: mirzaabrarbaig98@gmail.com
              </p>
              <p className="rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2">
                LinkedIn: linkedin.com/in/abrar-mirzabaig-5156a5275
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
