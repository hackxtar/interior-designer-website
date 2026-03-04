import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-brand-stone text-brand-accent nav-link mb-6">
              Inquiries
            </div>
            <h3 className="text-5xl md:text-7xl font-medium mb-10 leading-tight">
              Let's discuss<br/><span className="italic text-brand-accent font-serif">your project.</span>
            </h3>
            
            <div className="space-y-8 mt-16 text-lg font-light text-brand-dark/70">
              <div className="glass-card p-8">
                <p className="text-brand-dark font-semibold mb-2 uppercase tracking-widest text-xs">Studio</p>
                <p>Bldg. NO.2, West View, 12-B<br/>Swami Vivekanand Rd<br/>Mumbai, Maharashtra 400054</p>
              </div>
              <div className="glass-card p-8">
                <p className="text-brand-dark font-semibold mb-2 uppercase tracking-widest text-xs">Contact</p>
                <p>+91 98207 11323<br/>info@spaceinterior.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-brand-dark/70">Name</label>
                  <input 
                    type="text" 
                    className="bg-brand-stone/50 border-0 rounded-xl px-4 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-brand-dark/70">Email</label>
                  <input 
                    type="email" 
                    className="bg-brand-stone/50 border-0 rounded-xl px-4 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-brand-dark/70">Project Type</label>
                <input 
                  type="text" 
                  className="bg-brand-stone/50 border-0 rounded-xl px-4 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-brand-dark/70">Message</label>
                <textarea 
                  rows={4} 
                  className="bg-brand-stone/50 border-0 rounded-xl px-4 py-4 text-brand-dark w-full focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-solid px-10 py-4 w-full text-center">Submit Inquiry</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
