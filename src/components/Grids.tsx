import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { certifications } from "@/data/certifications";
import { technologyGroups } from "@/data/technology";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mz-tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const sections = [
  { href: "/capabilities", title: "Capabilities", text: "Reliability, cloud, Kubernetes and security." },
  { href: "/technology", title: "Technology", text: "The tools behind the operations." },
  { href: "/projects", title: "Projects", text: "Open-source Terraform modules." },
  { href: "/experience", title: "Experience", text: "Production work since March 2023." },
  { href: "/certifications", title: "Certifications", text: "Credentials in cloud, AI and security." },
  { href: "/contact", title: "Contact", text: "Let's connect." },
];

export function ExploreGrid() {
  return (
    <div className="mz-grid">
      {sections.map((section) => (
        <Link key={section.href} href={section.href} className="mz-card">
          <strong>{section.title} →</strong>
          <p>{section.text}</p>
        </Link>
      ))}
    </div>
  );
}

export function CapabilityGrid() {
  return (
    <div className="mz-grid">
      {capabilities.map((item) => (
        <article key={item.number} className="mz-card">
          <small>/ {item.number}</small>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
          <Tags items={item.tags} />
        </article>
      ))}
    </div>
  );
}

export function TechnologyGrid() {
  return (
    <div className="mz-grid">
      {technologyGroups.map((group) => (
        <article key={group.number} className="mz-card">
          <small>/ {group.number}</small>
          <strong>{group.title}</strong>
          <Tags items={group.technologies} />
        </article>
      ))}
    </div>
  );
}

export function CertificationGrid() {
  return (
    <div className="mz-grid">
      {certifications.map((cert) => (
        <article key={cert.name} className="mz-card">
          <small>{cert.issuer}</small>
          <strong>{cert.name}</strong>
          <p>{cert.description}</p>
          {cert.url && (
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.label} ↗
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
