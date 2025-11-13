import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import project1 from "@assets/generated_images/Portfolio_project_1_758c837e.png";
import project2 from "@assets/generated_images/Portfolio_project_2_d92035d8.png";
import project3 from "@assets/generated_images/Portfolio_project_3_571f0d16.png";
import project4 from "@assets/generated_images/Portfolio_project_4_c5a75a13.png";

export default function Blog() {
  //todo: remove mock functionality - blog posts data
  const allPosts = [
    {
      title: "Building Scalable Product Teams",
      excerpt: "After leading multiple product teams through hyper-growth, I've learned that success isn't just about hiring the right people—it's about creating systems that scale. Here's what I've learned.",
      date: "November 10, 2025",
      tags: ["Product Management", "Leadership", "Team Building"],
      image: project1,
      slug: "building-scalable-product-teams",
    },
    {
      title: "Real Estate Investment Strategies for 2025",
      excerpt: "The real estate market is evolving. Here are the top strategies I'm using to maximize returns in today's market, from mid-term rentals to long-term holds.",
      date: "November 5, 2025",
      tags: ["Real Estate", "Investing", "Strategy"],
      image: project2,
      slug: "real-estate-strategies-2025",
    },
    {
      title: "The Power of Community: Men on Mission Journey",
      excerpt: "What started as a small group of men committed to personal growth has become a movement transforming lives. Here's the story of Men on Mission.",
      date: "October 28, 2025",
      tags: ["Community", "Faith", "Leadership"],
      image: project3,
      slug: "power-of-community",
    },
    {
      title: "Product-Led Growth: A Framework",
      excerpt: "Product-led growth isn't just a buzzword—it's a fundamental shift in how we think about acquisition, activation, and retention. Here's my framework.",
      date: "October 20, 2025",
      tags: ["Product Management", "Growth", "Strategy"],
      image: project4,
      slug: "product-led-growth-framework",
    },
    {
      title: "Balancing Multiple Ventures",
      excerpt: "How do you manage a product career, real estate investments, and community leadership simultaneously? Here are my strategies for balance.",
      date: "October 15, 2025",
      tags: ["Productivity", "Leadership", "Life Balance"],
      image: project1,
      slug: "balancing-multiple-ventures",
    },
    {
      title: "Faith in Business: Lessons Learned",
      excerpt: "Integrating faith into business decisions has been transformative. Here are the principles that guide my approach to leadership and entrepreneurship.",
      date: "October 8, 2025",
      tags: ["Faith", "Business", "Leadership"],
      image: project2,
      slug: "faith-in-business",
    },
  ];

  const categories = [
    "All",
    "Product Management",
    "Real Estate",
    "Faith",
    "Community",
    "Leadership",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.tags.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 to-background" data-testid="section-blog-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6" data-testid="text-blog-title">
              Insights & <span className="text-primary">Perspectives</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Thoughts on product management, real estate investing, community building, and the intersection of faith and business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover-elevate"
                }
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background" data-testid="section-blog-posts">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} {...post} delay={index * 0.05} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No posts found in this category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
