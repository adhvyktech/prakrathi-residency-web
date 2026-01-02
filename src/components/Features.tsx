import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Train,
  Building2,
  Utensils,
  Shield,
  Heart,
  Users,
  Hotel,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Strategically located in AECS Layout, near Kudlu Signal",
  },
  {
    icon: Train,
    title: "Metro Connectivity",
    description: "Walkable distance to Kudlu Gate & Singasandra Metro Stations",
  },
  {
    icon: Building2,
    title: "IT Hub Access",
    description: "Close to HSR Layout, Bommanahalli, and Electronic City",
  },
  {
    icon: Utensils,
    title: "Dining Convenience",
    description: "Veg & Non-Veg restaurants within 50 meters",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "24/7 CCTV, Fire Safety standards, and Front Desk support",
  },
  {
    icon: Heart,
    title: "Safe for All",
    description: "Specifically safe for single ladies and families",
  },
  {
    icon: Users,
    title: "Versatile Booking",
    description: "Ideal for corporate, groups, families, and transit guests",
  },
  {
    icon: Hotel,
    title: "30+ Rooms",
    description: "Well-maintained rooms for Budget, Premium & Mid-segment",
  },
];

const Features = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Key Features & Highlights
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Discover what makes Prakrathi Residency the preferred choice 
            for travelers seeking comfort, safety, and convenience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group text-center p-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
