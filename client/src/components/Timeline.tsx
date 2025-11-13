import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`relative mb-12 ${
            index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
          }`}
          data-testid={`timeline-item-${index}`}
        >
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-6 border-4 border-background z-10" />

          <div className="ml-8 md:ml-0 md:w-5/12">
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate">
              <span className="text-primary font-semibold text-sm" data-testid={`text-timeline-year-${index}`}>
                {item.year}
              </span>
              <h3 className="font-['Poppins'] text-xl font-semibold mt-2 mb-1" data-testid={`text-timeline-title-${index}`}>
                {item.title}
              </h3>
              {item.company && (
                <p className="text-muted-foreground font-medium mb-2" data-testid={`text-timeline-company-${index}`}>
                  {item.company}
                </p>
              )}
              <p className="text-muted-foreground text-sm" data-testid={`text-timeline-description-${index}`}>
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
