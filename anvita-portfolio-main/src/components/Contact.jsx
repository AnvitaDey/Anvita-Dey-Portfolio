import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SprigCorner } from "./Botanicals";
import botanicalLetter from "../public/botanical-letter.png";
export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">Contact</p>

        <h2 className="font-display text-3xl leading-tight text-sage-forest dark:text-night-mist sm:text-4xl">
          Write a little, wait a little.
        </h2>

        <p className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-sage-forest/70 dark:text-night-mist/60">
          Open the envelope for the ways to reach me — or just send an email
          directly.
        </p>

        {/* Envelope */}
        <div className="mx-auto mt-16 flex w-full max-w-sm flex-col items-center">

          <motion.div
            animate={{
              marginBottom: open ? "20rem" : "0rem",
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full"
          >

            {/* LETTER */}

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -110,
                    scale: 0.97,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 230,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -80,
                    scale: 0.97,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 right-0 -top-44 z-10 flex justify-center"
                >
                  <div className="card-stationery w-[90%] rounded-3xl p-7 text-left shadow-stationery backdrop-blur-sm">

                    {/* Botanical Header */}
                    <div className="flex flex-col items-center text-center">

                      <motion.img
                        src={botanicalLetter}
                        alt="Botanical"
                        initial={{
                          opacity: 0,
                          scale: 0.85,
                          y: 10,
                          filter: "blur(6px)",
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          delay: 0.45,
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="-mt-16 mb-2 w-44 object-contain select-none pointer-events-none"
                        draggable={false}
                      />

                      <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.65,
                          duration: 0.6,
                        }}
                        className="font-display text-3xl italic text-sage-forest dark:text-night-mist"
                      >
                        Dear Visitor,
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.8,
                          duration: 0.6,
                        }}
                        className="mt-2 text-sm text-sage-forest/60 dark:text-night-mist/60"
                      >
                        Thank you for visiting.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                          delay: 1,
                          duration: 0.5,
                        }}
                        className="my-7 h-px w-24 origin-center bg-bloom-brown/20"
                      />

                    </div>

                    {/* Contact Links */}

                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.12,
                            delayChildren: 1.05,
                          },
                        },
                      }}
                      className="mx-auto max-w-xs space-y-3"
                    >

                      {[
                        {
                          icon: <FiMail />,
                          href: "mailto:anvita.dey.3340@gmail.com",
                          text: "anvita.dey.3340@gmail.com",
                        },
                        {
                          icon: <FiGithub />,
                          href: "https://github.com/AnvitaDey",
                          text: "github.com/AnvitaDey",
                        },
                        {
                          icon: <FiLinkedin />,
                          href: "https://linkedin.com/in/anvita-dey3340",
                          text: "linkedin.com/in/anvita-dey3340",
                        },
                      ].map((item) => (
                        <motion.li
                          key={item.text}
                          variants={{
                            hidden: {
                              opacity: 0,
                              x: -10,
                            },
                            visible: {
                              opacity: 1,
                              x: 0,
                            },
                          }}
                        >
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-paper-beige/70 dark:hover:bg-night-charcoal/70 hover:translate-x-1"
                          >
                            <span className="text-base">{item.icon}</span>

                            <span className="text-sm text-sage-forest dark:text-night-mist">
                              {item.text}
                            </span>
                          </a>
                        </motion.li>
                      ))}

                    </motion.ul>



                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ENVELOPE */}

            <button
              onClick={() => setOpen(!open)}
              className="relative z-20 block h-64 w-full focus:outline-none"
            >
              <div className="card-stationery relative h-full overflow-hidden">

                <div className="absolute inset-0 rounded-[inherit] bg-paper-cream dark:bg-night-charcoal" />

                <SprigCorner className="absolute bottom-3 left-3 h-9 w-9 text-sage-moss/40 dark:text-bloom-butter/30" />

                <motion.div
                  animate={{
                    rotateX: open ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    transformOrigin: "top",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-x-0 top-0 z-30 h-1/2 origin-top border-b border-bloom-brown/10 bg-gradient-to-b from-paper-beige to-paper-cream dark:from-night-forest dark:to-night-charcoal"
                />

                {!open && (
                  <motion.span
                    animate={{
                      opacity: open ? 0 : 1,
                    }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-editorial text-sage-forest/50 dark:text-night-mist/40"
                  >
                    Tap to open
                  </motion.span>
                )}
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}