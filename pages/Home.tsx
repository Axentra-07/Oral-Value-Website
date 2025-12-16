import React from 'react';
import { ArrowRight, ShieldCheck, Smile, Star, CheckCircle, Clock } from 'lucide-react';
import { PageView, Testimonial } from '../types';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const features = [
  {
    icon: <ShieldCheck className="text-accent w-6 h-6" />,
    title: "Expert Orthodontics",
    desc: "Specialists in modern braces & aligners."
  },
  {
    icon: <Smile className="text-accent w-6 h-6" />,
    title: "Children’s Dental Care",
    desc: "Gentle pediatric treatment & preventive plans."
  },
  {
    icon: <CheckCircle className="text-accent w-6 h-6" />,
    title: "Sterile & Safe",
    desc: "Advanced sterilization & comfort protocols."
  }
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: "Priya S.",
    rating: 5,
    text: "Dr. Ajinkya is wonderful with kids. My daughter was afraid of dentists, but she actually looks forward to her appointments here!",
    role: "Parent"
  },
  {
    id: '2',
    name: "Rahul D.",
    rating: 5,
    text: "Got my clear aligners from Oral Value. The process was smooth and the results are fantastic. Highly recommended for adults.",
    role: "Patient"
  },
  {
    id: '3',
    name: "Amit K.",
    rating: 5,
    text: "Very professional clinic. The sterilization standards are top-notch which gave me peace of mind.",
    role: "Patient"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in font-sans">
      {/* Hero Section - Classy & Minimal */}
      <section className="relative w-full h-[700px] md:h-[800px] flex items-center overflow-hidden bg-light">
        {/* Background Image with Elegant Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Dental Clinic" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent/20 md:via-white/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              <Star size={12} className="fill-current" />
              Orthodontics & Pediatric Care
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral leading-tight mb-8">
              Your Smile,<br/>
              <span className="text-primary relative inline-block">
                Our Passion.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutralLight mb-10 leading-relaxed max-w-lg font-light">
              Experience world-class dental care in Kolhapur. We combine comfort, technology, and expertise to craft the perfect smile for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('CONTACT')}
                className="bg-accent hover:bg-accentHover text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => onNavigate('SERVICES')}
                className="bg-white hover:bg-gray-50 text-neutral border border-gray-200 px-10 py-4 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group"
              >
                Explore Treatments
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-accent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip - Minimal Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-neutral mb-3">{feature.title}</h3>
                        <p className="text-neutralLight leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                 <div className="relative">
                     <div className="absolute -top-4 -left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                        alt="Clinic Waiting Area" 
                        className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" 
                     />
                     <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-xs border border-gray-100">
                         <div className="flex gap-4 items-start">
                             <div className="bg-primary/10 p-3 rounded-full text-primary">
                                 <Clock size={24} />
                             </div>
                             <div>
                                 <p className="font-bold text-neutral text-sm">Flexible Scheduling</p>
                                 <p className="text-xs text-neutralLight mt-1">Open Mon-Sat 10 AM - 8 PM</p>
                             </div>
                         </div>
                     </div>
                 </div>
              </div>
              <div className="md:w-1/2">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">About Oral Value</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-8 leading-tight">Excellence in <br/>Orthodontic Care</h2>
                  <p className="text-neutralLight text-lg leading-relaxed mb-8">
                      Oral Value believes in quality orthodontic care using best of the materials that shall increase the patient comfort without increasing the treatment duration. We focus on providing a calm, professional environment for both adults and children.
                  </p>
                  <button onClick={() => onNavigate('ABOUT')} className="text-primary font-bold border-b-2 border-primary hover:text-primaryDark pb-1 inline-flex items-center gap-2 group">
                      More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
          </div>
      </section>

      {/* Services Minimal Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">Curated Dental Services</h2>
            <p className="text-neutralLight text-lg">Specialized treatments tailored to your needs, from early preventive care to advanced aesthetic corrections.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* Service 1 */}
             <div onClick={() => onNavigate('SERVICES')} className="group cursor-pointer">
               <div className="rounded-2xl overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 transition-colors z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" 
                    alt="Braces" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
               </div>
               <h3 className="text-2xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors">Braces & Aligners</h3>
               <p className="text-neutralLight mb-4 leading-relaxed">Advanced orthodontic solutions including metal, ceramic, and invisible aligners.</p>
               <span className="text-sm font-bold text-accent uppercase tracking-wider group-hover:underline">View Details</span>
             </div>

             {/* Service 2 */}
             <div onClick={() => onNavigate('SERVICES')} className="group cursor-pointer">
               <div className="rounded-2xl overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 transition-colors z-10"></div>
                 <img 
                    src="/Images/pediatric.jpg" 
                    alt="Pediatric" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
               </div>
               <h3 className="text-2xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors">Pediatric Dentistry</h3>
               <p className="text-neutralLight mb-4 leading-relaxed">Compassionate care designed to make your child's dental visit a positive experience.</p>
               <span className="text-sm font-bold text-accent uppercase tracking-wider group-hover:underline">View Details</span>
             </div>

             {/* Service 3 */}
             <div onClick={() => onNavigate('SERVICES')} className="group cursor-pointer">
               <div className="rounded-2xl overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 transition-colors z-10"></div>
                 <img 
                    src="/Images/general.jpg" 
                    alt="General Dentistry" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
               </div>
               <h3 className="text-2xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors">Cosmetic & General</h3>
               <p className="text-neutralLight mb-4 leading-relaxed">Restore your smile's function and aesthetics with our comprehensive procedures.</p>
               <span className="text-sm font-bold text-accent uppercase tracking-wider group-hover:underline">View Details</span>
             </div>
          </div>
        </div>
      </section>

      {/* Minimal Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Stories</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="flex text-accent mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg leading-relaxed mb-6 font-light italic opacity-90">"{t.text}"</p>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm opacity-60 uppercase tracking-wider font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-8 text-center">
           <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Take the next step</span>
           <h2 className="text-4xl md:text-6xl font-bold text-neutral mb-8 max-w-4xl mx-auto">Ready to transform your smile?</h2>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => onNavigate('CONTACT')}
               className="bg-primary hover:bg-primaryDark text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
             >
               Schedule Consultation
             </button>
             <button 
               onClick={() => onNavigate('TEAM')}
               className="bg-white hover:bg-gray-50 text-neutral border border-gray-200 px-10 py-4 rounded-full font-bold text-lg shadow hover:shadow-lg transition-all"
             >
               Meet the Doctors
             </button>
           </div>
         </div>
      </section>
    </div>
  );
};