import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "../../data/portfolio";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255, "Email too long"),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more (10+ chars)")
    .max(1000, "Message too long"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Rahul,\n\n${data.message}\n\n— ${data.name}\n${data.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app — thanks for reaching out!");
    reset();
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[400px] opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-mint">
              Contact
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Let&rsquo;s build <span className="text-gradient">something great</span>.
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/65">
              Have a website project, freelance gig, or internship in mind? I
              reply within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="surface-card group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mint">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Email
                  </div>
                  <div className="truncate text-sm text-white/90">
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sky">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-white/45">
                    LinkedIn
                  </div>
                  <div className="text-sm text-white/90">Connect with me</div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white">
                  <Github className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-white/45">
                    GitHub
                  </div>
                  <div className="text-sm text-white/90">@24981a0556-prog</div>
                </div>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mint">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Resume
                  </div>
                  <div className="text-sm text-white/90">Download PDF</div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="surface-card space-y-5 p-6 sm:p-8"
            >
              <div>
                <label className="text-xs uppercase tracking-[0.16em] text-white/55">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  maxLength={100}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-mint/50 focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.16em] text-white/55">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  maxLength={255}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-mint/50 focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.16em] text-white/55">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell me about your project or idea…"
                  maxLength={1000}
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-mint/50 focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(110,231,183,0.5)] disabled:opacity-60"
              >
                {submitting ? "Opening…" : "Send Message"}{" "}
                <Send className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-white/40">
                This opens your email app — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
