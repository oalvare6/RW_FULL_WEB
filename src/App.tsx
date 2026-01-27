import React, { useState } from "react";
import { Truck, MapPin, ShieldCheck, Phone, Mail, FileText, Navigation, Info, Menu, X, ExternalLink, ChevronDown, ArrowLeftRight, Plus } from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import DriverApplicationForm from "./components/DriverApplicationForm";
import BackToTop from "./components/BackToTop";
import TrustCompliance from "./components/TrustCompliance";

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-cream/95 backdrop-blur-md border-b border-brand-navy/10 sticky top-0 sm:top-[40px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Riverway Logistics" 
                className="h-16 w-auto"
                width="180"
                height="80"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#services" className="text-brand-charcoal hover:text-brand-navy text-sm font-semibold tracking-wide uppercase transition-colors">Services</a>
            <a href="#lanes" className="text-brand-charcoal hover:text-brand-navy text-sm font-semibold tracking-wide uppercase transition-colors">Lanes</a>
            <a href="#drivers" className="text-brand-charcoal hover:text-brand-navy text-sm font-semibold tracking-wide uppercase transition-colors">Drivers</a>
            <a href="#contact" className="text-brand-charcoal hover:text-brand-navy text-sm font-semibold tracking-wide uppercase transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="mailto:operations@riverwaylogistics.com" 
              className="flex items-center gap-2 text-brand-charcoal font-semibold text-sm border-2 border-brand-navy px-5 py-2.5 hover:bg-brand-navy hover:text-white transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </a>
            <a 
              href="tel:+18324770896" 
              className="btn-glow flex items-center gap-2 text-white font-bold text-sm bg-brand-orange px-5 py-2.5 hover:bg-brand-orange-light transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-charcoal hover:text-brand-navy min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy rounded"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-navy/10 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a 
              href="#services" 
              className="block px-4 py-3 min-h-[44px] text-base font-semibold text-brand-charcoal hover:text-brand-navy hover:bg-brand-navy/5 uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#lanes" 
              className="block px-4 py-3 min-h-[44px] text-base font-semibold text-brand-charcoal hover:text-brand-navy hover:bg-brand-navy/5 uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Lanes
            </a>
            <a 
              href="#drivers" 
              className="block px-4 py-3 min-h-[44px] text-base font-semibold text-brand-charcoal hover:text-brand-navy hover:bg-brand-navy/5 uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-3 min-h-[44px] text-base font-semibold text-brand-charcoal hover:text-brand-navy hover:bg-brand-navy/5 uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-6 pt-4 border-t border-brand-navy/10 space-y-3">
              <a 
                href="mailto:operations@riverwaylogistics.com" 
                className="flex items-center justify-center gap-2 w-full text-brand-charcoal font-semibold text-base border-2 border-brand-navy px-4 py-3 min-h-[48px] hover:bg-brand-navy hover:text-white transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+18324770896" 
                className="flex items-center justify-center gap-2 w-full text-white font-bold text-base bg-brand-orange px-4 py-3 min-h-[48px] hover:bg-brand-orange-light transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const AuthorityBanner = () => (
  <div className="bg-brand-navy text-white py-2.5 sm:sticky sm:top-0 z-[60]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm tracking-wider">
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-2 sm:mb-0">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-brand-orange" />
          <span className="font-semibold">MC: 1473682</span>
        </span>
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-brand-orange" />
          <span className="font-semibold">DOT: 3955747</span>
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-orange" />
          <span>Spring, TX</span>
        </span>
        <a 
          href="mailto:operations@riverwaylogistics.com" 
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <Mail className="h-4 w-4" />
          operations@riverwaylogistics.com
        </a>
      </div>
      <a
        href="https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors font-semibold"
      >
        <span>FMCSA Snapshot</span>
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  </div>
);

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => (
  <div className="relative bg-brand-navy-dark hero-clip grain-overlay overflow-hidden">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover opacity-30"
        src="/images/flatbed.png"
        alt="Flatbed semi truck loaded with industrial cargo - Riverway Logistics"
        width="1920"
        height="1080"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 to-transparent" />
    </div>
    <div className="relative max-w-7xl mx-auto py-28 px-4 sm:py-36 lg:py-44 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="animate-fade-up text-brand-orange font-semibold tracking-[0.2em] uppercase text-sm mb-4">
          Asset-Based Flatbed Carrier
        </p>
        <h1 className="animate-fade-up animation-delay-100 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-wide">
          TEXAS-BASED<br />
          <span className="text-brand-orange">FLATBED</span> CARRIER
        </h1>
        <p className="animate-fade-up animation-delay-200 mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Riverway Logistics specializes in steel, pipe, and industrial freight. 
          Consistent lanes between Houston, Georgia, and the Permian Basin.
        </p>
        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenQuote}
            className="btn-glow flex items-center justify-center px-10 py-4 text-base font-bold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orange-light transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark"
          >
            Book a Load
          </button>
          <a
            href="#drivers"
            className="flex items-center justify-center px-10 py-4 border-2 border-white text-base font-bold uppercase tracking-wider text-white hover:bg-white hover:text-brand-navy-dark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark"
          >
            Drive With Us
          </a>
        </div>
      </div>
    </div>
    
    {/* Bottom accent stripe */}
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-navy" />
  </div>
);

const Overview = () => (
  <section className="py-24 lg:py-32 bg-brand-cream relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-20">
        <p className="animate-fade-up text-brand-navy font-bold tracking-[0.2em] uppercase text-sm mb-4">Company Profile</p>
        <h2 className="animate-fade-up animation-delay-100 font-display text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal leading-tight">
          LEGITIMATE, COMPLIANCE-DRIVEN<br />
          <span className="text-brand-navy">CARRIER</span>
        </h2>
        <p className="animate-fade-up animation-delay-200 mt-8 max-w-3xl text-lg text-gray-600 lg:mx-auto leading-relaxed">
          We operate as a dedicated motor carrier, not a broker or freight marketplace. 
          Our focus is on safety, consistency, and professional execution for flatbed-appropriate freight.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card-lift group relative p-8 bg-white border-l-4 border-brand-navy shadow-sm">
          <div className="relative">
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy-light transition-colors duration-300">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-2xl text-brand-charcoal mb-3 tracking-wide">FLATBED FOCUSED</h3>
            <p className="text-gray-600 leading-relaxed">
              Specializing in steel, pipe, and industrial materials. We do not offer dry van, reefer, or box truck services.
            </p>
          </div>
        </div>

        <div className="card-lift group relative p-8 bg-white border-l-4 border-brand-navy shadow-sm">
          <div className="relative">
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy-light transition-colors duration-300">
              <Navigation className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-2xl text-brand-charcoal mb-4 tracking-wide">CORE LANES</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-10 w-10 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white mr-3 rounded shadow-md group-hover:scale-110 transition-transform duration-300">
                  <ArrowLeftRight className="h-5 w-5" />
                </span>
                <span className="font-medium">Houston ↔ Georgia</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-10 w-10 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white mr-3 rounded shadow-md group-hover:scale-110 transition-transform duration-300">
                  <ArrowLeftRight className="h-5 w-5" />
                </span>
                <span className="font-medium">Houston ↔ Midland, TX</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-10 w-10 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white mr-3 rounded shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-5 w-5" />
                </span>
                <span className="font-medium">Southeast Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-lift group relative p-8 bg-white border-l-4 border-brand-navy shadow-sm">
          <div className="relative">
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy-light transition-colors duration-300">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-2xl text-brand-charcoal mb-3 tracking-wide">SAFETY & COMPLIANCE</h3>
            <p className="text-gray-600 leading-relaxed">
              Strict safety standards and direct communication. DOT authority <span className="font-bold text-brand-charcoal">3955747</span> reflects our commitment to compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LanesAndFreight = () => (
  <section id="services" className="py-24 lg:py-32 bg-brand-navy relative grain-overlay">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-2 md:gap-20 items-center">
        <div className="relative z-10">
          <p className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4">What We Haul</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-8 tracking-wide">
            CAPABILITIES<br />& <span className="text-brand-orange">SCOPE</span>
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white border-b border-white/20 pb-3 mb-4 uppercase tracking-wide">Freight Types</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange"></span>
                  Steel products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange"></span>
                  Pipe and tubing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange"></span>
                  Construction materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange"></span>
                  Industrial freight
                </li>
              </ul>
            </div>
            
            <div id="lanes">
              <h3 className="text-lg font-bold text-white border-b border-white/20 pb-3 mb-4 uppercase tracking-wide">Primary Service Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Regional Texas:</strong> Specialized service between Houston and Midland/Permian Basin.</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Southeast Corridor:</strong> Consistent lanes between Houston and Georgia.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-navy-dark/50 p-5 border-l-4 border-brand-orange">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  <strong className="text-gray-300">Note:</strong> We are exclusively a flatbed carrier. We do not provide quotes for household goods, passenger vehicles, or dry van freight.
                </p>
              </div>
            </div>

            <a
              href="tel:+18324770896"
              className="btn-glow inline-flex items-center px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-wider hover:bg-brand-orange-light transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-0 relative">
          <div className="bg-brand-navy-dark p-4">
            <img 
              src="/images/truck-coils.png" 
              alt="Peterbilt flatbed truck with steel coils" 
              className="w-full h-auto"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-orange p-6 hidden lg:block">
            <p className="text-white font-display text-4xl tracking-wide">100%</p>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Asset-Based</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Drivers = ({ onOpenDriverForm }: { onOpenDriverForm: () => void }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section id="drivers" className="py-24 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 hidden lg:block" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-orange" />
          
          <div className="relative px-8 py-16 md:p-16 lg:p-20">
            <div className="md:flex md:items-start md:justify-between gap-12">
              <div className="md:w-2/3">
                <p className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4">Careers</p>
                <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 tracking-wide">
                  JOIN OUR <span className="text-brand-orange">TEAM</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We're looking for experienced flatbed drivers who value safety, clear communication, 
                  and consistent miles. Company drivers and owner-operators welcome.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <span className="w-6 h-6 bg-brand-orange flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                    <span>1+ year flatbed experience required</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-6 h-6 bg-brand-orange flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                    <span>TX & Southeast regional lanes</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-6 h-6 bg-brand-orange flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                    <span>Home most weekends</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-6 h-6 bg-brand-orange flex items-center justify-center text-white font-bold text-sm mr-3">✓</span>
                    <span>Pay details available on request</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-expanded={expanded}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                  <span>More Details</span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="bg-brand-navy-dark/50 p-6 mb-8 border-l-4 border-brand-orange">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>Weekly settlements with direct deposit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>Direct dispatch line – no middlemen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>No forced dispatch – we respect your time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>Well-maintained equipment with regular inspections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>Professional, safety-first driver culture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-3 font-bold">•</span>
                        <span>Consistent freight – steel, pipe, industrial loads</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
                <button 
                  onClick={onOpenDriverForm}
                  className="btn-glow inline-flex items-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orange-light transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 lg:py-32 bg-brand-cream border-t-4 border-brand-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-brand-navy font-bold tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</p>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-charcoal tracking-wide">
          CONTACT <span className="text-brand-navy">INFORMATION</span>
        </h2>
        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
          Reach out to our operations team for capacity inquiries or general carrier questions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="card-lift flex flex-col items-center p-8 bg-white border-l-4 border-brand-navy">
          <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-5">
            <Phone className="h-7 w-7 text-white" />
          </div>
          <h3 className="font-display text-xl text-brand-charcoal tracking-wide">PHONE</h3>
          <p className="mt-2 text-gray-500 text-sm">Main Operations</p>
          <a href="tel:+18324770896" className="mt-3 text-brand-orange font-bold text-lg hover:text-brand-orange-light transition-colors">(832) 477-0896</a>
        </div>

        <div className="card-lift flex flex-col items-center p-8 bg-white border-l-4 border-brand-navy">
          <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-5">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <h3 className="font-display text-xl text-brand-charcoal tracking-wide">EMAIL</h3>
          <p className="mt-2 text-gray-500 text-sm">Dispatch & Sales</p>
          <a href="mailto:operations@riverwaylogistics.com" className="mt-3 text-brand-orange font-bold hover:text-brand-orange-light transition-colors text-center break-all">operations@riverwaylogistics.com</a>
        </div>

        <div className="card-lift flex flex-col items-center p-8 bg-white border-l-4 border-brand-navy">
          <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mb-5">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <h3 className="font-display text-xl text-brand-charcoal tracking-wide">LOCATION</h3>
          <p className="mt-2 text-gray-500 text-sm">Headquarters</p>
          <span className="mt-3 text-brand-orange font-bold text-lg">Spring, Texas</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-navy-dark text-gray-400 py-16 relative grain-overlay">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <img 
            src="/images/logo.png" 
            alt="Riverway Logistics" 
            className="h-20 w-auto mb-6"
          />
          <p className="text-sm max-w-xs mb-6 leading-relaxed">
            Professional flatbed transportation services based in Spring, Texas. 
            Committed to safety, compliance, and reliable freight execution.
          </p>
          <div className="flex gap-6 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-brand-orange"></span>
              MC: 1473682
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-brand-orange"></span>
              DOT: 3955747
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl text-white mb-6 tracking-wide">QUICK CONTACT</h4>
          <div className="space-y-4">
            <a 
              href="mailto:operations@riverwaylogistics.com" 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5 text-brand-orange" />
              operations@riverwaylogistics.com
            </a>
            <a 
              href="tel:+18324770896" 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5 text-brand-orange" />
              (832) 477-0896
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Riverway Logistics
          </p>
          <p className="text-xs text-gray-600 mt-2">
            All rights reserved.
          </p>
          <div className="mt-6">
            <a
              href="https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span>FMCSA Snapshot</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-brand-navy" />
  </footer>
);

const App = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream">
      <AuthorityBanner />
      <Header />
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <Overview />
        <LanesAndFreight />
        <TrustCompliance />
        <Drivers onOpenDriverForm={() => setIsDriverModalOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <QuoteForm isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <DriverApplicationForm isOpen={isDriverModalOpen} onClose={() => setIsDriverModalOpen(false)} />
    </div>
  );
};

export default App;
