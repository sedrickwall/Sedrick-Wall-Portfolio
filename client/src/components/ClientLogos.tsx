import { motion } from "framer-motion";

interface ClientLogosProps {
  logos: Array<{ name: string; logo: string }>;
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {logos.map((client, index) => (
        <motion.div
          key={client.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center p-6 bg-card border border-card-border rounded-lg hover-elevate cursor-pointer grayscale hover:grayscale-0 transition-all"
          data-testid={`logo-${client.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <div className="text-4xl">{client.logo}</div>
        </motion.div>
      ))}
    </div>
  );
}
