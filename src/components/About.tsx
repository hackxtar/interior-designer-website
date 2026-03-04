import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 z-10 relative py-12 md:py-0 px-6 md:px-0"
          >
            {/* Mobile Highlight Patch */}
            <div className="absolute inset-0 bg-brand-stone/40 md:hidden rounded-[2.5rem] -z-10 blur-xl"></div>

            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-stone text-brand-accent text-xs font-semibold tracking-widest uppercase mb-6">
              About Studio
            </div>
            <h3 className="text-4xl md:text-6xl text-brand-dark mb-6 md:mb-8 leading-[1.1] font-medium tracking-tight">
              Crafting spaces that tell <span className="italic text-brand-accent italic-serif">your story.</span>
            </h3>
            <p className="text-brand-dark/70 font-light leading-relaxed mb-6 text-base md:text-lg">
              At Space Interior, we believe that true luxury lies in the details. Based in Mumbai, our studio specializes in creating environments that are as functional as they are breathtaking.
            </p>
            <p className="text-brand-dark/70 font-light leading-relaxed mb-10 text-base md:text-lg">
              We approach every project with a fresh perspective, blending contemporary aesthetics with vibrant energy to reflect your unique lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-solid px-8 py-4 text-sm font-bold tracking-wide rounded-sm">
                Explore Our Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Interior Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Experience Card - Now responsive and visible on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 max-w-[180px] md:max-w-[240px]"
            >
              <p className="text-4xl md:text-6xl font-serif text-brand-accent mb-1 md:mb-2">15+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark leading-tight">Years of Design<br />Excellence</p>
            </motion.div>

            {/* Subtle decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
