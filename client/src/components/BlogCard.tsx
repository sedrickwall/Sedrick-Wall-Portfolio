import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  slug: string;
  delay?: number;
}

export default function BlogCard({ title, excerpt, date, tags, image, slug, delay = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      data-testid={`card-blog-${slug}`}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="overflow-hidden hover-glow border-border h-full cursor-pointer group">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="w-4 h-4" />
              <span data-testid={`text-blog-date-${slug}`}>{date}</span>
            </div>
            <h3 className="font-['Poppins'] text-xl font-semibold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors" data-testid={`text-blog-title-${slug}`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3" data-testid={`text-blog-excerpt-${slug}`}>
              {excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
