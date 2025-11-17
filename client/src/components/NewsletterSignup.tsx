import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      setName("");

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to the newsletter. Check your inbox for a confirmation email.",
      });

      setTimeout(() => setIsSubscribed(false), 3000);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background" data-testid="section-newsletter">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 border-border hover-glow">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold mb-4" data-testid="text-newsletter-title">
                Stay Updated
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get insights on product leadership, real estate investing, and community building delivered to your inbox.
                No spam, unsubscribe anytime.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    data-testid="input-newsletter-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    data-testid="input-newsletter-email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-newsletter-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe to Newsletter
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
                data-testid="content-newsletter-success"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-['Poppins'] text-2xl font-bold mb-2">You're all set!</h3>
                <p className="text-muted-foreground">
                  Check your inbox for a confirmation email.
                </p>
              </motion.div>
            )}

            <p className="text-center text-sm text-muted-foreground mt-6">
              By subscribing, you agree to receive emails from Sedrick Wall. You can unsubscribe at any time.
            </p>
          </Card>
        </motion.div>

        {/* Mailchimp Integration Instructions */}
        <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-border">
          <h3 className="font-['Poppins'] font-semibold mb-3 text-foreground">
            📬 To Connect Real Mailchimp:
          </h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>
              Go to Mailchimp → Audience → Signup forms → Embedded forms
            </li>
            <li>
              Copy the form action URL from the generated code
            </li>
            <li>
              Replace the <code className="bg-accent px-1 rounded text-primary">handleSubmit</code> function to POST to that URL
            </li>
            <li>
              Or use the Mailchimp Marketing API with your API key (see{" "}
              <a
                href="https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                documentation
              </a>
              )
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Current state:</strong> Form validates and shows success message, but doesn't actually submit to Mailchimp yet.
          </p>
        </div>
      </div>
    </section>
  );
}
