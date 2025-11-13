import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface MetricProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function Metric({ end, suffix = "", prefix = "", label, duration = 2 }: MetricProps) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const step = Math.ceil(end / (duration * 60));
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-['Poppins'] text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`text-metric-value-${label.toLowerCase().replace(/\s+/g, "-")}`}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium" data-testid={`text-metric-label-${label.toLowerCase().replace(/\s+/g, "-")}`}>
        {label}
      </div>
    </motion.div>
  );
}

interface MetricsCounterProps {
  metrics: Array<{
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
  }>;
}

export default function MetricsCounter({ metrics }: MetricsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </div>
  );
}
