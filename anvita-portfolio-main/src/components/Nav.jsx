import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-500 ${scrolled
          ? "bg-paper/80 shadow-[0_1px_0_rgba(123,94,74,0.12)] backdrop-blur-md dark:bg-night-olive/80"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#hero"
          className="font-display text-lg tracking-wideish text-sage-forest dark:text-night-mist"
        >
          Anvita Dey
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow relative text-sage-forest/80 transition-colors hover:text-bloom-terracotta dark:text-night-mist/70 dark:hover:text-bloom-butter"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to moonlit mode"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-bloom-brown/15 text-sage-forest transition-colors hover:border-bloom-terracotta/50 hover:text-bloom-terracotta dark:border-night-mist/15 dark:text-night-mist dark:hover:text-bloom-butter"
        >
          {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
        </button>
      </nav>
    </motion.header>
  );
}
