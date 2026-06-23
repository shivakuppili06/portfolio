"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, HeartPulse, BookOpen, ShieldCheck, Github, ExternalLink, type LucideIcon } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects, type Project } from "@/lib/data";

const iconMap: Record<Project["icon"], LucideIcon> = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  "book-open": BookOpen,
  shield: ShieldCheck,
};

const accentMap: Record<Project["accent"], { bg: string; text: string; badge: string }> = {
  primary: {
    bg: "from-primary/25 via-primary/5 to-transparent",
    text: "text-primary-light",
    badge: "bg-primary/10 text-primary-light ring-primary/30",
  },
  secondary: {
    bg: "from-secondary/25 via-secondary/5 to-transparent",
    text: "text-secondary-light",
    badge: "bg-secondary/10 text-secondary-light ring-secondary/30",
  },
  accent: {
    bg: "from-accent/25 via-accent/5 to-transparent",
    text: "text-accent-light",
    badge: "bg-accent/10 text-accent-light ring-accent/30",
  },
};

function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A few systems I've designed end to end — each one chosen to show a different engineering muscle."
        />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon];
            const accent = accentMap[project.accent];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              >
                <TiltCard>
                  <div className="glass glass-hover flex h-full flex-col overflow-hidden rounded-3xl">
                    <div
                      className={`flex h-40 items-center justify-center bg-gradient-to-br ${accent.bg}`}
                    >
                      <Icon size={52} className={accent.text} strokeWidth={1.4} />
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-7">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${accent.badge}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-5">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
                          >
                            <Github size={15} />
                            Code
                          </a>
                        ) : null}

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                          >
                            <ExternalLink size={15} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-muted/70 ring-1 ring-white/5">
                            Demo coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
