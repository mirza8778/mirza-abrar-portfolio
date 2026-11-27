import Image from "next/image";
import { profile } from "@/data/profile";

type Item = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const items: Item[] = [
  { icon: "✉️", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "📞", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: "💼", label: "LinkedIn", value: "Connect with me", href: profile.linkedin, external: true },
  { icon: "🐙", label: "GitHub", value: "mirza8778", href: profile.github, external: true },
  { icon: "📍", label: "Location", value: "Pune, Maharashtra, India" },
];

export function ContactCards() {
  return (
    <>
      <div className="mz-contact-grid">
        {items.map((item) => {
          const body = (
            <>
              <span className="mz-contact-icon">{item.icon}</span>
              <span>
                <span className="mz-contact-label">{item.label}</span>
                <span className="mz-contact-value">{item.value}</span>
              </span>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              className="mz-contact-card"
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {body}
            </a>
          ) : (
            <div key={item.label} className="mz-contact-card">
              {body}
            </div>
          );
        })}
      </div>

      <div className="mz-qr-card">
        <Image
          src="/linkedin-qr.jpg"
          alt="QR code to connect with Mirza Abrar Baig on LinkedIn"
          width={160}
          height={160}
          className="mz-qr-img"
        />
        <div>
          <span className="mz-contact-label">LinkedIn QR</span>
          <p className="mz-qr-title">Scan to connect</p>
          <p className="mz-qr-text">
            Point your phone camera at the code to open my LinkedIn profile.
          </p>
        </div>
      </div>
    </>
  );
}