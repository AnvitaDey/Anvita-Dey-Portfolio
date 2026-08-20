import { motion } from "framer-motion";

// Hand-placed semantic constellations.
// Skills are intentionally clustered by domain rather than randomly scattered.

const SKILLS = [
  // =========================
  // Machine Learning Cluster
  // =========================
  { name: "Machine Learning", weight: "lg", x: 48, y: 12 },
  { name: "PyTorch", weight: "md", x: 33, y: 18 },
  { name: "TensorFlow", weight: "md", x: 63, y: 18 },
  { name: "Reinforcement Learning", weight: "md", x: 79, y: 21 },

  { name: "Computer Vision", weight: "lg", x: 47, y: 31 },
  { name: "YOLO", weight: "md", x: 31, y: 37 },
  { name: "OpenCV", weight: "md", x: 62, y: 37 },

  // =========================
  // Programming Cluster
  // =========================
  { name: "Python", weight: "lg", x: 14, y: 55 },
  { name: "C Programming", weight: "md", x: 12, y: 66 },
  { name: "Git", weight: "sm", x: 14, y: 79 },
  { name: "Linux", weight: "sm", x: 30, y: 82 },

  // =========================
  // Robotics Cluster
  // =========================
  { name: "ROS2", weight: "lg", x: 76, y: 54 },
  { name: "Gazebo", weight: "sm", x: 90, y: 61 },
  { name: "LiDAR", weight: "sm", x: 63, y: 62 },

  { name: "Autonomous Navigation", weight: "md", x: 76, y: 71 },
  { name: "Sensor Integration", weight: "md", x: 66, y: 81 },

  // =========================
  // Engineering Cluster
  // =========================
  { name: "Fusion360", weight: "sm", x: 40, y: 93 },
  { name: "AutoCAD", weight: "sm", x: 58, y: 94 },
];

const WEIGHT_STYLE = {
  lg: "px-6 py-3 text-sm font-medium",
  md: "px-5 py-2.5 text-sm font-medium",
  sm: "px-4 py-2 text-xs font-medium",
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-4">Skills</p>

          <h2 className="font-display text-3xl leading-tight text-sage-forest dark:text-night-mist sm:text-4xl">
            A constellation, not a checklist.
          </h2>

          <p className="mt-5 font-body text-sm leading-relaxed text-sage-forest/70 dark:text-night-mist/60">
            Every project leaves traces. Instead of measuring proficiency with
            bars, these constellations represent the technologies that naturally
            come together across my work in machine learning, robotics, and
            intelligent systems.
          </p>
        </div>

        <div className="relative mx-auto h-[620px] w-full max-w-5xl sm:h-[700px]">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${7 + (i % 4)}s`,
              }}
            >
              <span
                className={`inline-flex items-center rounded-full border border-bloom-brown/15 bg-paper-cream/90 text-sage-forest shadow-stationery transition-all duration-500 hover:-translate-y-1 hover:border-bloom-terracotta/40 hover:shadow-stationery-hover dark:border-night-mist/10 dark:bg-night-charcoal/80 dark:text-night-mist ${WEIGHT_STYLE[s.weight]}`}
              >
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}