import { motion } from 'motion/react';

const projects = [
  { id: 1, title: 'The Malabar Residence', category: 'Residential', image: '/portfolio1.jpg' },
  { id: 2, title: 'Aura Corporate HQ', category: 'Commercial', image: '/portfolio2.jpg' },
  { id: 3, title: 'Bandra Penthouse', category: 'Residential', image: '/portfolio3.jpg' },
  { id: 4, title: 'Lumiere Boutique', category: 'Retail', image: '/portfolio4.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-brand-accent text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm border border-gray-100">
              Selected Works
            </div>
            <h3 className="text-4xl md:text-7xl font-medium text-brand-dark tracking-tighter">
              A collection of <span className="italic-serif text-brand-accent italic">extraordinary</span> spaces.
            </h3>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="group flex items-center gap-4 text-brand-dark font-bold hover:text-brand-accent transition-all"
          >
            <span className="text-sm uppercase tracking-widest">Start your project</span>
            <div className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-accent transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden mb-6 md:mb-8 aspect-[4/5] rounded-[2rem] md:rounded-[3rem] shadow-xl group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Mobile-friendly tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2 px-2">
                <h4 className="text-2xl md:text-3xl font-medium text-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                  {project.title}
                </h4>
                <div className="h-[1px] w-0 group-hover:w-full bg-brand-accent transition-all duration-700 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
