import { Reveal } from "./Reveal";
import { learning } from "../../data/portfolio";

export function Learning() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-mint">
                Currently Learning
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold">
                Sharpening the next chapter
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {learning.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
