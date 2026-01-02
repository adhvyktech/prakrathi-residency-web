import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Tv, Snowflake, Fan, Users, Bed, Phone } from "lucide-react";
import roomDeluxeNonAC from "@/assets/room-deluxe-nonac.jpg";
import roomDeluxeAC from "@/assets/room-deluxe-ac.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Deluxe Non-AC",
    description: "Comfortable and affordable rooms with natural ventilation, perfect for budget-conscious travelers.",
    image: roomDeluxeNonAC,
    features: [
      { icon: Fan, label: "Fan Cooled" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Bed, label: "Premium Mattress" },
    ],
    price: "Budget Friendly",
    category: "budget",
  },
  {
    name: "Deluxe AC",
    description: "Climate-controlled comfort with modern amenities for a refreshing stay.",
    image: roomDeluxeAC,
    features: [
      { icon: Snowflake, label: "Air Conditioned" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Bed, label: "Premium Mattress" },
    ],
    price: "Mid-Segment",
    category: "premium",
  },
  {
    name: "Family Room",
    description: "Spacious accommodations designed for families with extra beds and ample living space.",
    image: roomFamily,
    features: [
      { icon: Users, label: "Family Sized" },
      { icon: Snowflake, label: "Air Conditioned" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Tv, label: "Smart TV" },
    ],
    price: "Premium",
    category: "premium",
  },
];

const RoomCard = ({ room, index }: { room: typeof rooms[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-nature hover:shadow-nature-lg transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold ${
          room.category === "premium" 
            ? "bg-accent text-accent-foreground" 
            : "bg-secondary text-secondary-foreground"
        }`}>
          {room.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          {room.name}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {room.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {room.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <feature.icon className="w-4 h-4 text-accent" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+917022822440"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-forest-light text-primary-foreground py-3 rounded-xl font-medium transition-colors"
        >
          <Phone className="w-4 h-4" />
          Book This Room
        </a>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="rooms" className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Accommodations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
            Our Room Collection
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose from our carefully curated selection of rooms, each designed 
            to provide comfort and convenience for every type of guest.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.name} room={room} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            All rooms include complimentary breakfast, 24/7 hot water, and daily housekeeping.
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-accent font-semibold">30 well-maintained rooms</span> catering to all segments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
