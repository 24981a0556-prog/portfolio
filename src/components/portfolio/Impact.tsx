import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../../data/portfolio";

function CountUp({
  to,
  suffix = "",
  noCount,
}: {
  to: number;
  suffix?: string;
  noCount?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(noCount ? to : 0);

  useEffect(() => {
    if (!inView || noCount) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, noCount]);

  return (
    <span ref={ref} className="font-display tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px overflow-hidden px-0 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group relative bg-background px-6 py-10 text-center transition-colors hover:bg-white/[0.02]"
          >
            <div className="text-4xl font-semibold text-white sm:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} noCount={s.noCount} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
