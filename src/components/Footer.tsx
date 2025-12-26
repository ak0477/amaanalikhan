import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/amaan-ali-khan/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ak0477",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:amaan@example.com",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="font-display text-3xl tracking-wider">
            AMAAN ALI KHAN<span className="text-primary">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary hover:text-primary hover:box-glow transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} Amaan Ali Khan. Built with passion for ML.
          </p>
        </div>
      </div>
    </footer>
  );
}
