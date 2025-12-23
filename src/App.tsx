import React, { useState } from "react";
import { Truck, MapPin, ShieldCheck, Phone, Mail, FileText, Navigation, Info, Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import DriverApplicationForm from "./components/DriverApplicationForm";
import BackToTop from "./components/BackToTop";
import TrustCompliance from "./components/TrustCompliance";

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 sm:top-[40px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Riverway Logistics" 
                className="h-20 w-auto"
                width="180"
                height="80"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Services</a>
            <a href="#lanes" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Lanes</a>
            <a href="#drivers" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Drivers</a>
            <a href="#contact" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="mailto:dispatch@riverwaylogistics.com" 
              className="flex items-center gap-2 text-slate-900 font-medium text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </a>
            <a 
              href="tel:+18324770896" 
              className="flex items-center gap-2 text-white font-medium text-sm bg-slate-900 px-4 py-2 rounded hover:bg-slate-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-3 min-h-[44px] rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#lanes" 
              className="block px-3 py-3 min-h-[44px] rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Lanes
            </a>
            <a 
              href="#drivers" 
              className="block px-3 py-3 min-h-[44px] rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 min-h-[44px] rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <a 
                href="mailto:dispatch@riverwaylogistics.com" 
                className="flex items-center justify-center gap-2 w-full text-slate-900 font-medium text-base bg-gray-50 px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+18324770896" 
                className="flex items-center justify-center gap-2 w-full text-white font-medium text-base bg-slate-900 px-4 py-3 min-h-[44px] rounded-md hover:bg-slate-800 transition-colors"
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
  <div className="bg-slate-900 text-white py-2 sm:sticky sm:top-0 z-[60]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm tracking-wide">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-2 sm:mb-0">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          MC: 1473682
        </span>
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-400" />
          DOT: 3955747
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-400" />
          Spring, TX
        </span>
        <a 
          href="mailto:dispatch@riverwaylogistics.com" 
          className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
        >
          <Mail className="h-4 w-4" />
          dispatch@riverwaylogistics.com
        </a>
      </div>
      <a
        href="https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-blue-300 hover:text-blue-200 transition-colors font-medium"
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
  <div className="relative bg-slate-800">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover opacity-50"
        src="/images/flatbed.png"
        alt="Flatbed semi truck loaded with industrial cargo - Riverway Logistics"
        width="1920"
        height="1080"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent mix-blend-multiply" />
    </div>
    <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Texas-Based Flatbed Carrier <br className="hidden sm:block" />
        Serving TX & the Southeast
      </h1>
      <p className="mt-8 text-lg text-gray-200 max-w-3xl leading-relaxed">
        Riverway Logistics is an asset-based flatbed carrier based in Spring, Texas. 
        We specialize in steel, pipe, and industrial freight with consistent lanes 
        between Houston, Georgia, and the Permian Basin.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button
          onClick={onOpenQuote}
          className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-lg text-slate-900 bg-white hover:bg-gray-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
        >
          Book a Load
        </button>
        <a
          href="#drivers"
          className="flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
        >
          Drive With Us
        </a>
      </div>
    </div>
    <img 
      src="/images/logo-white.png" 
      alt="Riverway Logistics" 
      className="absolute bottom-6 right-6 h-20 w-auto opacity-80 hidden md:block"
      loading="lazy"
      width="180"
      height="80"
    />
  </div>
);

const Overview = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-20">
        <h2 className="text-sm text-blue-700 font-bold tracking-widest uppercase letter-spacing">Company Profile</h2>
        <p className="mt-6 text-4xl lg:text-5xl leading-tight font-bold tracking-tight text-gray-900">
          Legitimate, Compliance-Driven Carrier
        </p>
        <p className="mt-8 max-w-3xl text-lg text-gray-600 lg:mx-auto leading-relaxed">
          We operate as a dedicated motor carrier, not a broker or freight marketplace. 
          Our focus is on safety, consistency, and professional execution for flatbed-appropriate freight.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="group relative p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:to-blue-100/30 rounded-xl transition-all duration-300 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-200">
              <Truck className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Flatbed Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Specializing in steel, pipe, and industrial materials. We do not offer dry van, reefer, or box truck services.
            </p>
          </div>
        </div>

        <div className="group relative p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:to-blue-100/30 rounded-xl transition-all duration-300 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-200">
              <Navigation className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Lanes</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mr-3">→</span>
                <span className="text-sm font-medium">Houston ↔ Georgia</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mr-3">→</span>
                <span className="text-sm font-medium">Houston ↔ Midland, TX</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mr-3">+</span>
                <span className="text-sm font-medium">Southeast Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="group relative p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:to-blue-100/30 rounded-xl transition-all duration-300 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-200">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety & Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              Strict safety standards and direct communication. DOT authority <span className="font-semibold text-slate-900">3955747</span> reflects our unwavering commitment to compliance and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .letter-spacing {
        letter-spacing: 0.15em;
      }
    `}</style>
  </section>
);

const LanesAndFreight = () => (
  <section id="services" className="py-24 bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Capabilities & Scope</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 border-b border-gray-200 pb-2 mb-3">Freight Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Steel products</li>
                <li>Pipe and tubing</li>
                <li>Construction materials</li>
                <li>General industrial flatbed freight</li>
              </ul>
            </div>
            
            <div id="lanes">
              <h3 className="text-lg font-medium text-slate-900 border-b border-gray-200 pb-2 mb-3">Primary Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Regional Texas:</strong> Specialized service between Houston and Midland/Permian Basin.</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Southeast Corridor:</strong> Consistent lanes between Houston and Georgia.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-200 mt-6">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-slate-500 mr-2 mt-0.5" />
                <p className="text-sm text-gray-500">
                  <strong>Note:</strong> We are exclusively a flatbed carrier. We do not provide quotes for household goods, passenger vehicles, or dry van freight.
                </p>
              </div>
            </div>

            <a
              href="tel:+18324770896"
              className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 relative">
          <div className="bg-[#f1f5f9] rounded-lg p-6 shadow-lg">
            <img 
              src="/images/truck-coils.png" 
              alt="Peterbilt flatbed truck with steel coils" 
              className="w-full h-auto"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded shadow-xl hidden lg:block">
            <p className="text-white font-bold text-xl">100%</p>
            <p className="text-blue-200 text-sm">Asset-Based Reliability</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Drivers = ({ onOpenDriverForm }: { onOpenDriverForm: () => void }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section id="drivers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="px-6 py-12 md:p-16">
            <div className="md:flex md:items-start md:justify-between">
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  We're looking for experienced flatbed drivers who value safety, clear communication, 
                  and consistent miles. Company drivers and owner-operators welcome.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
                  <div className="flex items-center text-blue-200">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-sm">1+ year flatbed experience required</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-sm">TX & Southeast regional lanes</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-sm">Home most weekends</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-sm">Pay details available on request</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  aria-expanded={expanded}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                  <span>More Details</span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="bg-slate-800 rounded-lg p-5 mb-6 border border-slate-700">
                    <ul className="space-y-3 text-blue-100 text-sm text-left">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>Weekly settlements with direct deposit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>Direct dispatch line – no middlemen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>No forced dispatch – we respect your time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>Well-maintained equipment with regular inspections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>Professional, safety-first driver culture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                        <span>Consistent freight – steel, pipe, industrial loads</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
                <button 
                  onClick={onOpenDriverForm}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-slate-900 bg-white hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
  <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
        <p className="mt-4 text-gray-600">
          Reach out to our operations team for capacity inquiries or general carrier questions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Phone</h3>
          <p className="mt-2 text-gray-600 text-center">Main Operations</p>
          <a href="tel:+18324770896" className="mt-2 text-blue-700 font-medium hover:underline">(832) 477-0896</a>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-2 text-gray-600 text-center">Dispatch & Sales</p>
          <a href="mailto:dispatch@riverwaylogistics.com" className="mt-2 text-blue-700 font-medium hover:underline">dispatch@riverwaylogistics.com</a>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-slate-900" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Location</h3>
          <p className="mt-2 text-gray-600 text-center">Headquarters</p>
          <span className="mt-2 text-slate-900">Spring, Texas</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <img 
            src="/images/logo.png" 
            alt="Riverway Logistics" 
            className="h-24 w-auto mb-4"
          />
          <p className="text-sm max-w-xs mb-4">
            Professional flatbed transportation services based in Spring, Texas. 
            Committed to safety, compliance, and reliable freight execution.
          </p>
          <div className="flex gap-4 text-xs font-mono text-gray-500">
            <span>MC: 1473682</span>
            <span>DOT: 3955747</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Contact</h4>
          <div className="space-y-3">
            <a 
              href="mailto:dispatch@riverwaylogistics.com" 
              className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              dispatch@riverwaylogistics.com
            </a>
            <a 
              href="tel:+18324770896" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              (832) 477-0896
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Riverway Logistics. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            This website is for informational purposes only.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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

