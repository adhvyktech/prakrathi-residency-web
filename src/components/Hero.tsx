import { motion } from "framer-motion";
import { MapPin, Phone, Star } from "lucide-react";
// import heroImage from "@/assets/hero-room.jpg"; // Keeping comment or removing if unused. simpler to just use path string in img src
import logo from "@/assets/prakrathi-logo.png";

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.querySelector("#rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner.png"
          alt="Prakrathi Residency Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-primary-foreground text-sm font-medium">30+ Premium Rooms Available</span>
          </motion.div>

          {/* Logo for mobile */}
          <motion.img
            src={logo}
            alt="Prakrathi Residency"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="h-24 w-auto mb-6 lg:hidden bg-background/90 p-3 rounded-xl"
          />

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-bold leading-tight mb-6"
          >
            Experience Nature's
            <span className="block text-gold">Tranquility</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
          >
            Welcome to Prakrathi Residency — where comfort meets convenience.
            Strategically located in Bangalore's IT corridor with premium amenities for corporate, family, and transit guests.
          </motion.p>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/bTsVESBactNt4ywT9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-3 mb-8 hover:opacity-80 transition-opacity"
          >
            <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
            <p className="text-primary-foreground/80 text-sm">
              855E, 2nd Main Road, AECS Layout, B-block, Singasandra, Bangalore- 560068
            </p>
          </motion.a>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToRooms}
              className="bg-gold hover:bg-gold-light text-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-gold hover:shadow-lg"
            >
              View Rooms
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <a
              href="tel:+917022822440"
              className="flex items-center gap-3 text-primary-foreground hover:text-gold transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Call Us</p>
                <p className="font-semibold">+91 70228 22440</p>
              </div>
            </a>
            <a
              href="tel:+919900998132"
              className="flex items-center gap-3 text-primary-foreground hover:text-gold transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Alternate</p>
                <p className="font-semibold">+91 99009 98132</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
