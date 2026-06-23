"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, Copy, Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Code2, href: personalInfo.socials.leetcode, label: "LeetCode" },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  };

  // No backend is wired up yet, so this opens the visitor's email client with
  // the message pre-filled. To collect submissions directly on the page
  // instead, connect a service like Formspree or EmailJS here.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 600);
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get In Touch"
          description="Have an internship, project, or just want to talk tech? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="glass-strong rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted">Email me at</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.email}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm text-muted">{personalInfo.phone}</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm text-muted">{personalInfo.location}</span>
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <p className="mb-4 text-sm font-medium text-white">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong flex flex-col gap-5 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/90">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 ring-1 ring-white/10 transition-colors focus:bg-white/[0.07] focus:ring-accent/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 ring-1 ring-white/10 transition-colors focus:bg-white/[0.07] focus:ring-accent/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about the opportunity or what's on your mind..."
                className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 ring-1 ring-white/10 transition-colors focus:bg-white/[0.07] focus:ring-accent/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "sent" ? (
                <>
                  <Check size={16} /> Opened in your mail app
                </>
              ) : status === "sending" ? (
                "Preparing message..."
              ) : (
                <>
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
