import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";

function AbstractShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[10%] w-32 h-32 md:w-48 md:h-48 border-2 border-primary/30 rotate-45 animate-float" />
      <div
        className="absolute top-40 right-[25%] w-16 h-16 md:w-24 md:h-24 bg-primary/10 rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-[5%] w-24 h-24 md:w-32 md:h-32 border border-primary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 left-[15%] w-2 h-32 md:h-48 bg-primary/20 rotate-[30deg] animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-[15%] w-20 h-20 md:w-28 md:h-28 border-4 border-primary/40 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
        <AbstractShapes />

        <div className="relative z-10 max-w-5xl">
          {/* Intro label */}
          <div
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Machine Learning Engineer
          </div>

          {/* Main headline */}
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Amaan
            <br />
            Ali <span className="text-primary text-glow">Khan</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Building intelligent systems at the intersection of data science,
            machine learning, and creative problem-solving. Currently pursuing
            MS in Applied Data Science at Syracuse University.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider grunge-border-primary hover:box-glow transition-all duration-300 group"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>
    </Layout>
  );
}
