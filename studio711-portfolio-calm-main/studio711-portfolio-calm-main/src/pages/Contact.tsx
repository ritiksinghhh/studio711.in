import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="section-spacing pb-12 md:pb-16">
        <div className="container-studio">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            Get in Touch
          </span>
          <h1 className="mt-4 max-w-3xl">Contact</h1>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Have a project in mind? We'd love to hear from you. Send us a message 
            and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 md:pb-32">
        <div className="container-studio">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 bg-background border-border focus:border-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 bg-background border-border focus:border-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-background border-border focus:border-foreground"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-foreground resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-8 bg-foreground text-primary-foreground hover:bg-foreground/90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </h3>
                  <a
                    href="mailto:hello@studio711.in"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@studio711.in
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </h3>
                  <a
                    href="tel:+918840230877"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 8840230877
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    1st Floor, A/24 Raghunandan Ashiyana,<br />
                    BBDU, Lucknow<br />
                    Uttar Pradesh, India
                  </p>
                  <a
                    href="https://www.google.com/maps?q=26.894722,81.055833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    View on Google Maps
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer a quick chat?
                  </p>
                  <WhatsAppButton
                    phoneNumber="+918840230877"
                    variant="inline"
                    message="Hello, I would like to discuss a project with Studio 711."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+918840230877" />
    </Layout>
  );
};

export default Contact;
