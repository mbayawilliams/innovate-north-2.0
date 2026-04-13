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

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -14, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
};

const desktopNavVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeOutExpo,
    },
  },
};

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/register";

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
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleMobileClose = () => setIsOpen(false);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Go to homepage"
            onClick={handleMobileClose}
          >
            <motion.img
              src={logo}
              alt="logo"
              className="w-20 lg:w-24"
              initial={{ scale: 0.9, opacity: 0, y: -8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: easeOutExpo,
              }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
            />
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden flex-1 justify-center lg:flex"
        >
          <NavigationMenu>
            <motion.div
              variants={desktopNavVariants}
              initial="hidden"
              animate="show"
            >
              <NavigationMenuList className="gap-1 xl:gap-2">
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
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "relative z-10 bg-transparent transition-colors",
                              isActive
                                ? "font-medium text-primary"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            <span className="relative z-10">{item.title}</span>

                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  layoutId="activeTab"
                                  initial={{ opacity: 0, scaleX: 0.6 }}
                                  animate={{ opacity: 1, scaleX: 1 }}
                                  exit={{ opacity: 0, scaleX: 0.6 }}
                                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-center bg-primary"
                                  transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                  }}
                                />
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
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.div
            className="hidden sm:block"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/register">
              <Button
                variant="default"
                size="sm"
                className={cn(
                  "h-auto cursor-pointer rounded-full px-6 py-2.5 shadow-md transition-all hover:shadow-primary/20",
                  isRegisterPage && "ring-2 ring-primary/20",
                )}
              >
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.18,
                    duration: 0.35,
                    ease: easeOutExpo,
                  }}
                >
                  Register Now
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SendHorizontal className="ml-2 h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.18 }}
          >
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-75 px-3 sm:w-85">
                <motion.div
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="show"
                  className="h-full"
                >
                  <SheetHeader>
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
                            className="w-20"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2 }}
                          />
                        </Link>
                      </SheetTitle>
                    </motion.div>
                  </SheetHeader>

                  <nav className="mt-8 flex flex-col gap-3">
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
                            onClick={handleMobileClose}
                            className={cn(
                              "block rounded-lg px-4 py-3 text-lg font-medium transition-all",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                            )}
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      );
                    })}

                    <motion.div
                      variants={mobileItemVariants}
                      className="mt-4 border-t border-border pt-4 sm:hidden"
                    >
                      <motion.div
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to="/register" onClick={handleMobileClose}>
                          <Button
                            className={cn(
                              "h-auto w-full rounded-full px-6 py-3 shadow-md transition-all hover:shadow-primary/20",
                              isRegisterPage && "ring-2 ring-primary/20",
                            )}
                          >
                            <span className="flex items-center">
                              Register Now
                              <motion.span
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.2 }}
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
        </motion.div>
      </div>
    </motion.header>
  );
}
