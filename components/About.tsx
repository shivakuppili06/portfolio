"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { aboutStats, educationTimeline, personalInfo } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({
  value,
  label,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, value: animated } = useCountUp(value * (decimals ? 10 : 1));
  const display = decimals ? (animated / 10).toFixed(decimals) : animated;

  return (
    <div
      ref={ref}
      className="glass glass-hover rounded-2xl p-6 text-center"
    >
      <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          description="A quick look at who I am, where I've studied, and the milestones along the way."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong flex flex-col gap-5 rounded-3xl p-8 lg:col-span-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <Sparkles size={22} className="text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">
              Engineering reliable software, end to end
            </h3>
            <p className="leading-relaxed text-muted">
              I&rsquo;m an Integrated M.Tech CSE student who enjoys taking a
              feature from a rough idea to a deployed, production-shaped
              system — race-condition-safe booking flows, encrypted vaults,
              and AI-assisted diagnostics included. I care about clean
              architecture as much as shipping fast, and I&rsquo;m currently
              deepening my cloud fundamentals on the road to the AWS
              Solutions Architect certification.
            </p>
            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-accent" />
                Integrated M.Tech, CSE &mdash; VIT-AP University
              </div>
            </div>
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 lg:col-span-3"
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-white">
              Education &amp; Milestones
            </h3>
            <ol className="relative space-y-8 border-l border-white/10 pl-6">
              {educationTimeline.map((item, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.year}
                  </span>
                  <h4 className="mt-1 font-display text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-secondary-light">
                    {item.place}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
