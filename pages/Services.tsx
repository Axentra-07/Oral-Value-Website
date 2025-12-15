import React from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface ServicesProps {
  onNavigate: (page: PageView) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pb-20 font-sans">
      {/* Header */}
      <div className="bg-neutral text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">World-Class Dental Care</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Treatments</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Oral Value believes in quality orthodontic care using best of the materials that shall increase the patient comfort without increasing the treatment duration.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-20 space-y-32">
        
        {/* Orthodontics Section */}
        <section id="orthodontics" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral mb-8 leading-tight">
              Orthodontics:<br/> <span className="text-primary">Braces & Aligners</span>
            </h2>
            <p className="text-neutralLight mb-8 leading-relaxed text-lg">
              We specialize in correcting misaligned teeth and jaws using advanced diagnostics. Whether you prefer traditional methods or modern invisible solutions, we create a customized plan for your unique facial structure.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 font-bold text-lg">1</div>
                <div>
                  <h4 className="font-bold text-neutral text-lg">Metal Braces</h4>
                  <p className="text-neutralLight mt-1">Time-tested, durable, and highly effective for complex corrections.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 font-bold text-lg">2</div>
                <div>
                  <h4 className="font-bold text-neutral text-lg">Ceramic Braces</h4>
                  <p className="text-neutralLight mt-1">Tooth-colored brackets that offer a more subtle aesthetic appearance.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 font-bold text-lg">3</div>
                <div>
                  <h4 className="font-bold text-neutral text-lg">Clear Aligners</h4>
                  <p className="text-neutralLight mt-1">Removable, virtually invisible trays. The premium choice for comfort and hygiene.</p>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('CONTACT')} className="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-full font-bold shadow hover:shadow-lg transition-all">
              Schedule Orthodontic Consult
            </button>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group">
             <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Orthodontic Treatment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-medium">State-of-the-art 3D scanning & planning for precise results.</p>
             </div>
          </div>
        </section>

        {/* Pediatric Section */}
        <section id="pediatric" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group">
             <img 
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000" 
                alt="Child Dentist" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
             />
          </div>
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">For Kids 0-16</span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral mb-8 leading-tight">Pediatric Dentistry</h2>
            <p className="text-neutralLight mb-8 leading-relaxed text-lg">
              We create a comfortable environment for children—gentle exams, preventive advice, and fluoride guidance. Our goal is to build a positive relationship with dental health from a young age, free of anxiety.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-8 rounded-r-xl mb-10">
              <h4 className="font-bold text-neutral mb-4 flex items-center gap-2 text-lg"><Info size={20} className="text-accent"/> Parent's Guide</h4>
              <ul className="space-y-3 text-neutralLight">
                <li className="flex gap-3"><Check size={18} className="mt-1 text-green-600"/> Supervise brushing until age 11.</li>
                <li className="flex gap-3"><Check size={18} className="mt-1 text-green-600"/> Limit sticky sweets and sugary drinks.</li>
                <li className="flex gap-3"><Check size={18} className="mt-1 text-green-600"/> Visit every 6 months for preventive checks.</li>
              </ul>
            </div>
            
             <button onClick={() => onNavigate('CONTACT')} className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold shadow hover:shadow-lg transition-all">
              Book a Kid's Visit
            </button>
          </div>
        </section>

        {/* General Dentistry Mini Section */}
        <section className="bg-light rounded-[3rem] p-12 md:p-20 text-center border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">General & Cosmetic Procedures</h2>
          <p className="text-neutralLight max-w-2xl mx-auto mb-10 text-lg">
            Beyond specialized care, we offer complete family dentistry services to ensure your smile remains healthy and radiant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {['Teeth Whitening', 'Veneers', 'Root Canals', 'Cavity Fillings', 'Gum Care', 'Crowns & Bridges'].map(tag => (
               <span key={tag} className="px-6 py-3 bg-white shadow-sm rounded-full text-neutral text-sm font-semibold border border-gray-100">{tag}</span>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};