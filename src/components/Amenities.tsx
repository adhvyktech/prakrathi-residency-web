import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wifi,
  Tv,
  BedDouble,
  Laptop,
  Snowflake,
  Sparkles,
  Droplets,
  Zap,
  ArrowUpFromDot,
} from "lucide-react";

const amenities = [
  {
    icon: ArrowUpFromDot,
    title: "High-Speed Lift",
    description: "Easy access to all floors with modern elevator",
  },
  {
    icon: Tv,
    title: "Smart Entertainment",
    description: "Android Smart TVs with DTH connection in every room",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Seamless connectivity throughout the property",
  },
  {
    icon: BedDouble,
    title: "Premium Mattresses",
    description: "8-inch premium mattresses for restful sleep",
  },
  {
    icon: Laptop,
    title: "Work Space",
    description: "Dedicated study and working desks in rooms",
  },
  {
    icon: Snowflake,
    title: "Climate Control",
    description: "AC and Non-AC room options available",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Impeccable cleanliness with Quick Fresh-up facility",
  },
  {
    icon: Droplets,
    title: "24/7 Hot Water",
    description: "Round-the-clock hot water availability",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply for your convenience",
  },
];

const AmenityCard = ({ amenity, index }: { amenity: typeof amenities[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-nature"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
        <amenity.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
        {amenity.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {amenity.description}
      </p>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const Amenities = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="amenities" className="py-24 bg-background leaf-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Hotel Amenities
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
            Comfort & Convenience
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Enjoy world-class facilities and services designed to make your stay 
            comfortable, productive, and memorable.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
