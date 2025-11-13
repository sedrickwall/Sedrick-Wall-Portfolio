import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DomainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  delay?: number;
}

export default function DomainCard({ title, description, icon: Icon, image, delay = 0 }: DomainCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      data-testid={`card-domain-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="overflow-hidden hover-elevate border-border h-full group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-['Poppins'] text-xl font-semibold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
