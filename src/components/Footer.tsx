import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/prakrathi-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.img
              src={logo}
              alt="Prakrathi Residency"
              className="h-20 w-auto mb-6 bg-primary-foreground/95 p-3 rounded-xl"
              whileHover={{ scale: 1.02 }}
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Experience nature's tranquility at Prakrathi Residency.
              Strategically located in Bangalore's IT corridor, we offer
              premium accommodations for corporate, family, and transit guests.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/Y9Lxix3kRNWB6YAm9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                View on Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-gold">
              Reach Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917022822440"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    +91 70228 22440
                    <br />
                    +91 99009 98132
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@prakrathiresidency.in"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@prakrathiresidency.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  MMR Building, 1st Main Road,
                  <br />
                  AECS 'B' Block, Singasandra,
                  <br />
                  Bangalore - 560068
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Prakrathi Residency. All rights reserved. Built and Managed by Adhvyk Tech Solution - @SarveshAstraX</p>
            <div className="flex items-center gap-6">
              <span>Safe for Singles & Families</span>
              <span>•</span>
              <span>24/7 Front Desk</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
