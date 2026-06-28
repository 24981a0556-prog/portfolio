import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { techStack } from "../../data/portfolio";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const icons = [Code2, Layout, Server, Database, Wrench];

export function TechStack() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-6 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-mint">
            Tech Stack
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Tools I reach for to{" "}
            <span className="text-gradient">ship fast</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/60">
            A focused stack I use across freelance projects and personal
            builds — chosen for speed, DX, and production reliability.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, gi) => {
            const Icon = icons[gi % icons.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: gi * 0.06 }}
                whileHover={{ y: -4 }}
                className="surface-card group relative overflow-hidden p-6 transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(110,231,183,0.25)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--gradient-accent)" }}
                />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mint">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/85">{s.name}</span>
                        <span className="text-xs text-white/45 tabular-nums">
                          {s.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{ background: "var(--gradient-accent)" }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
