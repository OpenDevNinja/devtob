import { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon,QrCode, InfoIcon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = {
    name: "Bonavneture TOYI ",
    title: "Développeur Web & Mobile - Webmaster Freelance - Expérimenté",
    phone: "+229 0148444408 ",
    whatsapp: "+229 01 48 44 44 08",
    linkedin: "Linkedin",
    email: "toybonadev@gmail.com",
    links: [
      { name: "Ma Boutique en ligne", href: "#boutique" },
      { name: "Blog", href: "#blog" }
    ]
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `${darkMode ? 'bg-dark/90 backdrop-blur-md' : 'bg-light/90 backdrop-blur-md'} shadow-md`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-mono text-primary text-xl font-bold">&lt;DevToB<span className="text-accent">/</span>&gt;</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-light' : 'text-dark'} hover:text-primary transition-colors duration-200`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => setContactModalOpen(true)}
                className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-200"
                aria-label="Information de contact"
              >
                <QrCode className={`h-5 w-5 ${darkMode ? 'text-light' : 'text-dark'}`} />
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setContactModalOpen(true)}
              className="p-2 mr-2 rounded-full hover:bg-primary/20 transition-colors duration-200"
              aria-label="Information de contact"
            >
              <InfoIcon className={`h-5 w-5 ${darkMode ? 'text-light' : 'text-dark'}`} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-primary/20 transition-colors duration-200"
              aria-label={darkMode ? "Mode clair" : "Mode sombre"}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-light" />
              ) : (
                <MoonIcon className="h-5 w-5 text-dark" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-light' : 'text-dark'} hover:text-primary hover:bg-primary/10 focus:outline-none`}
              aria-expanded="false"
            >
              {mobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-dark/95' : 'bg-light/95'} backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-light' : 'text-dark'} hover:text-primary hover:bg-primary/10 transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Contact Info Modal - positioned at right side */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-dark/30 backdrop-blur-sm transition-opacity" onClick={() => setContactModalOpen(false)}></div>
            
            <div className="fixed inset-y-0 right-0 max-w-xs w-full overflow-y-auto bg-light shadow-lg transform transition ease-in-out duration-300">
              <div className="absolute top-3 left-3">
                <button
                  onClick={() => setContactModalOpen(false)}
                  className={`text-dark hover:text-primary focus:outline-none`}
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-6 pt-12">
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <div className="mx-auto mb-3 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-primary text-2xl font-bold">TB</span>
                    </div>
                    <h3 className="text-lg font-medium text-dark" id="modal-title">
                      {contactInfo.name}
                    </h3>
                    <p className="text-sm text-dark/70 mt-1 px-4">{contactInfo.title}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-dark mb-4">Contact Info</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-dark">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-dark">{contactInfo.whatsapp}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark">
                        <a href="https://www.linkedin.com/in/toyibonaventure/">
                        {contactInfo.linkedin} 
                        </a>
                       </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-dark">{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-dark mb-4">Visiter</h4>
                  <div className="space-y-4">
                    {contactInfo.links.map((link, index) => (
                      <div key={index} className="flex items-center">
                        {index === 0 ? (
                          <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z" />
                          </svg>
                        )}
                        <a href={link.href} className="text-dark hover:text-primary transition-colors">
                          {link.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;