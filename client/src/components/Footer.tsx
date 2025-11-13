import { Link } from "wouter";
import { Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-['Poppins'] text-2xl font-bold mb-4">
              <span className="text-accent-foreground">Sedrick</span>{" "}
              <span className="text-primary">Wall</span>
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Product Manager, Investor, and Community Leader dedicated to creating impactful solutions.
            </p>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/">
                <span className="text-accent-foreground/80 hover:text-primary transition-colors text-sm block" data-testid="link-footer-home">
                  Home
                </span>
              </Link>
              <Link href="/real-estate">
                <span className="text-accent-foreground/80 hover:text-primary transition-colors text-sm block" data-testid="link-footer-real-estate">
                  Real Estate
                </span>
              </Link>
              <Link href="/community">
                <span className="text-accent-foreground/80 hover:text-primary transition-colors text-sm block" data-testid="link-footer-community">
                  Community
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-accent-foreground/80 hover:text-primary transition-colors text-sm block" data-testid="link-footer-blog">
                  Blog
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Domains</h4>
            <ul className="space-y-2 text-accent-foreground/80 text-sm">
              <li>Product Leadership</li>
              <li>Real Estate Investing</li>
              <li>Community Development</li>
              <li>Property Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/sedrickwall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sedrick@example.com"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={() => console.log("Download resume")}
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-footer-resume"
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/80">
          <p>© {currentYear} Sedrick Wall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
