import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-brand-dark pt-20 pb-28 md:pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-24">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-xl font-serif tracking-widest mb-6">
              SPACE <span className="italic text-brand-accent italic-serif">INTERIOR</span>
            </a>
            <p className="text-sm font-light leading-relaxed text-brand-dark/60 max-w-[240px]">
              Defining the future of luxury living through thoughtful design and meticulous craftsmanship.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-6 font-serif underline decoration-brand-accent/30 underline-offset-8">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-brand-accent transition-all duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-all duration-300">Studio</a></li>
              <li><a href="#portfolio" className="hover:text-brand-accent transition-all duration-300">Portfolio</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-all duration-300">Services</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-6 font-serif underline decoration-brand-accent/30 underline-offset-8">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-accent transition-all duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-all duration-300">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-all duration-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-all duration-300">Facebook</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-6 font-serif underline decoration-brand-accent/30 underline-offset-8">Journal</h4>
            <p className="text-sm font-light text-brand-dark/60 mb-6">Receive our latest project updates and design insights.</p>
            <form className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="hello@design.com" className="bg-transparent border-none outline-none w-full text-brand-dark px-4 text-xs font-medium placeholder-brand-dark/30" />
              <button type="submit" className="bg-brand-dark text-white hover:bg-brand-accent px-5 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">Join</button>
            </form>
          </div>
        </div>

        <div className="relative py-12 border-t border-gray-200/60 overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[9vw] md:text-[8vw] leading-none font-serif text-brand-dark/5 select-none text-center whitespace-nowrap font-bold tracking-tighter w-full"
          >
            SPACE INTERIOR
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 border-t border-gray-200/60 text-center md:text-left">
          <p className="w-full md:w-auto px-4 md:px-0">&copy; {new Date().getFullYear()} Space Interior — Made by Saif Ali Sayyad</p>
          <div className="flex space-x-8 justify-center">
            <a href="#" className="hover:text-brand-accent transition-all">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-all">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
