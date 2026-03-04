import { motion } from 'motion/react';

const projects = [
  { id: 1, title: 'The Malabar Residence', category: 'Residential', image: 'https://picsum.photos/seed/malabar-residence-vibrant/800/1000' },
  { id: 2, title: 'Aura Corporate HQ', category: 'Commercial', image: 'https://picsum.photos/seed/aura-hq-vibrant/800/600' },
  { id: 3, title: 'Bandra Penthouse', category: 'Residential', image: 'https://picsum.photos/seed/bandra-penthouse-vibrant/800/600' },
  { id: 4, title: 'Lumiere Boutique', category: 'Retail', image: 'https://picsum.photos/seed/lumiere-boutique-vibrant/800/1000' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-brand-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white text-brand-accent nav-link mb-6 shadow-sm">
              Selected Works
            </div>
            <h3 className="text-5xl md:text-7xl font-medium text-brand-dark">Portfolio</h3>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact" 
            className="btn-solid px-8 py-4"
          >
            Start a Project
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start px-2">
                <h4 className="text-3xl font-serif text-brand-dark group-hover:text-brand-accent transition-colors">{project.title}</h4>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark/50 mt-2 bg-white px-3 py-1 rounded-full shadow-sm">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
