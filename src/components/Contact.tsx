import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-stone text-brand-accent text-xs font-semibold tracking-widest uppercase mb-6">
                Inquiries
              </div>
              <h3 className="text-4xl md:text-7xl font-medium leading-[1.1] tracking-tighter">
                Let's discuss<br />
                <span className="italic-serif text-brand-accent italic">your vision.</span>
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-5 p-6 rounded-[2rem] bg-brand-stone/30 border border-brand-stone transition-all"
              >
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-accent">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 mb-1">Studio</p>
                  <p className="text-sm md:text-base font-light leading-relaxed">
                    Bldg. NO.2, West View, 12-B<br />Mumbai, Maharashtra 400054
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-5 p-6 rounded-[2rem] bg-brand-stone/30 border border-brand-stone transition-all"
              >
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-accent">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 mb-1">Call Us</p>
                  <p className="text-sm md:text-base font-medium">+91 98207 11323</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-5 p-6 rounded-[2rem] bg-brand-stone/30 border border-brand-stone transition-all"
              >
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-accent">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 mb-1">Email</p>
                  <p className="text-sm md:text-base font-medium">info@spaceinterior.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-stone/30 p-8 md:p-12 rounded-[3rem] border border-brand-stone"
          >
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 px-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white border-none rounded-2xl px-6 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none shadow-sm transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 px-1">Email</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="bg-white border-none rounded-2xl px-6 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none shadow-sm transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 px-1">Subject</label>
                <select className="bg-white border-none rounded-2xl px-6 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none shadow-sm transition-all text-sm">
                  <option>Residential Project</option>
                  <option>Commercial Space</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 px-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-white border-none rounded-2xl px-6 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none shadow-sm transition-all resize-none text-sm"
                ></textarea>
              </div>
              <button type="submit" className="group flex items-center justify-center gap-3 bg-brand-dark text-white hover:bg-brand-accent px-10 py-5 rounded-2xl w-full transition-all text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-brand-accent/30">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
