import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: personalInfo.socials.email, label: "Email" },
  { icon: Code2, href: personalInfo.socials.leetcode, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
