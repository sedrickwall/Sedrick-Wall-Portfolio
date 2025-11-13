import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, TrendingUp, Users, ExternalLink } from "lucide-react";
import realEstateImage from "@assets/generated_images/Real_Estate_domain_card_5e96ddf9.png";

export default function RealEstate() {
  const strategies = [
    {
      icon: Home,
      title: "Mid-Term Rentals",
      description: "Furnished properties for 30-180 day stays, targeting traveling professionals and corporate relocations. Higher returns with managed turnover.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Investments",
      description: "Traditional rental properties focused on stable, long-term tenants. Building equity while generating consistent cash flow.",
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "White-glove property management services ensuring tenant satisfaction and property maintenance excellence.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="section-real-estate-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${realEstateImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6" data-testid="text-real-estate-title">
              Real Estate Investing & <span className="text-primary">Property Management</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building wealth through strategic real estate investments with a focus on mid-term and long-term rental properties.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-glow font-semibold"
              onClick={() => window.open("https://lvenestates.com", "_blank")}
              data-testid="button-visit-lven"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit LVEN Estates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-card" data-testid="section-overview">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-6">
              About LVEN Estates
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2015, LVEN Estates specializes in acquiring, managing, and optimizing rental properties. 
              We focus on providing exceptional housing solutions while generating strong returns for our investment portfolio. 
              Our professional approach to property management ensures tenant satisfaction and property value appreciation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate border-border" data-testid={`card-strategy-${index}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <strategy.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {strategy.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8">
              Visit our website to explore all available properties, learn about our investment strategy, 
              and discover how LVEN Estates can help with your real estate needs.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-glow font-semibold"
              onClick={() => window.open("https://lvenestates.com", "_blank")}
              data-testid="button-visit-lven-footer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit LVEN Estates
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
