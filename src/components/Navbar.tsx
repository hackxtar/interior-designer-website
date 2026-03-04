import { useState, useEffect } from 'react';
import { Home, Info, Image as ImageIcon, Layers, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section for mobile bottom nav
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'Studio', href: '#about', id: 'about', icon: Info },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio', icon: ImageIcon },
    { name: 'Services', href: '#services', id: 'services', icon: Layers },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop & Top Mobile Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className={`text-2xl font-serif tracking-wide transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              SPACE <span className="italic text-brand-accent">INTERIOR</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`nav-link transition-colors hover:text-brand-accent ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="hidden md:block">
              <a href="#contact" className="btn-solid px-6 py-3 shadow-sm">Let's Talk</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Float Menu (App-like PWA concept) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 rounded-2xl px-2 py-3 flex justify-between items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`flex flex-col items-center justify-center w-16 transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-dark/50 hover:text-brand-dark'}`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
                <span className="text-[9px] font-semibold uppercase tracking-wider">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
