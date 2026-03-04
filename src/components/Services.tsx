import { motion } from 'motion/react';

const services = [
  { title: 'Residential Design', description: 'Curating intimate, luxurious living spaces that perfectly align with your lifestyle and personal aesthetic.' },
  { title: 'Commercial Spaces', description: 'Designing inspiring work environments and retail spaces that elevate brand identity and foster productivity.' },
  { title: 'Bespoke Furniture', description: 'Crafting custom, artisanal furniture pieces designed specifically for the unique dimensions and style of your space.' },
  { title: 'Turnkey Execution', description: 'Comprehensive project management from initial concept to final styling, ensuring flawless execution.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-stone text-brand-accent text-xs font-semibold tracking-widest uppercase mb-6">
            Expertise
          </div>
          <h3 className="text-4xl md:text-7xl text-brand-dark font-medium tracking-tighter">Our Services</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-brand-stone/30 border border-brand-stone group hover:bg-white hover:shadow-2xl transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="w-14 h-14 rounded-2xl bg-white text-brand-accent flex items-center justify-center text-xl font-serif italic shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  0{index + 1}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl md:text-4xl font-medium text-brand-dark mb-4 tracking-tight">{service.title}</h4>
              <p className="text-brand-dark/70 font-light leading-relaxed text-base md:text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
