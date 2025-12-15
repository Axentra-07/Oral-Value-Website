import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  // Calculate today's date for min attribute in YYYY-MM-DD format
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow alphabets (uppercase and lowercase) and whitespace
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFullName(value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    
    // Constraint: Max 12 digits
    if (numericValue.length <= 12) {
      setPhone(numericValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Construct the email data
    // Replace 'contact@oralvalue.com' with your actual personal email address if different
    const recipientEmail = 'sakshisawant413@gmail.com';
    const subject = `New Appointment Request: ${fullName}`;
    const body = `Name: ${fullName}
Phone: ${phone}
Email: ${email}
Preferred Date: ${date}
Service: ${service}

Message:
${message}

--
Sent from Oral Value Website Enquiry Form`;

    // Create the mailto link with encoded parameters
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger the email client
    window.location.href = mailtoLink;

    // Show success state in UI
    setTimeout(() => {
      setFormStatus('success');
      setFullName(''); 
      setPhone('');
      setEmail('');
      setDate('');
      setService('General Consultation');
      setMessage('');
      
      // Scroll to top of form so user sees the success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset after a delay
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 500); // Small delay to allow mail client to open smoothly
  };

  return (
    <div className="animate-fade-in pb-20 font-sans">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">We are here to help you achieve your best smile.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Contact Information Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-fit">
          <h2 className="text-2xl font-bold text-neutral mb-8">Get in Touch</h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral mb-2">Visit Us</h3>
                <p className="text-neutralLight leading-relaxed">Rajarampuri 2nd Lane,<br/>Kalashree Building,<br/>Kolhapur 416008</p>
                <div className="mt-6 w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                    {/* Placeholder Map */}
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                      alt="Location Map"
                      className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-neutral uppercase tracking-wider">Google Map</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral mb-2">Call Us</h3>
                <p className="text-neutralLight mb-2">Mon-Sat, 10am to 8pm</p>
                <a href="tel:+919175953070" className="text-2xl font-bold text-primary hover:text-accent transition-colors block">+91 91759 53070</a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral mb-2">Email</h3>
                <a href="mailto:sakshisawant413@gmail.com" className="text-neutralLight hover:text-primary transition-colors">contact@oralvalue.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div ref={formRef} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 scroll-mt-32">
          <h2 className="text-2xl font-bold text-neutral mb-2">Request Appointment</h2>
          <p className="text-neutralLight mb-8">Fill out the form below and we will get back to you shortly.</p>
          
          {formStatus === 'success' ? (
             <div className="bg-green-50 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center animate-fade-in border border-green-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-2xl mb-2">Email Prepared!</h3>
                <p className="text-green-700">Your email client has been opened with the details. Please hit "Send" to complete the request.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    value={fullName}
                    onChange={handleNameChange}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                        placeholder="9999999999" 
                      />
                      <p className="text-xs text-gray-400 mt-1 text-right">{phone.length}/12 digits</p>
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                        placeholder="john@example.com" 
                      />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        min={minDate}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        onKeyDown={(e) => e.preventDefault()}
                        onClick={(e) => {
                          try {
                            e.currentTarget.showPicker();
                          } catch (error) {
                            // Fallback for browsers that don't support showPicker
                          }
                        }}
                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer" 
                      />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Service Required</label>
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                        <option>General Consultation</option>
                        <option>Braces / Orthodontics</option>
                        <option>Pediatric (Child)</option>
                        <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                <label className="block text-sm font-bold text-neutral mb-2 uppercase tracking-wide">Message (Optional)</label>
                <textarea 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                  placeholder="Tell us about your concern..."
                ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                <input required type="checkbox" id="consent" className="mt-1 w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                <label htmlFor="consent" className="text-sm text-neutralLight leading-tight">I consent to Oral Value Dental Clinic contacting me regarding this appointment request via phone or email.</label>
                </div>

                <button 
                disabled={formStatus === 'submitting'}
                type="submit" 
                className="w-full bg-accent hover:bg-accentHover text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                {formStatus === 'submitting' ? 'Preparing Email...' : 'Send Request'}
                </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};