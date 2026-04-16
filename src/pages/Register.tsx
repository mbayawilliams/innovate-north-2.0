import React from "react";
import { motion } from "framer-motion";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeM8xbz4ll8gC_77OBC8ZDOv9I1Mb2O_lI_NCgZTkBJaspR0Q/viewform?embedded=true";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Register for{" "}
            <span className="bg-linear-to-r from-[#160E8B] via-[rgba(22,14,139,0.88)] to-[rgba(22,14,139,0.68)] bg-clip-text text-transparent">
              Innovate North 2.0
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Take the first step toward building impactful solutions. Fill out
            the form below to secure your spot in the hackathon.
          </p>
        </motion.div>
      </section>

      {/* ================= FORM ================= */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            {/* Loader */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
                <p className="text-sm text-slate-600">
                  Loading registration form...
                </p>
              </div>
            )}

            {/* Error */}
            {hasError && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg font-semibold text-slate-900">
                  Failed to load form
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Please check your connection or try again.
                </p>

                <button
                  onClick={() => {
                    setHasError(false);
                    setIsLoading(true);
                  }}
                  className="mt-6 rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Form */}
            {!hasError && (
              <iframe
                src={formUrl}
                className="w-full min-h-225 sm:min-h-250 lg:min-h-275"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
                loading="lazy"
              />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Register;
