import { Layout } from "@/components/Layout";
import { Github, Linkedin, Mail } from "lucide-react";

const skills = {
  "Programming": ["Python", "SQL", "R", "JavaScript", "Dart"],
  "ML & AI": ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "Scikit-learn", "OpenCV"],
  "Data Engineering": ["Apache Spark", "Databricks", "Kafka", "Airflow", "Docker", "ETL"],
  "Visualization": ["Power BI", "Tableau", "Matplotlib", "Plotly", "Streamlit"],
  "Cloud & Tools": ["Azure", "AWS", "Git", "Jupyter", "MLflow"],
};

const education = [
  {
    degree: "MS Applied Data Science",
    school: "Syracuse University",
    location: "New York, USA",
    period: "2024 - 2025",
    details: "Focus on machine learning, deep learning, and big data analytics",
  },
  {
    degree: "BTech Computer Science & Engineering",
    school: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "2019 - 2023",
    details: "Specialization in Data Science",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="page-container pt-32">
        {/* Header */}
        <header className="mb-16">
          <h1
            className="section-title mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            About<span className="text-primary">.</span>
          </h1>
          <div
            className="w-24 h-1 bg-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          />
        </header>

        {/* Personal Summary */}
        <section
          className="mb-20 max-w-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-6">
            Who I Am
          </h2>
          <div className="body-text space-y-4 text-muted-foreground">
            <p>
              I'm a Machine Learning Engineer and Data Scientist with a passion for
              building intelligent systems that solve real-world problems. My journey
              bridges the creative world of design with the analytical realm of data
              science.
            </p>
            <p>
              Currently pursuing my Master's in Applied Data Science at Syracuse
              University, I specialize in developing end-to-end ML pipelines, from
              data engineering to model deployment. My work focuses on NLP, computer
              vision, and building scalable data solutions.
            </p>
            <p>
              When I'm not training models, you'll find me exploring the latest in
              AI research, contributing to open-source projects, and thinking about
              how technology can create positive impact.
            </p>
          </div>
        </section>

        {/* Education */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-8">
            Education
          </h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 border border-border hover:border-primary transition-colors duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-wider group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-primary uppercase tracking-wider">
                    {edu.period}
                  </span>
                </div>
                <p className="font-mono text-sm text-muted-foreground mb-2">
                  {edu.school} — {edu.location}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-8">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-display text-lg uppercase tracking-wider text-primary mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 font-mono text-xs uppercase tracking-wider border border-border hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-8">
            Let's Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/amaan-ali-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 border border-border hover:border-primary hover:text-primary hover:box-glow transition-all duration-300"
            >
              <Linkedin size={20} />
              <span className="font-mono text-sm uppercase tracking-wider">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/ak0477"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 border border-border hover:border-primary hover:text-primary hover:box-glow transition-all duration-300"
            >
              <Github size={20} />
              <span className="font-mono text-sm uppercase tracking-wider">
                GitHub
              </span>
            </a>
            <a
              href="mailto:contact@amaanalikhan.com"
              className="inline-flex items-center gap-3 px-6 py-4 border border-border hover:border-primary hover:text-primary hover:box-glow transition-all duration-300"
            >
              <Mail size={20} />
              <span className="font-mono text-sm uppercase tracking-wider">
                Email
              </span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
