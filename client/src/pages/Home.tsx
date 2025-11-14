import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DomainCard from "@/components/DomainCard";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Testimonial from "@/components/Testimonial";
import MetricsCounter from "@/components/MetricsCounter";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CaseStudyModal from "@/components/CaseStudyModal";
import { motion } from "framer-motion";
import { Briefcase, Home as HomeIcon, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

// Import generated images
import productImage from "@assets/generated_images/Product_Leadership_domain_card_b9ef109a.png";
import realEstateImage from "@assets/generated_images/Real_Estate_domain_card_5e96ddf9.png";
import communityImage from "@assets/generated_images/Community_Leadership_domain_card_e5422abb.png";
import familyImage from "@assets/generated_images/Life_and_Family_domain_card_8db1b701.png";
import project1 from "@assets/generated_images/Portfolio_project_1_758c837e.png";
import project2 from "@assets/generated_images/Portfolio_project_2_d92035d8.png";
import project3 from "@assets/generated_images/Portfolio_project_3_571f0d16.png";
import project4 from "@assets/generated_images/Portfolio_project_4_c5a75a13.png";
import headshot from "@assets/a55";

// Import testimonial avatars
import testimonialAvatar1 from "@assets/stock_images/professional_busines_9778e3fa.jpg";
import testimonialAvatar2 from "@assets/stock_images/professional_busines_97b6f644.jpg";
import testimonialAvatar3 from "@assets/stock_images/professional_busines_92a32709.jpg";

export default function Home() {
  //todo: remove mock functionality - domain data
  const domains = [
    {
      title: "Product Leadership",
      description: "Leading cross-functional teams to deliver innovative products that solve real problems and drive business growth.",
      icon: Briefcase,
      image: productImage,
    },
    {
      title: "Real Estate Investor & Property Manager",
      description: "Building wealth through strategic real estate investments and professional property management services.",
      icon: HomeIcon,
      image: realEstateImage,
    },
    {
      title: "Community Leadership",
      description: "Empowering men through the Men on Mission movement, fostering brotherhood and positive change.",
      icon: Users,
      image: communityImage,
    },
    {
      title: "Life & Family",
      description: "Balancing professional excellence with being a dedicated family person and role model.",
      icon: Heart,
      image: familyImage,
    },
  ];

  //todo: remove mock functionality - timeline data
  const timelineItems = [
    {
      year: "2019 - Present",
      title: "Senior Product Manager",
      company: "Infosys",
      description: "Leading product strategy for enterprise SaaS platform. Increased user engagement by 60% and revenue by $5M annually.",
    },
    {
      year: "2018 - 2020",
      title: "Product Manager",
      company: "Pharmaceutical company",
      description: "Managed cross-functional teams of 15+ people. Launched 3 major features that acquired 50,000+ new users.",
    },
    {
      year: "2016 - 2018",
      title: "Associate Product Manager",
      company: "Mortgage company",
      description: "First product hire. Helped achieve product-market fit and secure Series A funding of $10M.",
    },
    {
      year: "2022",
      title: "Founded LVEN Estates",
      description: "Started real estate investment company focusing on mid-term and long-term rental properties.",
    },
    {
      year: "2018",
      title: "Launched Men on Mission",
      description: "Created community organization dedicated to empowering men through brotherhood and service.",
    },
  ];

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //todo: remove mock functionality - case studies data
  const caseStudies = [
    {
      title: "Salesforce Workflow Redesign (Infosys)",
      description: "Increased qualified pipeline by $12M+ by re-architecting lead routing, dashboards, and follow-ups.",
      image: project1,
      tags: ["Salesforce", "CRM", "Process Optimization"],
      problem: "Infosys faced inefficient lead routing and delayed follow-ups that were causing significant revenue leakage. Sales teams struggled with outdated dashboards and manual processes that slowed down qualification.",
      solution: "Re-architected the entire Salesforce workflow by implementing automated lead routing logic, redesigning real-time dashboards for sales visibility, and creating smart follow-up sequences that ensured no lead fell through the cracks.",
      impact: "Increased qualified pipeline by $12M+ annually. Reduced lead response time by 60%. Improved sales team productivity by 35% through automated workflows."
    },
    {
      title: "Clinical Company Engagement Lift",
      description: "Improved feature engagement by 15% using A/B tests + analytics through Amplitude & GA.",
      image: project2,
      tags: ["Product Analytics", "A/B Testing", "User Engagement"],
      problem: "Key features were underutilized despite strong product-market fit. User engagement metrics showed high drop-off rates at critical touchpoints.",
      solution: "Implemented comprehensive A/B testing framework using Amplitude and Google Analytics. Ran 20+ experiments testing different UX flows, feature placement, and onboarding sequences. Used data-driven insights to optimize the user journey.",
      impact: "Improved feature engagement by 15% across core workflows. Reduced time-to-value by 25%. Increased user retention by 12% through optimized onboarding."
    },
    {
      title: "Pharmaceutical Company Global Rebrand",
      description: "Launched a global site for 20,000+ users, increasing adoption 40%.",
      image: project3,
      tags: ["Enterprise Launch", "Global Rollout", "Change Management"],
      problem: "The company needed to unify disparate systems across global teams while maintaining brand consistency. The existing platform had low adoption due to poor UX and fragmented workflows.",
      solution: "Led the end-to-end launch of a unified global platform serving 20,000+ users. Coordinated cross-functional teams across multiple time zones, implemented phased rollout strategy, and created comprehensive training programs.",
      impact: "Increased platform adoption by 40% within first 6 months. Achieved 95% user satisfaction score. Reduced operational costs by consolidating 5 legacy systems into one."
    },
    {
      title: "Automotive Manufacturer Agile Transformation",
      description: "Raised sprint velocity 20% and delivery consistency across distributed teams.",
      image: project4,
      tags: ["Agile", "Team Performance", "Process Improvement"],
      problem: "Distributed teams across the company struggled with inconsistent delivery timelines and low sprint velocity. Lack of standardized agile practices led to miscommunication and delays.",
      solution: "Implemented agile transformation program including standardized sprint ceremonies, improved backlog grooming, and team alignment workshops. Created shared documentation and communication protocols for distributed teams.",
      impact: "Raised sprint velocity by 20% across all teams. Improved on-time delivery from 65% to 90%. Enhanced cross-team collaboration and reduced blockers by 40%."
    },
    {
      title: "LVEN Estates Portfolio",
      description: "Designed and managed mid-term rentals, ADUs, and long-term assets across TX & MN.",
      image: project2,
      tags: ["Real Estate", "Property Management", "Investment Strategy"],
      problem: "Needed to build a sustainable real estate portfolio that balanced cash flow, appreciation, and operational efficiency. Market volatility required flexible strategies across different property types.",
      solution: "Developed diversified portfolio strategy focusing on mid-term rentals (30-180 days), ADU development for additional income streams, and traditional long-term assets. Implemented systems for property management, tenant screening, and financial tracking.",
      impact: "Built portfolio of 15+ properties across Texas and Minnesota. Achieved 95%+ occupancy rate. Generated consistent monthly cash flow while building long-term equity."
    },
    {
      title: "Men on Mission",
      description: "Built a faith-centered service group for men seeking purpose, character, and community.",
      image: project3,
      tags: ["Community Building", "Leadership", "Nonprofit"],
      problem: "Men in the community lacked structured opportunities for authentic connection, character development, and service-oriented leadership rooted in faith.",
      solution: "Founded Men on Mission as a faith-centered organization focused on brotherhood, service, and personal growth. Created regular gatherings, service projects, and accountability structures that help men become better leaders, husbands, and fathers.",
      impact: "Growing from 1 founding members to 20+ active participants. Completed 50+ community service projects. Created lasting brotherhood and positive life transformations."
    }
  ];

  //todo: remove mock functionality - tech stack data
  const frontendTech = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Vue.js", icon: "💚" },
    { name: "Figma", icon: "🎭" },
  ];

  const backendTech = [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Redis", icon: "🔴" },
  ];

  //todo: remove mock functionality - testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovators",
      content: "Sedrick's leadership transformed our product strategy. His ability to balance user needs with business goals is exceptional. He increased our conversion rate by 40% in just 6 months.",
      avatar: testimonialAvatar1,
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      company: "Digital Solutions",
      content: "Working with Sedrick has been a game-changer. His strategic thinking and collaborative approach made our product launches incredibly successful. We reduced time-to-market by 50%.",
      avatar: testimonialAvatar2,
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "Growth Partners",
      content: "Sedrick brings a unique combination of technical expertise and business acumen. His property management company runs like clockwork, and his community work is truly inspiring.",
      avatar: testimonialAvatar3,
    },
  ];

  //todo: remove mock functionality - metrics
  const metrics = [
    { end: 40, suffix: "M", prefix: "$", label: "Revenue Protected" },
    { end: 22, suffix: "%", label: "Retention Lift" },
    { end: 200, suffix: "+", label: "Hours Saved/Year" },
    { end: 3, suffix: "×", label: "NPS Increase" },
    { end: 20, suffix: "%", label: "Sprint Velocity Rise" },
    { end: 10, suffix: "+", label: "Global Countries" },
  ];

  //todo: remove mock functionality - blog posts
  const blogPosts = [
    {
      title: "Building Scalable Product Teams",
      excerpt: "After leading multiple product teams through hyper-growth, I've learned that success isn't just about hiring the right people—it's about creating systems that scale.",
      date: "November 10, 2025",
      tags: ["Product Management", "Leadership"],
      image: project1,
      slug: "building-scalable-product-teams",
    },
    {
      title: "Real Estate Investment Strategies for 2025",
      excerpt: "The real estate market is evolving. Here are the top strategies I'm using to maximize returns in today's market.",
      date: "November 5, 2025",
      tags: ["Real Estate", "Investing"],
      image: project2,
      slug: "real-estate-strategies-2025",
    },
    {
      title: "The Power of Community: Men on Mission Journey",
      excerpt: "What started as a small group of men committed to personal growth has become a movement transforming lives.",
      date: "October 28, 2025",
      tags: ["Community", "Faith"],
      image: project3,
      slug: "power-of-community",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* About Me Section */}
      <section id="about" className="py-20 bg-card" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={headshot}
                  alt="Sedrick Wall"
                  className="rounded-lg shadow-lg w-full hover-glow"
                  data-testid="img-about-headshot"
                />
                <motion.div
                  className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-primary rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-6">
                Who I <span className="text-primary">Am</span>
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  I'm <span className="font-semibold">Sedrick</span> — a Product Manager, builder, and believer dedicated to creating long-term value in every area of life.
                </p>
                <p>
                  <span className="font-semibold text-primary">My foundation is faith.</span><br />
                  <span className="font-semibold text-primary">My passion is building.</span><br />
                  <span className="font-semibold text-primary">My calling is service, leadership, and excellence.</span>
                </p>
                <p>
                  I believe in using your gifts well — to serve people, create opportunity, and leave a legacy that matters.
                </p>
                <p>
                  My work spans three worlds: <span className="font-semibold">tech</span>, where I design products that solve real problems; <span className="font-semibold">real estate</span>, where I create homes and long-term value; and <span className="font-semibold">community</span>, where I lead Men on Mission to bring service and brotherhood back to the forefront.
                </p>
                <p className="text-muted-foreground italic">
                  Underneath all of it is my commitment to excellence, integrity, and using my gifts to build the Kingdom — through career, family, and service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="py-20 bg-background" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Domains</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A multidisciplinary approach to creating impact across technology, real estate, and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <DomainCard key={domain.title} {...domain} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Case Studies Section */}
      <section id="portfolio" className="py-20 bg-card" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A collection of product launches, analytics wins, dashboards, real estate builds, and community initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                data-testid={`card-case-study-${index}`}
              >
                <Card
                  className="overflow-hidden hover-glow border-border h-full flex flex-col cursor-pointer"
                  onClick={() => {
                    setSelectedCaseStudy(study);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-['Poppins'] text-xl font-semibold mb-3 text-foreground">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedCaseStudy}
      />

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-background" data-testid="section-experience">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Career <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of key milestones and achievements across my professional career.
            </p>
          </motion.div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-accent text-accent-foreground" data-testid="section-metrics">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Impact <span className="text-primary">Stats</span>
            </h2>
          </motion.div>
          <MetricsCounter metrics={metrics} />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional products.
            </p>
          </motion.div>

          <TechStack title="Frontend Development" technologies={frontendTech} />
          <TechStack title="Backend & Infrastructure" technologies={backendTech} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              What People <span className="text-primary">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Testimonials from clients and collaborators I've worked with.
            </p>
          </motion.div>

          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-card" data-testid="section-blog-preview">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts on product management, real estate, and community building.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
