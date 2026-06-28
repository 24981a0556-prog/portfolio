import { Reveal } from "./Reveal";
import { credibility } from "../../data/portfolio";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-[0.22em] text-mint">
              About
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Turning ideas into <span className="text-gradient">digital experiences</span>.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-white/75">
              I&rsquo;m Rahul — a Computer Science engineering student and Full
              Stack Developer focused on shipping clean, production-ready web
              experiences. I work across the stack with{" "}
              <span className="text-white">React, Node, and TypeScript</span>,
              and I&rsquo;m strengthening my foundation with Java and DSA every
              day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-white/65">
              Beyond classroom projects, I&rsquo;ve already delivered real
              client work — a live fuel-station website, a premium photography
              studio site, a cinematic wedding invitation, and an AI
              misinformation detector. Every project is built to be fast,
              accessible, and easy to maintain.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-white/65">
              I care about the details others overlook — motion timing,
              spacing, typography, the way a button feels when you hover it.
              That&rsquo;s the difference between &ldquo;just a website&rdquo;
              and a product people remember.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {credibility.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
                >
                  <Sparkles className="h-3.5 w-3.5 text-mint" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
