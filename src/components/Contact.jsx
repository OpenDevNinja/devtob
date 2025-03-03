// src/components/Contact.jsx
import { useState } from 'react';
import { SendIcon, PhoneIcon, MapPinIcon, MailIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setFormStatus(null);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Entrons en contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Me <span className="text-primary">Contacter</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-dark-800 rounded-xl p-6 border border-light/10 h-full">
              <h3 className="text-xl font-bold text-light mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1">Téléphone</h4>
                    <p className="text-light/70">+229 01 48 44 44 08</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary mr-4">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1">Email</h4>
                    <p className="text-light/70">toybonadev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-accent/10 text-accent mr-4">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1">Localisation</h4>
                    <p className="text-light/70">Cotonou, Benin</p>
                    <p className="text-light/70">Disponible pour du travail à distance</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-light font-medium mb-4">Retrouvez-moi sur</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="p-2 rounded-full bg-light/5 text-light/70 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-xl p-6 border border-light/10">
              <h3 className="text-xl font-bold text-light mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-light/70 mb-2 text-sm">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-light/10 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light/70 mb-2 text-sm">Adresse email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-light/10 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-light/70 mb-2 text-sm">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-light/10 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-light/70 mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-light/10 text-light focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                    formStatus === 'sending'
                      ? 'bg-primary/50 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 shadow-custom hover:shadow-hover transform hover:-translate-y-1'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <span>Envoi en cours...</span>
                  ) : formStatus === 'success' ? (
                    <span>Message envoyé !</span>
                  ) : (
                    <>
                      <span className="mr-2">Envoyer le message</span>
                      <SendIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;