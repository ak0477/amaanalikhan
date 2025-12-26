import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "ragception",
    title: "RAGception",
    subtitle: "Research Paper Discovery Bot",
    description:
      "An AI-powered research assistant that helps discover and summarize academic papers using Retrieval-Augmented Generation.",
    problem:
      "Researchers spend countless hours searching through databases to find relevant papers. Traditional keyword search often misses semantically related work.",
    solution:
      "Built a RAG-based system using LangChain and vector databases to enable semantic search across research papers. The system retrieves relevant documents and generates contextual summaries.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Streamlit"],
    metrics: [
      "90% relevance accuracy in paper retrieval",
      "50% reduction in research discovery time",
      "Processes 10K+ papers in vector database",
    ],
    github: "https://github.com/ak0477",
  },
  {
    id: "formai",
    title: "FormAI",
    subtitle: "Real-Time Exercise Form Assessment",
    description:
      "A computer vision system that analyzes exercise form in real-time and provides corrective feedback to prevent injuries.",
    problem:
      "Improper exercise form leads to injuries and reduced effectiveness. Personal trainers aren't always accessible for form correction.",
    solution:
      "Developed a pose estimation model using MediaPipe and custom neural networks to detect body landmarks and assess exercise form. Real-time feedback helps users correct their posture.",
    techStack: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Flutter", "Firebase"],
    metrics: [
      "95% accuracy in pose detection",
      "Real-time processing at 30 FPS",
      "Supports 15+ exercise types",
    ],
    github: "https://github.com/ak0477",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border hover:border-primary transition-colors duration-300 group">
      {/* Header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-primary uppercase tracking-wider mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            className="p-2 border border-border group-hover:border-primary transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <p className="font-mono text-sm text-muted-foreground mt-4">
          {project.description}
        </p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-border p-6 bg-card/50 animate-fade-in">
          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display text-lg uppercase tracking-wider text-primary mb-3">
                Problem
              </h4>
              <p className="font-mono text-sm text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg uppercase tracking-wider text-primary mb-3">
                Solution
              </h4>
              <p className="font-mono text-sm text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-6">
            <h4 className="font-display text-lg uppercase tracking-wider text-primary mb-3">
              Key Metrics
            </h4>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.metrics.map((metric, index) => (
                <li
                  key={index}
                  className="font-mono text-sm text-foreground flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-primary shrink-0" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          {/* Full tech stack */}
          <div className="mb-6">
            <h4 className="font-display text-lg uppercase tracking-wider text-primary mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 font-mono text-xs uppercase tracking-wider border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={16} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  View Code
                </span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:box-glow transition-all duration-300"
              >
                <ExternalLink size={16} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="page-container pt-32">
        {/* Header */}
        <header className="mb-16">
          <h1
            className="section-title mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Projects<span className="text-primary">.</span>
          </h1>
          <div
            className="w-24 h-1 bg-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          />
          <p
            className="font-mono text-sm text-muted-foreground mt-6 max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            A selection of projects that showcase my expertise in machine learning,
            data engineering, and building end-to-end AI solutions. Click to explore
            the details.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="mt-20">
          <h2
            className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Certifications
          </h2>
          <div
            className="p-6 border border-dashed border-border text-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <p className="font-mono text-sm text-muted-foreground">
              Certifications section coming soon. Add your certifications here.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
