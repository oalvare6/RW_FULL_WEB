import React, { useState } from "react";
import { ChevronDown, ExternalLink, FileText, Mail, ShieldCheck } from "lucide-react";

const FMCSA_URL =
  "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY";

const galleryImages = [
  { src: "/images/trucks/truck-1.jpg", caption: "Riverway Peterbilt flatbed equipment" },
  { src: "/images/trucks/truck-2.jpg", caption: "Flatbed equipment ready for regional lanes" },
  { src: "/images/trucks/truck-3.jpg", caption: "Industrial flatbed operations" },
  { src: "/images/trucks/truck-4.jpg", caption: "Pipe and oilfield freight capability" },
];

const docs = [
  { id: "w9", title: "W-9", description: "Tax identification form available for carrier setup." },
  { id: "insurance", title: "Insurance Certificate", description: "Current certificate of insurance available on request." },
  { id: "mc", title: "MC Authority", description: "MC 1473682 with authority details available through FMCSA." },
  { id: "packet", title: "Carrier Packet", description: "Complete carrier setup packet available for shippers and brokers." },
];

const TrustCompliance: React.FC = () => {
  const [openDoc, setOpenDoc] = useState<string | null>(null);

  const toggleDoc = (id: string) => {
    setOpenDoc(openDoc === id ? null : id);
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-brand-orange">
              Proof of Operations
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
              Compliance, documentation, and real fleet proof in one place.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-slate sm:text-lg">
              Riverway presents as a legitimate carrier because the operating details are easy to
              verify: authority, insurance documentation, carrier packet access, and actual
              equipment photos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={FMCSA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-orange/50 hover:bg-white"
              >
                <div className="flex items-center gap-3 text-brand-navy">
                  <ShieldCheck className="h-5 w-5 text-brand-orange" />
                  <span className="font-display text-base font-extrabold">FMCSA Snapshot</span>
                  <ExternalLink className="ml-auto h-4 w-4" />
                </div>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  Verify DOT 3955747 and operating authority.
                </p>
              </a>

              <a
                href="mailto:operations@riverwaylogistics.com?subject=Carrier Packet Request - Riverway Logistics"
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-orange/50 hover:bg-white"
              >
                <div className="flex items-center gap-3 text-brand-navy">
                  <Mail className="h-5 w-5 text-brand-orange" />
                  <span className="font-display text-base font-extrabold">Request Packet</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  Ask operations for insurance, W-9, and setup documents.
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
              {galleryImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={`group shrink-0 snap-center overflow-hidden rounded-md bg-slate-100 w-[85vw] max-w-sm md:w-auto md:max-w-none md:shrink ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}>
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="640"
                      height="420"
                    />
                  </div>
                  <figcaption className="border-t border-slate-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-slate line-clamp-2 sm:text-xs">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-7">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                Carrier Documentation
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-brand-charcoal">
                Setup documents available on request.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-brand-slate">
              Keep the conversion path clear: brokers and shippers can quickly request the exact
              files they need from operations.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {docs.map((doc) => (
              <div key={doc.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => toggleDoc(doc.id)}
                  className="flex min-h-[58px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-navy"
                  aria-expanded={openDoc === doc.id}
                >
                  <span className="flex items-center gap-3">
                    <FileText className="h-5 w-5 flex-none text-brand-orange" />
                    <span className="font-display text-base font-extrabold text-brand-charcoal">
                      {doc.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-brand-navy transition-transform duration-200 ${
                      openDoc === doc.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openDoc === doc.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                  <div className="border-t border-slate-200 px-5 py-4">
                    <p className="text-sm leading-6 text-brand-slate">{doc.description}</p>
                    <a
                      href={`mailto:operations@riverwaylogistics.com?subject=${encodeURIComponent(
                        `${doc.title} Request - Riverway Logistics`,
                      )}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.1em] text-brand-navy transition-colors hover:text-brand-orange"
                    >
                      <Mail className="h-4 w-4" />
                      Request via email
                    </a>
                  </div>
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
