import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/experience", label: "EXPERIENCE" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl md:text-3xl tracking-wider hover:text-primary transition-colors"
        >
          AAK<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/Amaan_Resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider grunge-border-primary hover:box-glow transition-all duration-300"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-border hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-sm uppercase tracking-wider py-2 border-b border-border transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Amaan_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider mt-2"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
