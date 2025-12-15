import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Phone } from 'lucide-react';
import { FAQItem } from '../types';

const generalFaqs: FAQItem[] = [
  {
    question: "Do you accept insurance?",
    answer: "We recommend contacting our front desk at +91 91759 53070 to discuss payment options and insurance compatibility as policies vary."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book by calling us directly, or using the contact form on our website. We try to accommodate your preferred time slot."
  },
  {
      question: "What are your clinic hours?",
      answer: "We are open Monday through Saturday, from 10:00 AM to 8:00 PM. We are closed on Sundays."
  }
];

const orthoFaqs: FAQItem[] = [
  {
    question: "What should I do if a wire breaks on my braces?",
    answer: "Cover the sharp end with orthodontic wax if it's poking you. Do not try to cut the wire yourself with household tools as you might swallow the piece. Call us immediately to schedule a repair appointment."
  },
  {
    question: "How often do I need to visit for adjustments?",
    answer: "For traditional braces, visits are typically every 4-6 weeks. For clear aligners, we might see you every 6-8 weeks to monitor progress."
  },
  {
      question: "Is the treatment painful?",
      answer: "You may experience some soreness for a few days after adjustments. This is normal and can be managed with over-the-counter pain relievers and soft food."
  }
];

const pediatricFaqs: FAQItem[] = [
  {
    question: "Is pediatric dental treatment painful?",
    answer: "Not at all. We specialize in gentle care. We use modern techniques and numbing gels to ensure your child feels little to no discomfort."
  },
  {
      question: "When should I bring my child for their first visit?",
      answer: "We recommend the first visit by the age of 1, or within 6 months of the first tooth erupting."
  }
];

export const FAQ: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('ortho-0');

    const toggle = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    const FAQSection = ({ title, items, prefix }: { title: string, items: FAQItem[], prefix: string }) => (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6 pb-2 border-b border-gray-100">{title}</h2>
            <div className="space-y-4">
                {items.map((faq, idx) => {
                    const id = `${prefix}-${idx}`;
                    const isOpen = openSection === id;
                    return (
                        <div key={id} className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                            <button 
                                onClick={() => toggle(id)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className={`font-semibold ${isOpen ? 'text-primary' : 'text-neutral'}`}>{faq.question}</span>
                                {isOpen ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-5 pt-0 text-neutralLight leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="animate-fade-in font-sans pb-20">
            <div className="bg-light py-16 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-neutral mb-4">Frequently Asked Questions</h1>
                    <p className="text-neutralLight">Find answers to common questions about our treatments and policies.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 max-w-4xl">
                
                {/* Emergency Banner */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 shrink-0 shadow-sm">
                        <AlertCircle size={28} />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-red-800">Orthodontic Emergency?</h3>
                        <p className="text-red-700 mt-2">If you are experiencing severe pain, swelling, or a broken appliance that causes injury, please contact us immediately.</p>
                    </div>
                    <a href="tel:+919175953070" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2">
                        <Phone size={18} />
                        Call Now
                    </a>
                </div>

                <FAQSection title="Orthodontics (Braces & Aligners)" items={orthoFaqs} prefix="ortho" />
                <FAQSection title="Pediatric Care" items={pediatricFaqs} prefix="pedi" />
                <FAQSection title="General Inquiries" items={generalFaqs} prefix="gen" />

            </div>
        </div>
    );
};