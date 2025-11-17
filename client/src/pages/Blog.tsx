import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import NewsletterSignup from "@/components/NewsletterSignup";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogPosts, categories as blogCategories } from "../../../content/blog/metadata";

export default function Blog() {
  const allPosts = blogPosts;
  const categories = blogCategories.filter(cat => 
    cat === "All" || allPosts.some(post => post.tags.includes(cat))
  );

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

      <NewsletterSignup />

      <Footer />
    </div>
  );
}
