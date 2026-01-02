import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent stay! The rooms are clean and well-maintained. Staff is very helpful and the location is perfect for my office commute. Highly recommended for corporate travelers.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "As a solo female traveler, I felt completely safe here. The front desk is available 24/7 and the CCTV surveillance gave me peace of mind. Will definitely stay again!",
    date: "1 month ago",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    text: "Great value for money! The premium mattresses ensure a good night's sleep. WiFi is fast and the smart TV with DTH is a nice touch. Perfect for extended stays.",
    date: "3 weeks ago",
  },
  {
    name: "Ananya Reddy",
    rating: 4,
    text: "We stayed as a family and the family room was spacious and comfortable. Kids loved the TV and we appreciated the quick room service. Metro station nearby is very convenient.",
    date: "1 month ago",
  },
  {
    name: "Suresh Babu",
    rating: 5,
    text: "Best budget hotel near Electronic City! The non-AC rooms are well-ventilated and comfortable. Staff is courteous and the location is prime. Restaurants nearby are a plus.",
    date: "2 months ago",
  },
  {
    name: "Deepika Nair",
    rating: 5,
    text: "Impressed with the cleanliness and modern amenities. The work desk was perfect for my work-from-hotel days. Hot water available round the clock. Highly satisfied!",
    date: "3 weeks ago",
  },
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card p-6 rounded-2xl shadow-nature border border-border"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{review.name}</h4>
            <p className="text-sm text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-muted-foreground leading-relaxed text-sm">
        "{review.text}"
      </p>
    </motion.div>
  );
};

const Reviews = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
            Guest Reviews
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See what our guests have to say about their experience at Prakrathi Residency.
          </p>
        </motion.div>

        {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-primary rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 text-gold fill-gold" />
              ))}
            </div>
            <div>
              <p className="text-primary-foreground font-display text-3xl font-bold">4.5</p>
              <p className="text-primary-foreground/70 text-sm">Based on Google Reviews</p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/Y9Lxix3kRNWB6YAm9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-foreground px-6 py-3 rounded-full font-medium transition-colors"
          >
            View on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
