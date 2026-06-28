import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
  type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap";

  const variants = {
    primary:
      "btn-gradient hover:shadow-[0_10px_40px_-10px_rgba(110,231,183,0.55)]",
    ghost:
      "glass text-foreground hover:bg-white/8 border border-white/10",
    outline:
      "border border-white/15 text-foreground hover:border-white/35 hover:bg-white/5",
  } as const;

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(base, variants[variant], className)}
      style={{ transition: "transform 0.25s ease-out" }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
