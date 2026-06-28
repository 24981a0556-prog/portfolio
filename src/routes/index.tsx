import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { Impact } from "../components/portfolio/Impact";
import { About } from "../components/portfolio/About";
import { TechStack } from "../components/portfolio/TechStack";
import { Projects } from "../components/portfolio/Projects";

import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";
import bannerAsset from "../assets/banner.jpeg.asset.json";

const TITLE = "Rahul Patnaik Potnuru — Full Stack Developer";
const DESC =
  "Full Stack Developer building modern websites and digital products for businesses, startups, and creators. React, Node, TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: bannerAsset.url },
    ],
    links: [
      { rel: "preload", as: "image", href: bannerAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" theme="dark" richColors />
      <Nav />
      <main>
        <Hero />
        <Impact />
        <About />
        <TechStack />
        <Projects />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
