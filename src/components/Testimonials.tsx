import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  { name: 'Priya Sharma', role: 'Malabar Hill', content: 'Space Interior brought a level of sophistication to our home that we didn\'t know was possible. Their eye for detail and commitment to quality is unmatched.' },
  { name: 'Rahul Desai', role: 'CEO, TechVentures', content: 'The office space they designed for us completely transformed our company culture. It is elegant, highly functional, and a true reflection of our brand.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-32 bg-brand-accent text-white overflow-hidden rounded-[3rem] mx-4 sm:mx-8 my-16 shadow-2xl relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-white nav-link mb-16 backdrop-blur-md">
          Client Stories
        </div>
        
        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-3xl md:text-5xl font-serif leading-tight mb-10 italic text-balance">
                "{testimonials[current].content}"
              </p>
              <div>
                <h4 className="text-lg font-semibold uppercase tracking-widest text-sm mb-1">{testimonials[current].name}</h4>
                <span className="text-white/70 text-xs uppercase tracking-widest">{testimonials[current].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
