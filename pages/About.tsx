import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Target, Users } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
];

export const About: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="animate-fade-in font-sans pb-20">
      {/* Header */}
      <div className="bg-primary pt-24 pb-32 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">About Oral Value</h1>
           <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
           <p className="max-w-2xl mx-auto text-xl opacity-90 leading-relaxed font-light">
             Pioneering comfort-first dental care in Kolhapur for over a decade.
           </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 border border-gray-100">
           <div>
             <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
               <Target size={24} />
             </div>
             <h2 className="text-2xl font-bold text-neutral mb-4">Our Mission</h2>
             <p className="text-neutralLight leading-relaxed">
               Oral Value believes in quality orthodontic care using best of the materials that shall increase the patient comfort without increasing the treatment duration. We strive to make expert dental care accessible, transparent, and anxiety-free.
             </p>
           </div>
           <div>
             <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
               <Award size={24} />
             </div>
             <h2 className="text-2xl font-bold text-neutral mb-4">Our Values</h2>
             <ul className="space-y-4 text-neutralLight">
               <li className="flex gap-3">
                 <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                 <span className="flex-1"><strong>Patient Comfort:</strong> We prioritize gentle techniques and a calming environment.</span>
               </li>
               <li className="flex gap-3">
                 <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                 <span className="flex-1"><strong>Clinical Excellence:</strong> Continuous learning and upgrading to modern standards.</span>
               </li>
               <li className="flex gap-3">
                 <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                 <span className="flex-1"><strong>Transparency:</strong> Clear communication about treatments and expected outcomes.</span>
               </li>
             </ul>
           </div>
        </div>
      </section>

      {/* Story / Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2">
             <img 
                src="/images/doctor_with_patient.jpg" 
                alt="Doctor with patient" 
                className="rounded-2xl shadow-lg w-full" 
             />
           </div>
           <div className="md:w-1/2">
             <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Our Journey</span>
             <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">Serving Kolhapur Since 2010</h2>
             <p className="text-neutralLight text-lg leading-relaxed mb-8">
               Started as a small consulting practice, Oral Value has grown into a premier multi-specialty center in Rajarampuri. Our facility is equipped with state-of-the-art sterilization units and digital imaging technology to ensure the highest safety standards.
             </p>
             
             <div className="grid grid-cols-2 gap-8">
               <div>
                 <span className="text-4xl font-bold text-primary block mb-1">15+</span>
                 <span className="text-sm text-neutralLight uppercase tracking-wider">Years Experience</span>
               </div>
               <div>
                 <span className="text-4xl font-bold text-primary block mb-1">5000+</span>
                 <span className="text-sm text-neutralLight uppercase tracking-wider">Happy Smiles</span>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Clinic Tour */}
      <section className="bg-light py-24">
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
           <h2 className="text-3xl font-bold text-neutral mb-4">Clinic Tour</h2>
           <p className="text-neutralLight max-w-2xl mx-auto">
             A look inside our modern, sterile facilities in Rajarampuri. Designed for efficiency and comfort.
           </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <div 
              key={idx} 
              className="group aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all relative"
              onClick={() => openLightbox(idx)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 text-neutral px-4 py-2 rounded-full text-sm font-bold">View</span>
              </div>
              <img src={src} alt={`Clinic tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
            <X size={32} />
          </button>
          
          <button onClick={prevImage} className="absolute left-4 md:left-8 text-white p-4 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={40} />
          </button>
          
          <div className="max-w-6xl max-h-[85vh] rounded-lg overflow-hidden shadow-2xl">
            <img src={galleryImages[lightboxIndex]} alt="Gallery" className="max-w-full max-h-[85vh] object-contain" />
          </div>

          <button onClick={nextImage} className="absolute right-4 md:right-8 text-white p-4 hover:bg-white/10 rounded-full transition-colors">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};