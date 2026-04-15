import React from "react";
import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "@/assets/logo-light.png";

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

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  if (window.location.pathname !== "/") return;

  e.preventDefault();

  const section = document.getElementById(id);
  if (!section) return;

  const headerOffset = 96;
  const y = section.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.history.replaceState(null, "", `/#${id}`);

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/Bluesapphirehub?mibextid=ZbWKwL",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/bluesapphirehub?s=11&t=AXIOF-haeOi0RivRIN1tNw",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/blue-sapphire-hub/",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bluesapphirehub",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#200063] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.div variants={fadeUp}>
            <img
              src={logo}
              alt="Innovate North"
              className="mx-auto h-12 w-auto object-contain sm:h-14"
            />
          </motion.div>

          {/* Nav Links */}
          <motion.nav
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium sm:text-base"
          >
            <Link
              to="/#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-white/80 transition"
            >
              Home
            </Link>

            <Link
              to="/#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-white/80 transition"
            >
              About
            </Link>

            <Link
              to="/#participation"
              onClick={(e) => handleScroll(e, "participation")}
              className="hover:text-white/80 transition"
            >
              Participation
            </Link>

            <Link
              to="https://bluesapphirehub.com/"
              target="_blank"
              className="hover:text-white/80 transition"
            >
              Blue Sapphire Hub
            </Link>
            <Link to="/register" className="hover:text-white/80 transition">
              Register
            </Link>
          </motion.nav>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
          >
            At Innovate North, we believe that a brighter future for our
            communities starts with your ideas. Together, we can revolutionize
            agriculture, education, healthcare and security by harnessing the
            power of technology.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            className="mt-10 w-full border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:text-sm"
          >
            © {new Date().getFullYear()} Innovate North. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
