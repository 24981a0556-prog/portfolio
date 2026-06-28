import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { profile } from "../../data/portfolio";
import bannerAsset from "../../assets/banner.jpeg.asset.json";
import profileAsset from "../../assets/profile.jpeg.asset.json";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Banner backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bannerAsset.url}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Light sweep */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="animate-light-sweep absolute -inset-y-20 left-0 w-[40%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
      )}

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-mint" />
              <span className="relative h-2 w-2 rounded-full bg-mint" />
            </span>
            Available for freelance & internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-gradient">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-lg text-white/70 sm:text-xl"
          >
            <span className="text-white">Full Stack Developer</span> &nbsp;·&nbsp;
            building modern websites and digital products that ship.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/55"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View My Work <ArrowDown className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <FileText className="h-4 w-4" /> View Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-sm text-white/45"
          >
            <MapPin className="h-4 w-4" /> {profile.location} · Open to remote
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[40px] opacity-50 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div className="surface-card relative overflow-hidden rounded-[28px] p-2">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src={profileAsset.url}
                  alt="Rahul Patnaik Potnuru"
                  className="h-[520px] w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass animate-float absolute -left-4 top-10 rounded-2xl px-4 py-3 text-xs sm:-left-8"
            >
              <div className="font-display text-base font-semibold text-mint">
                React · Node
              </div>
              <div className="text-white/55">Full Stack</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass animate-float absolute -right-4 bottom-24 rounded-2xl px-4 py-3 text-xs sm:-right-8"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="font-display text-base font-semibold text-sky">
                4 Live Sites
              </div>
              <div className="text-white/55">Shipped to prod</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="glass animate-float absolute -bottom-4 left-10 rounded-2xl px-4 py-3 text-xs"
              style={{ animationDelay: "3s" }}
            >
              <div className="font-display text-base font-semibold text-white">
                Java · DSA
              </div>
              <div className="text-white/55">Always learning</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
