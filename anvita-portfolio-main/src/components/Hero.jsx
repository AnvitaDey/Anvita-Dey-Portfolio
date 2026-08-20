import { motion } from "framer-motion";
import useMagneticCursor from "../hooks/useMagneticCursor";
import AmbientParticles from "./AmbientParticles";
import { SprigCorner } from "./Botanicals";
import anvitaPortrait from "../public/anvitaportrait.jpg";

const HEADLINE = "Anvita Dey";

function CharStagger({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.25 + (wi * 6 + ci) * 0.02,
              }}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ctaRef = useMagneticCursor(0.3);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10"
    >
      <AmbientParticles count={16} />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        {/* Editorial text block */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow mb-5"
          >
            Electrical and Electronics Engineer &nbsp;·&nbsp; Robotics &amp; AI &nbsp;·&nbsp; Machine Learning
          </motion.p>

          <h1 className="font-display text-4xl leading-[1.08] tracking-wideish text-sage-forest dark:text-night-mist sm:text-5xl lg:text-6xl">
            <CharStagger text={HEADLINE} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md font-body text-base leading-relaxed text-sage-forest/75 dark:text-night-mist/70"
          >
            I design intelligent robotic systems that combine machine learning, computer vision, and embedded engineering. My work spans reinforcement learning, autonomous navigation, ROS2-based robotics, and real-time perception, with a focus on building reliable AI systems that solve real-world engineering problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              ref={ctaRef}
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-sage-forest px-7 py-3.5 font-body text-sm font-medium text-paper-cream shadow-stationery transition-shadow duration-500 hover:shadow-stationery-hover dark:bg-bloom-butter dark:text-night-charcoal"
            >
              Explore Projects
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="eyebrow border-b border-transparent pb-0.5 text-sage-forest transition-colors hover:border-bloom-terracotta hover:text-bloom-terracotta dark:text-night-mist dark:hover:text-bloom-butter"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Organic portrait container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-bloom-pink/30 via-paper-beige/40 to-sage-DEFAULT/30 dark:from-night-forest/40 dark:via-night-charcoal/40 dark:to-night-moss/40"
            style={{
              borderRadius: "62% 38% 55% 45% / 48% 42% 58% 52%",
            }}
          />
          <div
            className="absolute inset-3 overflow-hidden bg-paper-linen dark:bg-night-charcoal"
            style={{
              borderRadius: "62% 38% 55% 45% / 48% 42% 58% 52%",
            }}
          >
            <img
              src={anvitaPortrait}
              alt="Anvita Dey Portrait"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <SprigCorner className="absolute -bottom-3 -left-3 h-14 w-14 text-sage-moss/60 dark:text-bloom-butter/50" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-editorial text-sage-forest/50 dark:text-night-mist/40"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-sage-forest/30 dark:bg-night-mist/30"
        />
      </a>
    </section>
  );
}
