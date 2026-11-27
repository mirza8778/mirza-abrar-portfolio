import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Cloud, DevOps & SRE`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Mirza Abrar Baig: cloud operations, DevOps, SRE, observability and cloud security.",
};

const navbar = (
  <Navbar
    logo={
      <span className="mz-logo">
        mirza-abrar<span>.Ops</span>
      </span>
    }
    projectLink={profile.github}
  />
);

const footer = <Footer>© {new Date().getFullYear()} {profile.name}</Footer>;

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 244, saturation: 75 }} />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mirza8778/mirza-abrar-portfolio/tree/main"
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 0, toggleButton: false }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
