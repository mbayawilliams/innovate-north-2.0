import React from "react";
import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Trophy,
  Cpu,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useLocation } from "react-router";

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
      duration: 0.6,
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
      duration: 0.65,
      ease: easeSmooth,
    },
  },
};

const floatingCard: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeSmooth,
    },
  },
};

type InsightCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

function InsightCard({
  title,
  description,
  icon,
  className,
}: InsightCardProps) {
  return (
    <motion.div
      variants={floatingCard}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "rounded-[1.75rem] border border-white/60 bg-white/60 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#160E8B] to-[rgba(22,14,139,0.72)] text-white shadow-md">
        {icon}
      </div>
      <h3 className="text-sm font-semibold tracking-tight text-slate-950 sm:text-base">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

const Hero: React.FC = () => {
  const location = useLocation();

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (location.pathname !== "/") return;

    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 96;

    const top =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", `/#${sectionId}`);

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  return (
    <section
      className="relative -mt-24 overflow-hidden bg-[linear-gradient(180deg,#fbfbfc_0%,#f6f7ff_34%,#ececff_100%)] pt-28 sm:-mt-28 sm:pt-32 lg:-mt-32 lg:min-h-screen lg:pt-36"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-155 bg-[radial-gradient(circle_at_top_left,rgba(22,14,139,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(22,14,139,0.10),transparent_28%),radial-gradient(circle_at_center_top,rgba(255,255,255,0.9),transparent_55%)]" />

        <div className="absolute left-[-6%] top-[10%] h-72 w-72 rounded-full bg-[rgba(22,14,139,0.10)] blur-3xl" />
        <div className="absolute right-[-6%] top-[6%] h-80 w-80 rounded-full bg-[rgba(22,14,139,0.12)] blur-3xl" />
        <div className="absolute -bottom-28 left-[26%] h-72 w-72 rounded-full bg-[rgba(22,14,139,0.08)] blur-3xl" />

        <svg
          className="absolute right-0 top-0 h-120 w-160 opacity-35"
          viewBox="0 0 720 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M620 40C512 40 464 126 464 196C464 286 542 324 542 394C542 460 494 520 404 520"
            stroke="url(#heroStroke)"
            strokeWidth="2"
          />
          <path
            d="M670 12C536 12 486 120 486 206C486 302 570 346 570 406C570 472 520 532 418 532"
            stroke="url(#heroStroke)"
            strokeWidth="2"
          />
          <path
            d="M570 72C484 72 442 138 442 202C442 276 514 316 514 388C514 444 474 498 396 498"
            stroke="url(#heroStroke)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="heroStroke"
              x1="712"
              y1="0"
              x2="396"
              y2="540"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#160E8B" stopOpacity="0.20" />
              <stop offset="1" stopColor="#160E8B" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,14,139,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,14,139,0.05)_1px,transparent_1px)] bg-size-[52px_52px] mask-[linear-gradient(to_bottom,white,rgba(255,255,255,0.55),transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12"
        >
          <div className="relative z-10 max-w-2xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(22,14,139,0.18)] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#160E8B] shadow-[0_10px_30px_rgba(22,14,139,0.08)] backdrop-blur-xl sm:text-sm"
            >
              <Sparkles className="h-4 w-4" />
              Innovate North 2.0 • Hack for Progress
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5">
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build ideas that move
                <span className="mt-2 block bg-linear-to-r from-[#160E8B] via-[rgba(22,14,139,0.88)] to-[rgba(22,14,139,0.68)] bg-clip-text text-transparent">
                  Northern Nigeria forward
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Join builders, designers, and problem-solvers to create useful,
                scalable solutions for real regional challenges.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link to="/register">
                <Button className="h-11 rounded-full bg-[#160E8B] px-6 text-sm font-medium text-white shadow-[0_14px_28px_rgba(22,14,139,0.22)] hover:bg-[rgba(22,14,139,0.92)]">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link
                to="/#about"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-[rgba(22,14,139,0.16)] bg-white/65 px-6 text-sm font-medium text-[#160E8B] backdrop-blur-xl hover:bg-white"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-[0_14px_36px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Date
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    16th – 18th June 2026
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#160E8B] sm:text-sm">
                    Applications open April 13 – April 30, 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-[0_14px_36px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(22,14,139,0.08)] text-[#160E8B]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Kano, Nigeria
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeLeft}
            className="relative mx-auto w-full max-w-xl lg:ml-auto"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-8 hidden h-20 w-20 rounded-full bg-linear-to-br from-[rgba(22,14,139,0.16)] to-[rgba(22,14,139,0.05)] blur-2xl sm:block"
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-8 hidden h-24 w-24 rounded-full bg-linear-to-br from-[rgba(22,14,139,0.12)] to-[rgba(22,14,139,0.04)] blur-3xl sm:block"
            />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/40 p-4 shadow-[0_30px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-5">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent" />

              <div className="grid gap-4 sm:grid-cols-2">
                <InsightCard
                  title="Sector-focused innovation"
                  description="Work across agriculture, education, digital trade, climate tech, and more."
                  icon={<Lightbulb className="h-5 w-5" />}
                />

                <InsightCard
                  title="From idea to execution"
                  description="Develop concepts, prototypes, or early-stage solutions with real potential."
                  icon={<Cpu className="h-5 w-5" />}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <motion.div
                  variants={floatingCard}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-white/60 bg-linear-to-br from-[#160E8B] to-[rgba(22,14,139,0.78)] p-4 text-white shadow-[0_22px_50px_rgba(22,14,139,0.24)]"
                >
                  <Sparkles className="h-5 w-5" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                    Focus
                  </p>
                  <p className="mt-1 text-base font-semibold">Innovation</p>
                </motion.div>

                <motion.div
                  variants={floatingCard}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-white/60 bg-white/72 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl"
                >
                  <Trophy className="h-5 w-5 text-[#160E8B]" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Outcome
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-950">
                    Demo Day
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
