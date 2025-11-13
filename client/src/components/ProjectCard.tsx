import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="overflow-hidden hover-elevate border-border h-full flex flex-col">
        <div className="relative h-48 overflow-hidden group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/80 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            {liveUrl && (
              <Button
                size="sm"
                className="bg-primary text-primary-foreground"
                onClick={() => console.log(`Opening ${liveUrl}`)}
                data-testid={`button-project-live-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary"
                onClick={() => console.log(`Opening ${githubUrl}`)}
                data-testid={`button-project-github-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-['Poppins'] text-xl font-semibold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
