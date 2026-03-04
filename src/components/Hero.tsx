import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-brand-dark">
      {/* Widescreen Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y }} className="w-full h-full origin-top">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/seed/luxury-interior-vibrant/1920/1080"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>
      
      {/* Floating Text Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12 md:pb-0 pt-32 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white/95 backdrop-blur-2xl p-8 sm:p-10 md:p-14 w-full md:w-[60%] lg:w-[50%] rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="nav-link text-brand-accent mb-4">Mumbai, India</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-brand-dark mb-6 font-medium tracking-tight">
              Design that <br />
              <span className="italic text-brand-accent">Inspires.</span>
            </h1>
            <p className="text-brand-dark/70 text-base md:text-lg font-light leading-relaxed mb-8">
              Transforming spaces into timeless experiences. Mumbai's premier destination for bold, contemporary luxury interiors.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#portfolio" className="btn-solid px-8 py-4 w-full sm:w-auto text-center">
                View Projects
              </a>
              <a href="#contact" className="btn-outline px-8 py-4 w-full sm:w-auto text-center">
                Book Consultation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
