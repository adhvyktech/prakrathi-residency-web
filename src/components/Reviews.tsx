import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Reviews = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <a href="https://maps.app.goo.gl/bTsVESBactNt4ywT9" className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </a>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
            Guest Reviews
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See what our guests have to say about their experience at Prakrathi Residency.
          </p>
        </motion.div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="min-h-[400px]"
        >
          <div className="elfsight-app-1381ad7e-9e62-4303-9f1e-f243c790fa4e" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
