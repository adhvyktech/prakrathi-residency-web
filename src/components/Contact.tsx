import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    roomType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: "Inquiry Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            checkIn: "",
            roomType: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast({
          title: "Something went wrong.",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 70228 22440",
      href: "tel:+917022822440",
      secondary: "+91 99009 98132",
      secondaryHref: "tel:+919900998132",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@prakrathiresidency.in",
      href: "mailto:info@prakrathiresidency.in",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "855E, 2nd Main Road, AECS Layout, B-block, Singasandra, Bangalore- 560068",
      href: "https://maps.app.goo.gl/bTsVESBactNt4ywT9",
    },
    {
      icon: Clock,
      label: "Front Desk",
      value: "24/7 Available",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have questions or ready to book? Reach out to us and our friendly
            team will assist you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-nature border border-border"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Book Your Stay
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground">
                  Your inquiry has been received. We'll contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="1304ee25-c46b-4dc9-a093-6d30b599a331" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Room Type
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    >
                      <option value="">Select room type</option>
                      <option value="deluxe-non-ac">Deluxe Non-AC</option>
                      <option value="deluxe-ac">Deluxe AC</option>
                      <option value="family">Family Room</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-forest-light text-primary-foreground py-4 rounded-xl font-semibold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card p-5 rounded-xl border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-foreground hover:text-accent transition-colors block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground text-sm">{info.value}</p>
                      )}
                      {info.secondary && (
                        <a
                          href={info.secondaryHref}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.secondary}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-nature border border-border">
              <iframe
                src="https://maps.google.com/maps?q=Prakrathi%20Residency%2C%20Singasandra%2C%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prakrathi Residency Location"
              />
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+917022822440"
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-forest-light text-primary-foreground py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/bTsVESBactNt4ywT9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-gold-light text-accent-foreground py-4 rounded-xl font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
