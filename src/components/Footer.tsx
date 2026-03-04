export default function Footer() {
  return (
    <footer className="bg-brand-stone text-brand-dark pt-20 pb-28 md:pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div>
            <h4 className="text-brand-dark font-semibold text-sm uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-3 font-medium text-brand-dark/70">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-dark font-semibold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 font-medium text-brand-dark/70">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">Studio</a></li>
              <li><a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-dark font-semibold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <form className="flex bg-white rounded-full p-1 shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none w-full text-brand-dark px-4 font-medium placeholder-brand-dark/40" />
              <button type="submit" className="btn-solid px-6 py-3">Join</button>
            </form>
          </div>
        </div>

        <div className="text-center overflow-hidden mb-8">
          <h2 className="text-[12vw] leading-none font-serif text-brand-dark/10 select-none whitespace-nowrap font-bold">SPACE INTERIOR</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-dark/10 text-xs font-semibold uppercase tracking-widest text-brand-dark/50">
          <p>&copy; {new Date().getFullYear()} Space Interior. Made by Saif Ali Sayyad</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
