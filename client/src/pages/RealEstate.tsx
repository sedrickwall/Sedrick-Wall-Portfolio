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
  //todo: remove mock functionality - properties data
  const properties = [
    {
      name: "Luxury Downtown Loft",
      type: "Mid-Term Rental",
      location: "Downtown District",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      price: "$2,500/month",
      image: realEstateImage,
    },
    {
      name: "Family Suburban Home",
      type: "Long-Term Rental",
      location: "Westside",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      price: "$3,200/month",
      image: realEstateImage,
    },
    {
      name: "Modern Studio Apartment",
      type: "Mid-Term Rental",
      location: "Arts District",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      price: "$1,800/month",
      image: realEstateImage,
    },
    {
      name: "Executive Townhouse",
      type: "Long-Term Rental",
      location: "Business District",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2200,
      price: "$2,900/month",
      image: realEstateImage,
    },
  ];

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
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 font-semibold"
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

      {/* Properties Grid */}
      <section className="py-20 bg-background" data-testid="section-properties">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Properties</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our current portfolio of rental properties available for mid-term and long-term leases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`card-property-${index}`}
              >
                <Card className="overflow-hidden hover-elevate border-border h-full">
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Poppins'] text-lg font-semibold mb-2">
                      {property.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{property.location}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Square Feet</span>
                        <span className="font-medium">{property.sqft}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xl font-bold text-primary">{property.price}</p>
                    </div>
                  </div>
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
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 font-semibold"
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
