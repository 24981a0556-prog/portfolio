import { profile } from "../../data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold">
              Rahul<span className="text-mint">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/55">
              Full Stack Developer building polished, production-ready web
              experiences for businesses and creators.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Elsewhere
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition-colors hover:border-mint/40 hover:text-mint"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition-colors hover:border-mint/40 hover:text-mint"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition-colors hover:border-mint/40 hover:text-mint"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© 2026 {profile.name}. All rights reserved.</div>
          <div>Designed & built with care.</div>
        </div>
      </div>
    </footer>
  );
}
