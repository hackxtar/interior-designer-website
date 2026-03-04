import { motion } from 'motion/react';

const services = [
  { title: 'Residential Design', description: 'Curating intimate, luxurious living spaces that perfectly align with your lifestyle and personal aesthetic.' },
  { title: 'Commercial Spaces', description: 'Designing inspiring work environments and retail spaces that elevate brand identity and foster productivity.' },
  { title: 'Bespoke Furniture', description: 'Crafting custom, artisanal furniture pieces designed specifically for the unique dimensions and style of your space.' },
  { title: 'Turnkey Execution', description: 'Comprehensive project management from initial concept to final styling, ensuring flawless execution.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-brand-stone text-brand-accent nav-link mb-6">
            Expertise
          </div>
          <h3 className="text-5xl md:text-7xl text-brand-dark font-medium">Our Services</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-10 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center text-2xl font-serif italic mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              <h4 className="text-3xl font-serif text-brand-dark mb-4">{service.title}</h4>
              <p className="text-brand-dark/70 font-light leading-relaxed text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
