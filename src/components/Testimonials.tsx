import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Malabar Hill',
    content: 'Space Interior brought a level of sophistication to our home that we didn\'t know was possible. Their eye for detail and commitment to quality is unmatched. Every corner of our residence now tells a story of elegance.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Rahul Desai',
    role: 'CEO, TechVentures Mumbai',
    content: 'The office space they designed for us completely transformed our company culture. It is elegant, highly functional, and a true reflection of our brand. Our team is inspired by the vibrant energy of the new workspace.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Anika Mehta',
    role: 'Retail Director, LuxeBoutique',
    content: 'Working with Saif and his team was a journey in creative excellence. They understood our brand ethos instantly and translated it into a retail experience that has significantly boosted our customer engagement.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
              Client Stories
            </div>
            <h3 className="text-4xl md:text-6xl font-medium leading-tight tracking-tighter">
              What our <span className="italic-serif text-brand-accent italic">clients say</span> about their new spaces.
            </h3>
            <p className="text-white/50 font-light text-lg max-w-md">
              We take pride in building lasting relationships and creating environments that exceed expectations.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 text-brand-accent/20">
              <Quote size={120} weight="fill" />
            </div>

            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl w-full"
                >
                  <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 text-white/90 italic">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-accent/30">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight">{testimonials[current].name}</h4>
                      <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center md:justify-end gap-3 mt-12 md:-mt-12 relative z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'w-10 bg-brand-accent' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
