import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", path: "/", onClick: () => scrollToSection("hero") },
    { label: "Experience", path: "/", onClick: () => scrollToSection("experience") },
    { label: "Portfolio", path: "/", onClick: () => scrollToSection("portfolio") },
    { label: "Real Estate", path: "/real-estate" },
    { label: "Community", path: "/community" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/", onClick: () => scrollToSection("contact") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
        data-testid="navigation-main"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" data-testid="link-home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-['Poppins'] text-2xl font-bold"
              >
                <span className="text-foreground">Sedrick</span>{" "}
                <span className="text-primary">Wall</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-foreground hover:text-primary transition-colors font-medium relative group"
                      data-testid={`button-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </button>
                  ) : (
                    <Link href={link.path} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <span className={`text-foreground hover:text-primary transition-colors font-medium relative group ${location === link.path ? "text-primary" : ""}`}>
                        {link.label}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${location === link.path ? "w-full" : "w-0 group-hover:w-full"}`} />
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-background z-40 md:hidden pt-20"
            data-testid="menu-mobile"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-2xl font-['Poppins'] font-semibold text-foreground hover:text-primary transition-colors"
                      data-testid={`button-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link href={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-2xl font-['Poppins'] font-semibold text-foreground hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
