import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
            data-testid="modal-overlay"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-lg shadow-lg p-6 md:p-8 pointer-events-auto"
              data-testid="modal-content"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="font-['Poppins'] text-3xl font-bold text-foreground pr-8">
                  {caseStudy.title}
                </h2>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={onClose}
                  className="shrink-0"
                  data-testid="button-close-modal"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold text-primary mb-3">
                    Problem
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold text-primary mb-3">
                    Solution
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold text-primary mb-3">
                    Impact
                  </h3>
                  <p className="text-foreground leading-relaxed font-medium">
                    {caseStudy.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
