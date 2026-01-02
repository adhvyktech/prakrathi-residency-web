import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const VirtualTour = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="virtual-tour" className="py-24 bg-background">
            <div className="container mx-auto px-4" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-accent font-medium text-sm uppercase tracking-wider">
                        360° Experience
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 gold-underline gold-underline-center">
                        Step Inside: Experience Prakrathi Residency in 360°
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                        Before you book, take a complete digital walk-through of Prakrathi Residency.
                        Located in the prime hub near Kudlu Gate and Singasandra Metro stations, our virtual
                        tour lets you explore our variety of accommodations from the comfort of your screen.
                        Navigate through our Budget, Premium, and spacious Family rooms. Check out the details
                        that matter—from our premium 8-inch mattresses and Android Smart TVs to our clean
                        bathrooms and dedicated work desks. Get a true feel for the comfort and convenience
                        that awaits you in the heart of Bengaluru.
                    </p>

                    <motion.a
                        href="https://ai.tapit.club/PrakrathiResidency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block rounded-2xl overflow-hidden shadow-nature hover:shadow-nature-lg transition-all duration-500"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative aspect-video w-full">
                            <img
                                src="/images/virtual%20tour.png"
                                alt="Virtual Tour Thumbnail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                                    <ExternalLink className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Hover Text */}
                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <span className="inline-block bg-black/50 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium">
                                    Click to Start Tour
                                </span>
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default VirtualTour;
