import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import useMagneticCursor from "../hooks/useMagneticCursor";
import { SprigCorner } from "./Botanicals";

const PROJECTS = [
  {
    title: "Multi-Agent Adaptive Traffic Signal Control",
    tag: "FLAGSHIP • REINFORCEMENT LEARNING • MULTI-AGENT AI",
    desc: "Designed and developed a multi-agent reinforcement learning framework using GRPO for adaptive traffic signal optimization in SUMO. Engineered coordinated reward functions and agent policies that reduced average queue length by 5.09% and average waiting time by 3.8% compared to PPO under varying traffic conditions.",
    span: "md:col-span-4 md:row-span-1",
    accent: "bg-bloom-terracotta/10",
  },
  {
    title: "ROS2 Autonomous Racing & Navigation System",
    tag: "ROBOTICS • ROS2 • AUTONOMOUS SYSTEMS",
    desc: "Built a ROS2-based autonomous racing pipeline using LiDAR perception, reactive navigation, and Optuna-assisted parameter tuning. Developed perception and navigation modules, achieving reliable autonomous lap completion with a best lap time of approximately 35 seconds.",
    span: "md:col-span-2 md:row-span-1",
    accent: "bg-sage-DEFAULT/15",
  },
  {
    title: "Autonomous Underwater Vehicle",
    tag: "EMBEDDED AI • UNDERWATER ROBOTICS",
    desc: "Designed and integrated mechanical assemblies, perception modules, and navigation systems for an autonomous underwater vehicle. Combined Raspberry Pi 4, Pixhawk, onboard sensors, YOLO, and OpenCV to support underwater mission execution.",
    span: "md:col-span-2 md:row-span-1",
    accent: "bg-bloom-pink/15",
  },
  {
    title: "Real-Time Perception & Object Analytics Framework",
    tag: "COMPUTER VISION • REAL-TIME ANALYTICS",
    desc: "Developed a YOLOv8-powered computer vision system for real-time object detection, counting, and video analytics. Integrated OpenCV-based preprocessing, live visualization, FPS monitoring, and multi-class detection evaluation.",
    span: "md:col-span-2 md:row-span-1",
    accent: "bg-bloom-butter/20",
  },
  {
    title: "Hand Gesture Recognition",
    tag: "DEEP LEARNING • COMPUTER VISION",
    desc: "Trained a lightweight CNN for multi-class hand gesture recognition with an automated dataset generation and preprocessing pipeline. Implemented real-time inference using OpenCV and evaluated performance through confusion matrices and classification metrics.",
    span: "md:col-span-2 md:row-span-1",
    accent: "bg-sage-olive/15",
  },
  {
    title: "FiTENTH Autonomous Racing Platform",
    tag: "ROBOTICS • AUTONOMOUS RACING",
    desc: "Contributed to the prototyping, integration, and testing of a ROS2-based autonomous racing platform. Worked on perception, navigation, and autonomous lap completion, helping achieve a best lap time of approximately 35 seconds.",
    span: "md:col-span-3 md:row-span-1",
    accent: "bg-bloom-butter/20",
  },
  {
    title: "CAD & 3D Design Portfolio",
    tag: "ENGINEERING DESIGN • CAD",
    desc: "Designed robot chassis, mounting brackets, propellers, enclosures, and mechanical assemblies using Fusion 360 and AutoCAD. Applied parametric modelling, assembly design, and manufacturing principles for robotics applications.",
    span: "md:col-span-3 md:row-span-1",
    accent: "bg-sage-olive/15",
  },
];

function ProjectCard({ project }) {
  const ref = useMagneticCursor(0.06);
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`card-stationery group relative overflow-hidden p-8 ${project.span}`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125 ${project.accent}`}
      />
      <SprigCorner className="absolute right-5 top-5 h-8 w-8 text-sage-moss/0 transition-colors duration-500 group-hover:text-sage-moss/50 dark:group-hover:text-bloom-butter/40" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <p className="eyebrow mb-3">{project.tag}</p>
          <h3 className="font-display text-2xl text-sage-forest dark:text-night-mist">
            {project.title}
          </h3>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-sage-forest/70 dark:text-night-mist/60">
            {project.desc}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-1.5 font-mono text-xs uppercase tracking-editorial text-sage-forest/60 transition-colors group-hover:text-bloom-terracotta dark:text-night-mist/50 dark:group-hover:text-bloom-butter">
          View case study
          <FiArrowUpRight className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="font-display text-3xl leading-tight text-sage-forest dark:text-night-mist sm:text-4xl">
              A cultivated body of work.
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-sage-forest/60 dark:text-night-mist/50">
            Few projects spanning ML systems, embedded robotics, and applied
            software craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
