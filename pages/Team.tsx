import React from 'react';
import { PageView } from '../types';
import { Linkedin, Mail } from 'lucide-react';

interface TeamProps {
    onNavigate: (page: PageView) => void;
}

const doctors = [
  {
    name: "Dr. Ajinkya Patil",
    role: "Orthodontist",
    degree: "MDS - Orthodontics",
    bio: "Specialist in braces and clear aligners with over a decade of clinical experience. Dr. Ajinkya is committed to delivering efficient, comfortable treatment plans tailored to each patient's lifestyle. He regularly attends international conferences to stay updated with the latest in orthodontic technology.",
    image: "components/Public/Images/dental-associate-job-1170x780.jpg"
  },
  {
    name: "Dr. Sneha Patil",
    role: "Pediatric Dentist",
    degree: "MDS - Pedodontics",
    bio: "Dedicated to children's dental health, focusing on preventive care and anxiety-free treatments. Dr. Sneha believes in building a positive dental attitude in children from a young age. Her gentle approach helps even the most anxious children feel at home.",
    image: "components/Public/Images/general-dentist-N2012.jpg"
  }
];

export const Team: React.FC<TeamProps> = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in font-sans pb-20">
             <div className="bg-light py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">The Experts</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-6">Meet Our Specialists</h1>
                    <p className="max-w-2xl mx-auto text-lg text-neutralLight">
                        Highly qualified professionals dedicated to your smile.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-20">
                <div className="flex flex-col gap-24">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/3 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
                                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 border-[12px] border-white/20"></div>
                                </div>
                            </div>
                            <div className="lg:w-2/3 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{doc.name}</h2>
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="text-lg font-bold text-neutral">{doc.role}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <span className="text-neutralLight">{doc.degree}</span>
                                </div>
                                <p className="text-lg text-neutralLight leading-relaxed mb-8 max-w-2xl">
                                    {doc.bio}
                                </p>
                                <div className="flex gap-4">
                                    <button onClick={() => onNavigate('CONTACT')} className="bg-neutral text-white px-8 py-3 rounded-full font-bold shadow hover:shadow-lg transition-all hover:bg-neutral/90">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quote Strip */}
            <div className="bg-primary text-white py-16 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-2xl md:text-3xl font-serif italic opacity-90 leading-relaxed max-w-4xl mx-auto">
                        "We treat every patient like family. Your comfort and long-term dental health are our only priorities."
                    </p>
                    <div className="mt-6 font-bold text-accent">– Dr. Ajinkya Patil</div>
                </div>
            </div>
        </div>
    );
};