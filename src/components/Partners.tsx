import React from "react";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import partnersImage from "@/assets/partners.png";

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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#f6f7fb] py-20 sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,41,255,0.08),transparent_40%)]" />
        <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-[-5%] bottom-10 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl"
          >
            Partners and Sponsors
          </motion.h2>

          {/* Subtle divider */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#1b31ef]"
          />

          {/* Logos container */}
          <motion.div
            variants={fadeUp}
            className={cn(
              "mt-12 rounded-[2rem] border border-slate-200/60 bg-white/70 p-6 sm:p-8 lg:p-10",
              "backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
            )}
          >
            <motion.img
              src={partnersImage}
              alt="Partners and Sponsors"
              className="mx-auto w-full max-w-5xl object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easeSmooth }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Optional subtle note */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-sm text-slate-500 sm:text-base"
          >
            Supported by leading organizations committed to innovation,
            technology, and entrepreneurship across Africa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
