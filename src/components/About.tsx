import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Leaf,
  Palette,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-light.png";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
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

type FocusCardProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
};

function FocusCard({ title, icon, className }: FocusCardProps) {
  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <Card className="group h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-white shadow-none backdrop-blur-sm transition-all duration-300 hover:bg-white/14">
        <CardContent className="flex h-full min-h-25 flex-col justify-between p-3 sm:p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
            {icon}
          </div>

          <div className="mt-5 flex items-end justify-between gap-3">
            <h3 className="max-w-48 text-lg font-semibold leading-tight tracking-tight sm:text-[1.65rem]">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-primary py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[52px_52px] opacity-25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <motion.div variants={fadeLeft} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              About Innovate North
            </div>

            <div className="mt-6">
              <img
                src={logo}
                alt="Innovate North logo"
                className="h-16 w-auto object-contain sm:h-20"
              />
            </div>

            <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A hackathon built for practical innovation and measurable impact.
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-white/85 sm:text-lg">
              <p>
                Innovate North – Hack for Progress is a transformative hackathon
                aimed at addressing some of Northern Nigeria’s most pressing
                challenges through innovative, technology-enabled solutions.
              </p>

              <p>
                The event brings together a diverse group of young innovators,
                technologists, and community leaders to develop impactful
                solutions that focus on critical areas.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            <FocusCard
              title="Agriculture"
              icon={<Leaf className="h-6 w-6" />}
            />

            <FocusCard
              title="Creative Fashion"
              icon={<Palette className="h-6 w-6" />}
            />

            <FocusCard
              title="Education"
              icon={<GraduationCap className="h-6 w-6" />}
            />

            <FocusCard
              title="Digital Trade"
              icon={<Globe className="h-6 w-6" />}
            />

            <FocusCard
              title="Circular Economy"
              icon={<TrendingUp className="h-6 w-6" />}
            />

            <FocusCard
              title="GovTech"
              icon={<Sparkles className="h-6 w-6" />}
            />
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <FocusCard
                title="Climate Tech"
                icon={<Leaf className="h-6 w-6" />}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
