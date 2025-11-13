import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, ExternalLink, Calendar } from "lucide-react";
import communityImage from "@assets/generated_images/Community_Leadership_domain_card_e5422abb.png";

export default function Community() {
  //todo: remove mock functionality - events data
  const upcomingEvents = [
    {
      title: "Monthly Brotherhood Gathering",
      date: "November 20, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Center, Downtown",
      description: "Join us for our monthly gathering focused on personal growth, accountability, and fellowship.",
    },
    {
      title: "Community Service Day",
      date: "December 5, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Local Food Bank",
      description: "Give back to our community by volunteering at the local food bank. Lunch provided.",
    },
    {
      title: "Leadership Workshop",
      date: "December 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Business District Conference Room",
      description: "Interactive workshop on developing leadership skills in business and personal life.",
    },
  ];

  const missionPoints = [
    {
      icon: Heart,
      title: "Faith & Purpose",
      description: "Grounding our actions in faith and helping men discover their purpose in life.",
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Building authentic relationships through accountability, support, and genuine connection.",
    },
    {
      icon: Target,
      title: "Service & Impact",
      description: "Making a positive difference in our community through service and leadership.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="section-community-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${communityImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6" data-testid="text-community-title">
              Men on Mission
            </h1>
            <p className="text-2xl text-primary font-semibold mb-4">
              Brotherhood in Action
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A community dedicated to empowering men to live with purpose, build authentic relationships, 
              and make a positive impact in their families and communities.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-glow font-semibold"
              onClick={() => window.open("https://menonmission.org", "_blank")}
              data-testid="button-visit-mom"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit MenOnMission.org
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card" data-testid="section-mission">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Men on Mission was founded in 2014 with a simple but powerful vision: to create a space where 
              men can grow together, challenge each other, and become better versions of themselves. We believe 
              that when men are grounded in faith, surrounded by authentic brotherhood, and committed to service, 
              they can transform not only their own lives but also their families and communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate border-border text-center" data-testid={`card-mission-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-4">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-card" data-testid="section-events">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join us for upcoming gatherings, workshops, and service opportunities.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`event-${index}`}
              >
                <Card className="p-6 hover-elevate border-border">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Poppins'] text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span>📅 {event.date}</span>
                        <span>🕐 {event.time}</span>
                        <span>📍 {event.location}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
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
              Join the Movement
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8">
              Whether you're looking for accountability, brotherhood, or a place to serve, 
              Men on Mission welcomes you. Visit our website to learn more and connect with us.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-glow font-semibold"
              onClick={() => window.open("https://menonmission.org", "_blank")}
              data-testid="button-visit-mom-footer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit MenOnMission.org
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
