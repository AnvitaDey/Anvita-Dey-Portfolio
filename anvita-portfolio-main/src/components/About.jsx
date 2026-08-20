import { motion } from "framer-motion";
import { WildflowerLine, PressedLeaf } from "./Botanicals";

const REVEAL = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={REVEAL}
          className="mb-14 max-w-xl"
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl leading-tight text-sage-forest dark:text-night-mist sm:text-4xl">
            Where curiosity meets engineering.
          </h2>
          <WildflowerLine className="mt-6 h-5 w-full text-bloom-terracotta/50" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-2">
          {/* Large narrative card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="card-stationery col-span-1 row-span-2 p-8 md:col-span-3"
          >
            <p className="font-display text-xl italic leading-relaxed text-sage-forest dark:text-night-mist">
              "I think of engineering the way I think of a garden — nothing
              worth having grows on a deadline."
            </p>
            <p className="mt-6 font-body text-sm leading-relaxed text-sage-forest/70 dark:text-night-mist/60">
              I'm an Electronics and Communication Engineering student with a deep passion for Robotics and Artificial Intelligence.
              <br />
              <br />
              My focus lies in designing intelligent systems that can perceive, learn, and interact with the world. I enjoy working on hands-on projects that bridge theory with practical application, from embedded systems to machine learning implementations.
              <br />
              <br />
              I believe in building technology that makes a difference, and I'm always eager to collaborate on innovative solutions.
            </p>
          </motion.div>

          {/* Stat card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="card-stationery col-span-1 flex flex-col justify-between p-7 md:col-span-3"
          >
            <p className="font-display text-2xl text-bloom-terracotta">
              Core Committee Member, Robotics Club.
            </p>
            <p className="mt-2 font-body text-sm text-sage-forest/70 dark:text-night-mist/60">
              Mentor for 15+ students, organizer of technical workshops, and guide for projects involving ROS2, AI, and autonomous systems. Organising technical workshops, managing projects, and mentoring fellow students at the intersection of hardware and intelligence.
            </p>
          </motion.div>

          {/* Small quiet-living card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="card-stationery relative col-span-1 flex flex-col justify-between overflow-hidden p-7 md:col-span-2"
          >
            <p className="font-display text-2xl text-bloom-terracotta">Achievements</p>
            <p className="mt-3 font-body text-sm text-sage-forest/70 dark:text-night-mist/60">
              Winner — Tink-Her-Hack 4.0
              <br />
              Round 2 — Gujcost Robofest 5.0
            </p>

          </motion.div>

          {/* Focus card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="card-stationery col-span-1 p-7 md:col-span-2"
          >
            <p className="font-display text-2xl text-bloom-terracotta">Currently Pursuing</p>
            <p className="mt-3 font-body text-sm text-sage-forest/70 dark:text-night-mist/60">
              Deep in an intensive self-directed placement program — Robotics, Fusion360, AI, and production project builds, five days a
              week.
            </p>
          </motion.div>

          {/* Values card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="card-stationery col-span-1 p-7 md:col-span-2"
          >
            <p className="font-display text-2xl text-bloom-terracotta">Currently Seeking</p>
            <p className="mt-3 font-body text-sm text-sage-forest/70 dark:text-night-mist/60">
              AI & Machine Learning Internships
              <br />
              Robotics Research Opportunities
              <br />
              Software Engineering Roles
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
