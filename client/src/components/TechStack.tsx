import { motion } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

interface TechStackProps {
  title: string;
  technologies: Tech[];
}

export default function TechStack({ title, technologies }: TechStackProps) {
  return (
    <div className="mb-12">
      <h3 className="font-['Poppins'] text-xl font-semibold mb-6 text-foreground">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 p-4 bg-card border border-card-border rounded-lg hover-elevate cursor-pointer"
            data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="w-12 h-12 flex items-center justify-center text-3xl">
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
