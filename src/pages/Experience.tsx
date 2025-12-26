import { Layout } from "@/components/Layout";
import { MapPin, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "The Fishin' Company",
    role: "Data Science Intern",
    location: "Boston, MA",
    period: "Jan 2025 - Present",
    type: "Internship",
    achievements: [
      "Designed and deployed ETL pipelines using Azure Synapse Analytics and Databricks, reducing data processing time by 40%",
      "Built ML-powered demand forecasting models, improving supply chain efficiency by 15%",
      "Developed interactive Power BI dashboards for real-time KPI monitoring across 50+ stakeholders",
      "Implemented automated data quality checks reducing data inconsistencies by 60%",
    ],
  },
  {
    company: "Zero Meat",
    role: "Data Analyst Intern",
    location: "Mumbai, India",
    period: "Jan 2023 - Jul 2023",
    type: "Internship",
    achievements: [
      "Analyzed 100K+ customer transactions to identify purchase patterns and segment customers",
      "Built predictive models for customer churn with 85% accuracy using Python and Scikit-learn",
      "Created automated reporting pipelines saving 10+ hours per week in manual work",
      "Collaborated with marketing team to optimize campaign targeting, improving conversion by 20%",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="page-container pt-32">
        {/* Header */}
        <header className="mb-16">
          <h1
            className="section-title mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Experience<span className="text-primary">.</span>
          </h1>
          <div
            className="w-24 h-1 bg-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          />
          <p
            className="font-mono text-sm text-muted-foreground mt-6 max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Professional experience in data science and analytics, building
            data-driven solutions across industries.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary -translate-x-[7px] md:-translate-x-1/2 box-glow" />

                {/* Date column (alternates sides on desktop) */}
                <div
                  className={`hidden md:flex items-start ${
                    index % 2 === 0 ? "justify-end pr-12" : "order-2 pl-12"
                  }`}
                >
                  <div className="text-right">
                    <span className="font-display text-xl uppercase tracking-wider text-primary">
                      {exp.period}
                    </span>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {exp.type}
                    </p>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"
                  }`}
                >
                  <div className="p-6 border border-border hover:border-primary transition-colors duration-300 group bg-card">
                    {/* Mobile date */}
                    <div className="md:hidden mb-4">
                      <span className="font-display text-lg uppercase tracking-wider text-primary">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-display text-lg uppercase tracking-wider text-muted-foreground mt-1">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-4 mt-3 mb-6">
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      <span className="hidden md:inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="font-mono text-sm text-muted-foreground flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-20 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <a
            href="/Amaan_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider grunge-border-primary hover:box-glow transition-all duration-300"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </Layout>
  );
}
