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
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-blue-700 font-bold tracking-widest uppercase mb-4">Proof of Operations</h2>
          <p className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Trust & Compliance</p>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Verified carrier with active authority and full documentation available on request.
          </p>
        </div>

        {/* Photo Gallery - Horizontal Scroll */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Fleet in Action</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-72 snap-start"
              >
                <div className="bg-slate-200 rounded-lg overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="288"
                    height="216"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-slate-500 text-sm">Image coming soon</div>';
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Accordion */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Carrier Documentation</h3>
          <div className="space-y-3">
            {docs.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleDoc(doc.id)}
                  className="w-full flex items-center justify-between p-4 min-h-[48px] text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                  aria-expanded={openDoc === doc.id}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-700" />
                    <span className="font-medium text-gray-900">{doc.title}</span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${openDoc === doc.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openDoc === doc.id ? 'max-h-32' : 'max-h-0'}`}
                >
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                    <a
                      href="mailto:dispatch@riverwaylogistics.com?subject=Document Request - Riverway Logistics"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Request document via email
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
