import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  CalendarRange,
  Clock3,
  Trophy,
  Medal,
  Award,
  ArrowRight,
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
  hidden: { opacity: 0, y: 26 },
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
  hidden: { opacity: 0, x: -28 },
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
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

type DayCardProps = {
  day: string;
  title: string;
};

function DayCard({ day, title }: DayCardProps) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.22 }}>
      <Card className="h-full rounded-[1.5rem] border border-white/10 bg-[#1b31ef] text-white shadow-[0_18px_40px_rgba(24,39,255,0.18)]">
        <CardContent className="p-5 sm:p-6">
          <p className="text-sm font-medium text-white/75">{day}</p>
          <h4 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            {title}
          </h4>
        </CardContent>
      </Card>
    </motion.div>
  );
}

type PrizeCardProps = {
  place: string;
  amount: string;
  icon: React.ReactNode;
  className?: string;
};

function PrizeCard({ place, amount, icon, className }: PrizeCardProps) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.22 }}>
      <Card
        className={cn(
          "overflow-hidden rounded-[1.75rem] border border-white/10 text-white shadow-[0_22px_60px_rgba(15,23,42,0.20)]",
          className,
        )}
      >
        <CardContent className="relative p-6 sm:p-7">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/8 blur-2xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              {icon}
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {place}
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {amount}
            </h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const scheduleItems = [
  "Call for Application: 30th December 2024 - 17th January 2025",
  "Selection: 17th January 2025",
  "Notification: 20th January 2025",
  "Hackathon: 27th - 30th January 2025",
];

const ScheduleAndPrizes: React.FC = () => {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-[#181818] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,14,139,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(22,14,139,0.16),transparent_30%)]" />
        <div className="absolute left-[-5%] top-16 h-72 w-72 rounded-full bg-[rgba(22,14,139,0.20)] blur-3xl" />
        <div className="absolute right-[-4%] top-28 h-72 w-72 rounded-full bg-[rgba(22,14,139,0.18)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[rgba(22,14,139,0.12)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[54px_54px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-16 lg:space-y-20"
        >
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div variants={fadeLeft}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
                <CalendarRange className="h-4 w-4" />
                Hackathon Timeline
              </div>

              <h2 className="mt-6 text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl">
                <span className="block text-transparent [-webkit-text-stroke:1.5px_white]">
                  Hackathon
                </span>
                <span className="mt-1 block text-white">Schedule</span>
              </h2>

              <div className="mt-8 space-y-4">
                {scheduleItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-white">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-white/85 sm:text-base">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeRight}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
                <ArrowRight className="h-4 w-4" />
                4-Day Experience
              </div>

              <h2 className="mt-6 text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl">
                <span className="block text-transparent [-webkit-text-stroke:1.5px_white]">
                  4 Days
                </span>
                <span className="mt-1 block text-white">Hackathon</span>
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <DayCard day="Day 1" title="Kickoff and Orientation" />
                <DayCard day="Day 2" title="Building and Collaborating" />
                <DayCard
                  day="Day 3"
                  title="Hacking Time and Mock Presentation"
                />
                <DayCard day="Day 4" title="Presentation and Judging" />
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
                <Trophy className="h-4 w-4" />
                Rewards
              </div>

              <h2 className="mt-6 text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl">
                <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
                  Prizes
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-10 grid gap-5 lg:grid-cols-3"
            >
              <PrizeCard
                place="1st Place"
                amount="₦1,500,000"
                icon={<Trophy className="h-7 w-7" />}
                className="bg-[linear-gradient(135deg,#160E8B_0%,#1f18cf_100%)]"
              />

              <PrizeCard
                place="2nd Place"
                amount="₦1,000,000"
                icon={<Medal className="h-7 w-7" />}
                className="bg-[linear-gradient(135deg,#2b0fff_0%,#4a23ff_100%)]"
              />

              <PrizeCard
                place="3rd Place"
                amount="₦500,000"
                icon={<Award className="h-7 w-7" />}
                className="bg-[linear-gradient(135deg,#183df2_0%,#1b31ef_100%)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleAndPrizes;
