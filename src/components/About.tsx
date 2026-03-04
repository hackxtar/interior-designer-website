import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-brand-stone text-brand-accent nav-link mb-6">
              About Studio
            </div>
            <h3 className="text-5xl md:text-6xl text-brand-dark mb-8 leading-tight">
              Crafting spaces that tell <span className="italic text-brand-accent">your story.</span>
            </h3>
            <p className="text-brand-dark/70 font-light leading-relaxed mb-6 text-lg">
              At Space Interior, we believe that true luxury lies in the details. Based in Mumbai, our studio specializes in creating environments that are as functional as they are breathtaking.
            </p>
            <p className="text-brand-dark/70 font-light leading-relaxed mb-10 text-lg">
              We approach every project with a fresh perspective, blending contemporary aesthetics with vibrant energy to reflect your unique lifestyle.
            </p>
            <a href="#portfolio" className="btn-outline px-8 py-4 inline-block">
              Explore Our Work
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="https://picsum.photos/seed/interior-architecture-vibrant/1200/800"
                alt="Interior Architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass-card p-8 md:p-10 max-w-[260px] hidden sm:block">
              <p className="text-6xl font-serif text-brand-accent mb-2">15+</p>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark leading-relaxed">Years of Design Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
