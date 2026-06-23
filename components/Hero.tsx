"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Download, ArrowRight, ChevronDown, Cloud, Database, Boxes } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useTypewriter } from "@/hooks/useTypewriter";
import ParticleField from "./ParticleField";

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: personalInfo.socials.email, label: "Email" },
  { icon: Code2, href: personalInfo.socials.leetcode, label: "LeetCode" },
];

const floatingBadges = [
  { icon: Boxes, className: "-left-6 top-6 lg:-left-10", delay: 0 },
  { icon: Cloud, className: "-right-4 top-1/4 lg:-right-8", delay: 1.2 },
  { icon: Database, className: "bottom-4 -left-4 lg:-left-8", delay: 2.1 },
];

export default function Hero() {
  const typed = useTypewriter({ words: personalInfo.roles });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <ParticleField />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[340px_1fr]">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto flex justify-center lg:mx-0"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            {/* rotating gradient ring */}
            <div className="absolute -inset-2 rounded-full bg-aurora opacity-70 blur-md animate-spin-slow" />
            <div className="absolute -inset-2 rounded-full bg-aurora opacity-90 animate-spin-slow" style={{ animationDuration: "30s" }} />

            {/* avatar */}
            <div className="glass-strong absolute inset-1 flex items-center justify-center rounded-full">
              <span className="font-display text-6xl font-bold text-gradient">
                {personalInfo.initials}
              </span>
            </div>

            {/* floating tech badges */}
            {floatingBadges.map(({ icon: Icon, className, delay }, i) => (
              <motion.div
                key={i}
                className={`glass absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl shadow-glow ${className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
              >
                <Icon size={20} className="text-accent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-center lg:text-left"
        >
          <span className="section-eyebrow text-accent">Hello, I&rsquo;m</span>

          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {personalInfo.firstName}{" "}
            <span className="text-gradient">{personalInfo.lastName}</span>
          </h1>

          <div className="mt-4 flex h-9 items-center justify-center font-display text-xl font-semibold text-white/90 sm:text-2xl lg:justify-start">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-accent" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={personalInfo.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white glass glass-hover"
            >
              Contact Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="glass glass-hover group flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
