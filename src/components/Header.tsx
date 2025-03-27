
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com", hoverColor: "hover:text-[#333]" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com", hoverColor: "hover:text-[#0A66C2]" },
    { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:contact@example.com", hoverColor: "hover:text-primary" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold text-primary transition-colors hover:opacity-90"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social links */}
          <div className="flex items-center space-x-4 mr-4">
            {socialLinks.map((link, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all hover:bg-secondary ${link.hoverColor}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2">
                  <span className="text-sm">{link.label}</span>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-gray-700 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <ul className="py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* Social links for mobile */}
            <li className="py-2">
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all hover:bg-secondary ${link.hoverColor}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
