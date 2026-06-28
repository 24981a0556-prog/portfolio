import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrowserFrame } from "./BrowserFrame";
import { projects } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-mint">
            Featured Work
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Real products. <span className="text-gradient">Real users.</span>
            </h2>
            <p className="max-w-md text-base text-white/55">
              Four production deployments — each built to solve a real problem
              for a real audience.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            const urlLabel = new URL(p.live).host;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="group relative">
                  <div
                    aria-hidden
                    className="absolute -inset-6 -z-10 rounded-[32px] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                    style={{ background: "var(--gradient-accent)" }}
                  />
                  <motion.div
                    whileHover={{ y: -6, rotate: reverse ? -0.6 : 0.6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <BrowserFrame src={p.image} alt={p.title} url={urlLabel} />
                  </motion.div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/[0.08] px-3 py-1 text-xs uppercase tracking-[0.16em] text-mint">
                    {p.category}
                  </div>
                  <h3 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/65">
                    {p.description}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Problem
                      </div>
                      <p className="mt-1 text-sm text-white/70">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Solution
                      </div>
                      <p className="mt-1 text-sm text-white/70">{p.solution}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-1.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-mint" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(110,231,183,0.5)]"
                    >
                      Live Demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/35 hover:bg-white/5"
                    >
                      <Github className="h-4 w-4" /> View Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-1.5 py-2.5 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" /> {urlLabel}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
