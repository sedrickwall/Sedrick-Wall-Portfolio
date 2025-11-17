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

    // Build Mailchimp JSONP URL
    const mailchimpUrl = 'https://gmail.us2.list-manage.com/subscribe/post-json';
    const params = new URLSearchParams({
      u: '25d6342f55d2f1c613e226939',
      id: '47d35b84ff',
      f_id: '00e740e0f0',
      EMAIL: email,
      ...(name && { FNAME: name }),
    });

    // Create a unique callback name
    const callbackName = `mailchimpCallback_${Date.now()}`;
    const url = `${mailchimpUrl}?${params.toString()}&c=${callbackName}`;

    // Define the callback function
    (window as any)[callbackName] = (data: any) => {
      // Clean up
      delete (window as any)[callbackName];
      const script = document.getElementById(callbackName);
      if (script) {
        document.body.removeChild(script);
      }

      setIsSubmitting(false);

      // Check response
      if (data.result === 'success') {
        setIsSubscribed(true);
        setEmail("");
        setName("");

        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to the newsletter. Check your inbox for a confirmation email.",
        });

        setTimeout(() => setIsSubscribed(false), 5000);
      } else {
        // Handle errors (e.g., already subscribed, invalid email)
        const message = data.msg || "There was a problem subscribing. Please try again.";
        toast({
          title: "Subscription issue",
          description: message.replace(/<[^>]*>/g, ''), // Strip HTML tags from error message
          variant: "destructive",
        });
      }
    };

    // Create and append script tag for JSONP
    const script = document.createElement('script');
    script.id = callbackName;
    script.src = url;
    script.onerror = () => {
      delete (window as any)[callbackName];
      setIsSubmitting(false);
      
      toast({
        title: "Connection error",
        description: "Unable to connect to the newsletter service. Please check your internet connection.",
        variant: "destructive",
      });
    };
    
    document.body.appendChild(script);
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
      </div>
    </section>
  );
}
