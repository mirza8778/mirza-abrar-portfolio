import Link from "next/link";
import { profile, stats } from "@/data/profile";

const lines = [
  { cmd: "whoami", out: "Site Reliability / Technical Operations Engineer" },
  { cmd: "cloud --platforms", out: "Google Cloud | AWS | Microsoft Azure" },
  { cmd: "kubectl get expertise", out: "GKE · EKS · Terraform · Ansible · CI/CD" },
  { cmd: "cat ./mindset", out: "Monitor. Respond. Automate. Improve." },
];

export function Hero() {
  return (
    <div className="mz-hero">
      <div>
        <p className="mz-pill">Technical Operations &amp; DevOps Support</p>
        <h1>
          {profile.name}
          <span>.</span>
        </h1>
        <p className="mz-lead">I keep cloud infrastructure reliable, secure and running.</p>
        <div className="mz-actions">
          <Link href="/projects" className="mz-button mz-primary">View my work</Link>
          <a href={`mailto:${profile.email}`} className="mz-button">Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mz-button">LinkedIn ↗</a>
        </div>
      </div>

      <div className="mz-terminal">
        <div className="mz-terminal-bar">
          <i /><i /><i />
          <span>abrar@cloud-ops</span>
        </div>
        <div className="mz-terminal-body">
          {lines.map((line, index) => (
            <div key={line.cmd} className="mz-line" style={{ animationDelay: `${index * 0.6}s` }}>
              <b>$ {line.cmd}</b>
              <p>{line.out}</p>
            </div>
          ))}
        </div>
      </div>

      <dl className="mz-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
