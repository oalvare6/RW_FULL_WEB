import React, { useState } from "react";
import { ChevronDown, ExternalLink, FileText, Mail, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const FMCSA_URL =
  "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY";

const galleryImages = [
  { src: "/images/trucks/truck-1.jpg", caption: "Peterbilt flatbed equipment in Riverway colors" },
  { src: "/images/trucks/truck-2.jpg", caption: "Flatbed equipment staged for regional work" },
  { src: "/images/trucks/truck-3.jpg", caption: "Steel and industrial freight focus" },
  { src: "/images/trucks/truck-4.jpg", caption: "Pipe-capable flatbed setup" },
];

const docs = [
  { id: "w9", title: "W-9", description: "Request tax setup information when onboarding Riverway as a carrier." },
  { id: "insurance", title: "Insurance Certificate", description: "Ask operations for the current certificate required by your setup process." },
  { id: "mc", title: "MC Authority", description: "Verify MC 1473682 and DOT 3955747 through the FMCSA snapshot link." },
  { id: "packet", title: "Carrier Packet", description: "Request the setup packet your broker or shipper onboarding team needs." },
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
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
              Carrier Setup
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
              Authority, equipment, and setup requests stay easy to verify.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-slate sm:text-lg">
              Brokers and shippers can confirm carrier authority, review Riverway equipment, and
              request the documents needed to move setup forward.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={FMCSA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-orange/50 hover:bg-white"
              >
                <div className="flex items-center gap-3 text-brand-navy">
                  <ShieldCheck className="h-5 w-5 text-brand-orange" />
                  <span className="font-display text-base font-extrabold">Verify Authority</span>
                  <ExternalLink className="ml-auto h-4 w-4" />
                </div>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  Open the FMCSA record for DOT 3955747 before setup or dispatch.
                </p>
              </a>

              <a
                href="mailto:operations@riverwaylogistics.com?subject=Carrier Packet Request - Riverway Logistics"
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-orange/50 hover:bg-white"
              >
                <div className="flex items-center gap-3 text-brand-navy">
                  <Mail className="h-5 w-5 text-brand-orange" />
                  <span className="font-display text-base font-extrabold">Request Setup Docs</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  Email operations with the document list your onboarding team requires.
                </p>
              </a>
            </div>
          </div>

          <Reveal>
          <div className="max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 strong-panel-shadow">
            <div className="flex max-w-full gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
              {galleryImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={`group shrink-0 snap-center overflow-hidden rounded-md bg-slate-100 w-[min(85vw,calc(100%-1rem))] max-w-sm md:w-auto md:max-w-none md:shrink ${
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
          </Reveal>
        </div>

        <Reveal>
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange sm:text-sm">
                Carrier Documentation
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-brand-charcoal">
                Request the exact setup file your team needs.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-brand-slate">
              Send the document name and onboarding context to operations so the reply can go
              straight to the right person.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {docs.map((doc) => (
              <div key={doc.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
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
        </Reveal>
      </div>
    </section>
  );
};

export default TrustCompliance;
