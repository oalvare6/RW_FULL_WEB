import React, { useState } from 'react';
import { FileText, ChevronDown, Mail } from 'lucide-react';

const TrustCompliance: React.FC = () => {
  const [openDoc, setOpenDoc] = useState<string | null>(null);

  const galleryImages = [
    { src: '/images/trucks/truck-1.jpg', caption: 'Steel flatbed load to Midland, TX' },
    { src: '/images/trucks/truck-2.jpg', caption: 'Flatbed on Houston ↔ Georgia run' },
    { src: '/images/trucks/truck-3.jpg', caption: 'Heavy machinery transport' },
    { src: '/images/trucks/truck-4.jpg', caption: 'Pipe transport for oilfield' },
  ];

  const docs = [
    { id: 'w9', title: 'W-9', description: 'Tax identification form' },
    { id: 'insurance', title: 'Insurance Certificate', description: 'Current COI available' },
    { id: 'mc', title: 'MC Authority', description: 'MC 1473682 - Active' },
    { id: 'packet', title: 'Carrier Packet', description: 'Complete carrier setup package' },
  ];

  const toggleDoc = (id: string) => {
    setOpenDoc(openDoc === id ? null : id);
  };

  return (
    <section className="py-24 lg:py-32 bg-brand-cream border-t-4 border-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-navy font-bold tracking-[0.2em] uppercase text-sm mb-4">Proof of Operations</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal leading-tight tracking-wide">
            TRUST & <span className="text-brand-navy">COMPLIANCE</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Verified carrier with active authority and full documentation available on request.
          </p>
        </div>

        {/* Photo Gallery - Horizontal Scroll */}
        <div className="mb-20">
          <h3 className="font-display text-2xl text-brand-charcoal mb-6 tracking-wide">OUR FLEET IN ACTION</h3>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 snap-start group"
              >
                <div className="bg-brand-steel overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="320"
                    height="240"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 text-sm bg-brand-steel">Image coming soon</div>';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <p className="mt-3 text-sm text-gray-600 font-medium">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Accordion */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl text-brand-charcoal mb-6 tracking-wide">CARRIER DOCUMENTATION</h3>
          <div className="space-y-3">
            {docs.map((doc) => (
              <div key={doc.id} className="bg-white border-l-4 border-brand-navy overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleDoc(doc.id)}
                  className="w-full flex items-center justify-between p-5 min-h-[56px] text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-navy"
                  aria-expanded={openDoc === doc.id}
                >
                  <div className="flex items-center gap-4">
                    <FileText className="h-5 w-5 text-brand-navy" />
                    <span className="font-bold text-brand-charcoal uppercase tracking-wide">{doc.title}</span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-navy transition-transform duration-200 ${openDoc === doc.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openDoc === doc.id ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                    <a
                      href="mailto:operations@riverwaylogistics.com?subject=Document Request - Riverway Logistics"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-navy-light transition-colors uppercase tracking-wide"
                    >
                      <Mail className="h-4 w-4" />
                      Request via email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
