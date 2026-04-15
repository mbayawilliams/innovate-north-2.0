import * as React from "react";
import { Link, useLocation } from "react-router";
import { Menu, SendHorizontal } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { title: "Home", href: "/#home", id: "home" },
  { title: "About", href: "/#about", id: "about" },
  { title: "Participation", href: "/#participation", id: "participation" },
  { title: "Schedule", href: "/#schedule", id: "schedule" },
  { title: "Price", href: "/#price", id: "price" },
  { title: "Partners", href: "/#partners", id: "partners" },
];

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeSmooth,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeSmooth,
    },
  },
};

const desktopNavVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: easeSmooth,
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: easeSmooth,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: easeSmooth,
    },
  },
};

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/register";

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!isHomePage) return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length) {
          const mostVisible = visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleMobileClose = () => setIsOpen(false);

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (!isHomePage) return;

    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    setActiveSection(sectionId);
    setIsOpen(false);

    const headerOffset = 96;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", `/#${sectionId}`);

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full px-3 sm:px-4"
    >
      <motion.div
        layout
        transition={{ duration: 0.35, ease: easeSmooth }}
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-b-2xl border",
          "backdrop-blur-xl supports-backdrop-filter:backdrop-blur-xl",
          isScrolled
            ? "border-white/40 bg-white/30 shadow-[0_12px_40px_rgba(15,23,42,0.10)]"
            : "border-white/30 bg-white/20 shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-white/28 via-white/12 to-white/6" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
          <div className="absolute left-4 top-3 h-16 w-32 rounded-full bg-white/18 blur-2xl" />
          <div className="absolute right-6 top-2 h-20 w-36 rounded-full bg-white/14 blur-3xl" />
        </div>

        <div className="relative flex h-16 items-center px-4 sm:px-5 lg:h-18 lg:px-6">
          <motion.div variants={fadeDownItem} className="shrink-0">
            <Link
              to="/"
              onClick={handleMobileClose}
              aria-label="Go to homepage"
              className="flex items-center"
            >
              <motion.img
                src={logo}
                alt="logo"
                className="h-9 w-auto object-contain sm:h-10 lg:h-11"
                initial={{ opacity: 0, scale: 0.92, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.45, ease: easeSmooth }}
                whileHover={{ scale: 1.04 }}
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeDownItem}
            className="ml-auto hidden items-center gap-3 lg:flex"
          >
            <NavigationMenu>
              <motion.div
                variants={desktopNavVariants}
                initial="hidden"
                animate="show"
              >
                <NavigationMenuList className="gap-1 rounded-2xl border border-slate-200/70 bg-white/55 px-2 py-1 shadow-sm backdrop-blur-xl">
                  {navItems.map((item) => {
                    const isActive = isHomePage && activeSection === item.id;

                    return (
                      <motion.div key={item.title} variants={navItemVariants}>
                        <NavigationMenuItem className="relative">
                          <motion.div
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                          >
                            <Link
                              to={item.href}
                              onClick={(event) =>
                                handleSectionNavigation(event, item.id)
                              }
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "relative h-10 rounded-xl bg-transparent px-4 text-sm font-medium transition-all duration-300",
                                "hover:bg-white/80 hover:text-slate-900",
                                isActive
                                  ? "text-slate-950"
                                  : "text-slate-600 hover:text-slate-900",
                              )}
                            >
                              <span className="relative z-10">
                                {item.title}
                              </span>

                              <AnimatePresence>
                                {isActive && (
                                  <>
                                    <motion.span
                                      layoutId="desktopActiveBg"
                                      className="absolute inset-0 rounded-xl bg-linear-to-b from-white to-slate-50 shadow-[0_4px_16px_rgba(15,23,42,0.08)]"
                                      transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 32,
                                      }}
                                    />
                                    <motion.span
                                      layoutId="desktopActiveLine"
                                      className="absolute inset-x-3 bottom-1.25 h-0.5 rounded-full bg-slate-900"
                                      transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                      }}
                                    />
                                  </>
                                )}
                              </AnimatePresence>
                            </Link>
                          </motion.div>
                        </NavigationMenuItem>
                      </motion.div>
                    );
                  })}
                </NavigationMenuList>
              </motion.div>
            </NavigationMenu>

            <motion.div
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/register">
                <Button
                  variant="default"
                  size="sm"
                  className={cn(
                    " rounded-full px-5 py-3 h-auto text-sm font-medium shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition-all cursor-pointer",
                    " text-white ",
                    isRegisterPage && "ring-2 ring-slate-300",
                  )}
                >
                  <motion.span
                    className="flex items-center"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15,
                      ease: easeSmooth,
                    }}
                  >
                    Register Now
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.18 }}
                    >
                      <SendHorizontal className="ml-2 h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeDownItem}
            className="ml-auto flex items-center lg:hidden"
          >
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-full border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm backdrop-blur-xl hover:bg-white"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[320px] border-r border-slate-200 bg-white/95 px-4 backdrop-blur-2xl sm:w-90"
              >
                <motion.div
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="show"
                  className="h-full"
                >
                  <SheetHeader className="border-b border-slate-200 pb-4">
                    <motion.div variants={mobileItemVariants}>
                      <SheetTitle className="text-left">
                        <Link
                          to="/"
                          onClick={handleMobileClose}
                          className="inline-flex items-center"
                        >
                          <motion.img
                            src={logo}
                            alt="logo"
                            className="h-10 w-auto object-contain"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2 }}
                          />
                        </Link>
                      </SheetTitle>
                    </motion.div>
                  </SheetHeader>

                  <nav className="mt-6 flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive = isHomePage && activeSection === item.id;

                      return (
                        <motion.div
                          key={item.title}
                          variants={mobileItemVariants}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            to={item.href}
                            onClick={(event) =>
                              handleSectionNavigation(event, item.id)
                            }
                            className={cn(
                              "block rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300",
                              isActive
                                ? "bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                            )}
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      );
                    })}

                    <motion.div
                      variants={mobileItemVariants}
                      className="mt-4 border-t border-slate-200 pt-4"
                    >
                      <motion.div
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to="/register" onClick={handleMobileClose}>
                          <Button
                            className={cn(
                              "h-11 w-full rounded-full bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:bg-slate-900",
                              isRegisterPage && "ring-2 ring-slate-300",
                            )}
                          >
                            <span className="flex items-center">
                              Register Now
                              <motion.span
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.18 }}
                              >
                                <SendHorizontal className="ml-2 h-4 w-4" />
                              </motion.span>
                            </span>
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </nav>
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
