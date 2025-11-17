import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Linkedin, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { blogPosts } from "../../../content/blog/metadata";
import "highlight.js/styles/github-dark.css";

import buildingScalableTeamsRaw from "../content/blog/building-scalable-product-teams.md?raw";
import productLedGrowthRaw from "../content/blog/product-led-growth-framework.md?raw";
import realEstateStrategiesRaw from "../content/blog/real-estate-strategies-2025.md?raw";
import powerOfCommunityRaw from "../content/blog/power-of-community.md?raw";
import faithInBusinessRaw from "../content/blog/faith-in-business.md?raw";
import balancingVenturesRaw from "../content/blog/balancing-multiple-ventures.md?raw";

const blogPostContent: Record<string, string> = {
  "building-scalable-product-teams": buildingScalableTeamsRaw,
  "product-led-growth-framework": productLedGrowthRaw,
  "real-estate-strategies-2025": realEstateStrategiesRaw,
  "power-of-community": powerOfCommunityRaw,
  "faith-in-business": faithInBusinessRaw,
  "balancing-multiple-ventures": balancingVenturesRaw,
};

function extractContent(text: string): string {
  const frontmatterMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (frontmatterMatch) {
    return frontmatterMatch[2].trim();
  }
  return text;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const postMetadata = blogPosts.find(post => post.slug === params.slug);

  useEffect(() => {
    if (!params.slug) return;

    const loadPost = async () => {
      try {
        const rawContent = blogPostContent[params.slug];
        if (rawContent) {
          setContent(extractContent(rawContent));
        } else {
          console.error(`Blog post not found: ${params.slug}`);
        }
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!postMetadata) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {postMetadata.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-post-title">
              {postMetadata.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{postMetadata.author}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span data-testid="text-post-date">{postMetadata.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {postMetadata.image && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={postMetadata.image}
                alt={postMetadata.title}
                className="w-full h-full object-cover"
                data-testid="img-post-featured"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-['Poppins'] prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-primary prose-code:bg-accent prose-code:px-1 prose-code:rounded
              prose-pre:bg-accent prose-pre:border prose-pre:border-border
              prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-foreground prose-li:my-2
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-accent prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-border prose-td:p-3"
            data-testid="content-post-markdown"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-accent/5" data-testid="section-author-bio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">SW</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-['Poppins'] text-2xl font-bold mb-3">About {postMetadata.author}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Product leader, real estate investor, and community builder. Passionate about creating systems that scale,
                building meaningful relationships, and integrating faith with business.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sedrickw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-author-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@sedrickwall.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-author-email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  );
}
