import React, { useState } from "react";
import { Truck, MapPin, ShieldCheck, Phone, Mail, FileText, Navigation, Info, Menu, X } from "lucide-react";

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-slate-900 p-1.5 rounded-sm">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                RIVERWAY <span className="font-normal text-slate-600">LOGISTICS</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Services</a>
            <a href="#lanes" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Lanes</a>
            <a href="#drivers" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Drivers</a>
            <a href="#contact" className="text-gray-600 hover:text-slate-900 text-sm font-medium transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+18005550199" 
              className="flex items-center gap-2 text-slate-900 font-medium text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact Operations</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-slate-900 p-2 focus:outline-none"
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#lanes" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Lanes
            </a>
            <a 
              href="#drivers" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a 
                href="tel:+18005550199" 
                className="flex items-center justify-center gap-2 w-full text-slate-900 font-medium text-base bg-gray-50 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Operations</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const AuthorityBanner = () => (
  <div className="bg-slate-900 text-white py-3">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm tracking-wide opacity-90">
      <div className="flex gap-6 mb-2 sm:mb-0">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          MC: 1473682
        </span>
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-400" />
          DOT: 3955747
        </span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-blue-400" />
        <span>Base Location: Spring, Texas</span>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <div className="relative bg-slate-800">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover opacity-30"
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000"
        alt="Open highway road"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent mix-blend-multiply" />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Professional Flatbed <br className="hidden sm:block" />
        Transportation Services
      </h1>
      <p className="mt-6 text-xl text-gray-300 max-w-3xl">
        Riverway Logistics is a compliance-driven motor carrier serving Texas and the Southeast. 
        We provide reliable regional and long-haul solutions for industrial freight.
      </p>
      <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
        <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <a
            href="#contact"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-white hover:bg-gray-50 sm:px-8"
          >
            Contact Operations
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Overview = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">Company Overview</h2>
        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Legitimate, Compliance-Driven Carrier
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We operate as a dedicated motor carrier, not a broker or freight marketplace. 
          Our focus is on safety, consistency, and professional execution for flatbed-appropriate freight.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Truck className="h-6 w-6 text-blue-800" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Flatbed Focused</h3>
          <p className="text-gray-600">
            Specializing in steel, pipe, and industrial materials. We do not offer dry van, reefer, or box truck services.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Navigation className="h-6 w-6 text-blue-800" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Core Lanes</h3>
          <p className="text-gray-600">
            Primary routes include Houston ↔ Georgia and Houston ↔ Midland, Texas, with additional regional coverage across the Southeast.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-800" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Safety First</h3>
          <p className="text-gray-600">
            We maintain strict safety standards and direct communication lines. Our DOT authority (3955747) reflects our commitment to compliance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LanesAndFreight = () => (
  <section id="services" className="py-16 bg-gray-50 border-t border-gray-200">
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
          </div>
        </div>
        <div className="mt-10 md:mt-0 relative">
          <img 
            src="/images/flatbed.png" 
            alt="Semi truck flatbed loaded with cargo" 
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded shadow-xl hidden lg:block">
            <p className="text-white font-bold text-xl">100%</p>
            <p className="text-blue-200 text-sm">Asset-Based Reliability</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Drivers = () => (
  <section id="drivers" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
        <div className="px-6 py-12 md:p-16 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-white mb-4">Driving Opportunities</h2>
            <p className="text-blue-100 text-lg mb-6">
              We work with experienced company drivers and owner-operators who understand flatbed operations. 
              If you value safety, clear communication, and consistent miles, contact our recruiting team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="flex items-center text-blue-200">
                <Truck className="h-5 w-5 mr-2" />
                <span>Flatbed Experience Required</span>
              </div>
              <div className="flex items-center text-blue-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Texas & Southeast Lanes</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
            <a 
              href="mailto:recruiting@riverwaylogistics.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-50 border-t border-gray-200">
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
          <a href="tel:+18325550100" className="mt-2 text-blue-700 font-medium hover:underline">(832) 555-0100</a>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Riverway Logistics</h3>
          <p className="text-sm max-w-xs mb-4">
            Professional flatbed transportation services based in Spring, Texas. 
            Committed to safety, compliance, and reliable freight execution.
          </p>
          <div className="flex gap-4 text-xs font-mono text-gray-500">
            <span>MC: 1473682</span>
            <span>DOT: 3955747</span>
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
  return (
    <div className="min-h-screen bg-white">
      <AuthorityBanner />
      <Header />
      <main>
        <Hero />
        <Overview />
        <LanesAndFreight />
        <Drivers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

