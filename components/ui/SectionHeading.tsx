"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="section-eyebrow text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-muted ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
