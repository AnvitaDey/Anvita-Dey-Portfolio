import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PressedLeaf } from "./Botanicals";

const TIMELINE = [
  {
    period: "Late May 2026 — Present",
    title: "Exploring Artificial Intelligence",
    desc: "My focus gradually shifted toward machine learning, computer vision, and reinforcement learning. Building systems that can perceive, learn, and make decisions has become the area of engineering I find most rewarding.",
  },
  {
    period: "2025 — 2026",
    title: "Building Autonomous Systems",
    desc: "From underwater vehicles to autonomous racing platforms, I learned how perception, navigation, and control come together in real-world robotics. Every project introduced new challenges and pushed me toward more reliable and intelligent system design.",
  },
  {
    period: "2025",
    title: "Learning Through Leadership",
    desc: "Joining the Robotics Club gave me the opportunity to mentor fellow students, organize workshops, and collaborate on ambitious engineering projects. Teaching others strengthened my own understanding and encouraged a hands-on approach to problem solving.",
  },
  {
    period: "2024",
    title: "Began with Curiosity",
    desc: "What started as an interest in electronics gradually evolved into a fascination with intelligent machines. Learning how hardware and software interact inspired me to explore robotics, embedded systems, and artificial intelligence beyond the classroom.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const vineProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative px-6 py-32 sm:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 max-w-xl">
          <p className="eyebrow mb-4">My Journey</p>
          <h2 className="font-display text-3xl leading-tight text-sage-forest dark:text-night-mist sm:text-4xl">
            A timeline, grown one season at a time.
          </h2>
        </div>

        <div className="relative">
          {/* Growing vine line — the section's signature element */}
          <svg
            className="absolute left-[7px] top-0 h-full w-1 sm:left-[11px]"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 0V100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-bloom-brown/10"
            />
            <motion.path
              d="M2 0V100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-sage-moss dark:text-bloom-butter"
              style={{ pathLength: vineProgress }}
            />
          </svg>

          <ol className="flex flex-col gap-16 pl-8 sm:pl-12">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-sage-moss bg-paper-cream dark:border-bloom-butter dark:bg-night-charcoal sm:-left-[54px]"
                  aria-hidden="true"
                />
                <p className="eyebrow mb-2">{item.period}</p>
                <h3 className="font-display text-xl text-sage-forest dark:text-night-mist">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-sage-forest/70 dark:text-night-mist/60">
                  {item.desc}
                </p>
                {i === TIMELINE.length - 1 && (
                  <PressedLeaf className="mt-4 h-6 w-12 text-sage-moss/40 dark:text-bloom-butter/30" />
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
