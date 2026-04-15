import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  Users,
  Lightbulb,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeSmooth,
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

type RequirementCardProps = {
  title: string;
  icon: React.ReactNode;
  items: string[];
  className?: string;
};

function RequirementCard({
  title,
  icon,
  items,
  className,
}: RequirementCardProps) {
  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <Card className="h-full overflow-hidden rounded-[1.75rem] border border-[rgba(22,14,139,0.08)] bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
              {icon}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-[#160E8B] sm:text-2xl">
              {title}
            </h3>
          </div>

          <ul className="mt-5 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#160E8B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const eligibilityItems = [
  "Participants must reside in Northern Nigeria.",
  "Projects must address one of the sectors: Creative Fashion, Digital Trade, Circular Economy, Education, or Agriculture.",
  "Individuals or teams of up to 5 people with diverse skill sets are encouraged.",
  "Projects should be in the concept, prototype, or early development stage.",
  "Open to participants aged 18 to 35.",
];

const solutionItems = ["Product and traction can be tech-aided or non-tech."];

const Participation: React.FC = () => {
  return (
    <section
      id="participation"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfbfc_0%,#f8f8ff_40%,#f2f4ff_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,14,139,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(22,14,139,0.08),transparent_28%)]" />
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-[rgba(22,14,139,0.08)] blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[rgba(22,14,139,0.07)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,14,139,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,14,139,0.04)_1px,transparent_1px)] bg-size-[52px_52px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14"
        >
          <motion.div variants={fadeLeft} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(22,14,139,0.12)] bg-white/75 px-4 py-2 text-sm font-medium text-[#160E8B] shadow-[0_10px_30px_rgba(22,14,139,0.06)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Participation Information
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#160E8B] sm:text-4xl lg:text-5xl">
              Who can participate, and what qualifies?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              The hackathon is designed to foster creativity, collaboration, and
              entrepreneurship. Innovate North provides a platform for
              participants to showcase their ideas, receive mentorship, and gain
              access to incubation programs that turn concepts into scalable
              solutions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-[rgba(22,14,139,0.08)] bg-white/75 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                  <Users className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Team size
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                  Up to 5
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-[rgba(22,14,139,0.08)] bg-linear-to-br from-[#160E8B] to-[rgba(22,14,139,0.82)] p-5 text-white shadow-[0_20px_50px_rgba(22,14,139,0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/75">
                  Age range
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  18 to 35
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-[rgba(22,14,139,0.08)] bg-white/75 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Region
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
                  Northern Nigeria
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-[rgba(22,14,139,0.08)] bg-white/75 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Stage
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
                  Concept to early development
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} className="grid gap-5">
            <RequirementCard
              title="Team Eligibility"
              icon={<Users className="h-5 w-5" />}
              items={eligibilityItems}
            />

            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-[2rem] border border-[rgba(22,14,139,0.08)] bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-[rgba(22,14,139,0.08)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#160E8B] sm:text-2xl">
                      Solution Requirements
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {solutionItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-7 text-slate-700 sm:text-base"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#160E8B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4 bg-[linear-gradient(135deg,rgba(22,14,139,0.05),rgba(22,14,139,0.12))] p-5 lg:p-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                      Submission style
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Flexible and scalable
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                      Strong ideas matter. Your solution can be tech-aided or
                      non-tech, as long as it shows clear value and traction.
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#160E8B] text-white shadow-[0_12px_30px_rgba(22,14,139,0.18)] sm:flex">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Participation;
