"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  const hasExperience = experience.length > 0;

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          description="Internship and industry experience will land here as it happens."
        />

        {hasExperience ? (
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {experience.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <span className="glass absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full">
                  <Briefcase size={14} className="text-accent" />
                </span>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
                      <Calendar size={13} />
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-muted">
                    {item.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong flex flex-col items-center gap-4 rounded-3xl border border-dashed border-white/15 p-12 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Briefcase size={26} className="text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Actively interviewing
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              I&rsquo;m currently applying to full-stack and AI/ML engineering
              internships. This timeline will fill in with real roles,
              responsibilities, and tech stacks as soon as one is confirmed —
              in the meantime, take a look at what I&rsquo;ve already shipped.
            </p>
            <a
              href="#projects"
              className="group mt-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              View my projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
