"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Github, Code2, Trophy } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { achievementStats, certifications, codingProfiles } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

const profileIcon: Record<string, typeof Github> = {
  GitHub: Github,
  LeetCode: Code2,
};

function CounterCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="glass glass-hover rounded-2xl p-7 text-center">
      <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {animated}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proof of work"
          title="Achievements"
          description="Certifications, coding profiles, and the numbers behind the work."
        />

        <div className="mb-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {achievementStats.map((stat) => (
            <CounterCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-accent">
                <Award size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-white">
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start justify-between gap-3 rounded-xl bg-white/[0.03] p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{cert.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/30">
                    {cert.status}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coding profiles + hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-strong flex flex-col rounded-3xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 text-accent">
                <Trophy size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-white">
                Coding Profiles
              </h3>
            </div>
            <ul className="space-y-3">
              {codingProfiles.map((profile) => {
                const Icon = profileIcon[profile.platform] ?? Code2;
                return (
                  <li key={profile.platform}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} className="text-accent" />
                        <span>
                          <span className="block text-sm font-medium text-white">
                            {profile.platform}
                          </span>
                          <span className="text-xs text-muted">{profile.handle}</span>
                        </span>
                      </span>
                      <ExternalLink
                        size={15}
                        className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 text-center text-xs text-muted">
              Hackathon wins and awards will be added here as they happen.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
