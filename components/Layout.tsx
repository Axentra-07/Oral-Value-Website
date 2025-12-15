import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Mail, Calendar, Clock } from 'lucide-react';
import { PageView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: PageView }[] = [
    { label: 'Home', value: 'HOME' },
    { label: 'Services', value: 'SERVICES' },
    { label: 'About', value: 'ABOUT' },
    { label: 'Team', value: 'TEAM' },
    { label: 'Resources', value: 'RESOURCES' },
    { label: 'FAQ', value: 'FAQ' },
    { label: 'Contact', value: 'CONTACT' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral bg-white selection:bg-primary/20 overflow-x-hidden">
      {/* Top Bar - Desktop Only - Professional Minimal */}
      <div className="hidden lg:block bg-light border-b border-gray-100 text-neutralLight py-2">
        <div className="container mx-auto px-8 flex justify-between text-xs font-medium tracking-wide">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><MapPin size={12} /> Rajarampuri, Kolhapur</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><Mail size={12} /> contact@oralvalue.com</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock size={12} /> Mon - Sat: 10:00 AM - 8:00 PM</span>
            <div className="flex gap-3 border-l border-gray-200 pl-6">
               <a href="#" className="hover:text-primary transition-colors"><Facebook size={12} /></a>
               <a href="#" className="hover:text-primary transition-colors"><Instagram size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('HOME')}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-primaryDark transition-all duration-300">
              OV
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-bold text-neutral tracking-tight leading-none group-hover:text-primary transition-colors">ORAL VALUE</span>
              <span className="text-[10px] md:text-[11px] text-neutralLight font-medium tracking-[0.2em] uppercase mt-0.5">Dental Clinic</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.filter(l => l.value !== 'CONTACT').map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm font-medium transition-all relative py-1 hover:text-primary ${
                  currentPage === link.value ? 'text-primary font-semibold' : 'text-neutralLight'
                }`}
              >
                {link.label}
                {currentPage === link.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </button>
            ))}
            
            <div className="pl-4 border-l border-gray-100 flex gap-4">
              <button 
                onClick={() => handleNavClick('CONTACT')}
                className="bg-accent hover:bg-accentHover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow hover:shadow-lg transition-all flex items-center gap-2 transform active:scale-95"
              >
                Book Appointment
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-neutral p-2 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col h-screen animate-fade-in z-50">
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`py-4 text-left text-lg font-medium border-b border-gray-50 last:border-0 ${
                    currentPage === link.value ? 'text-primary pl-2' : 'text-neutral'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('CONTACT')}
                className="mt-8 bg-primary text-white w-full py-4 rounded-xl font-bold shadow-lg flex justify-center items-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral text-gray-300 py-16 md:py-20 border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                OV
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide">ORAL VALUE</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Dental Clinic</span>
              </div>
            </div>
            <p className="text-sm leading-7 text-gray-400 max-w-xs">
              Exclusive orthodontic and pediatric dental care in Kolhapur. We prioritize patient comfort and long-lasting results.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all text-white group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all text-white group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform"/>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> About Us</button></li>
              <li><button onClick={() => onNavigate('TEAM')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Our Team</button></li>
              <li><button onClick={() => onNavigate('RESOURCES')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> News & Resources</button></li>
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Treatments</button></li>
              <li><button onClick={() => onNavigate('FAQ')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> FAQs</button></li>
              <li><button onClick={() => onNavigate('CONTACT')} className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Contact</button></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors">Metal & Ceramic Braces</button></li>
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors">Clear Aligners</button></li>
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors">Pediatric Dentistry</button></li>
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors">Preventive Care</button></li>
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-accent transition-colors">Cosmetic Solutions</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span> Visit Us
            </h3>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4 items-start group">
                <MapPin className="text-primary shrink-0 mt-1 group-hover:text-accent transition-colors" size={18} />
                <span className="leading-relaxed text-gray-400">Rajarampuri 2nd Lane,<br/>Kalashree Building,<br/>Kolhapur 416008</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="text-primary shrink-0 group-hover:text-accent transition-colors" size={18} />
                <a href="tel:+919175953070" className="hover:text-white transition-colors">+91 91759 53070</a>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail className="text-primary shrink-0 group-hover:text-accent transition-colors" size={18} />
                <a href="mailto:contact@oralvalue.com" className="hover:text-white transition-colors">contact@oralvalue.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Oral Value Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};