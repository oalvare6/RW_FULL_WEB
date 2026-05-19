import React, { useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  FileCheck2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import DriverApplicationForm from "./components/DriverApplicationForm";
import BackToTop from "./components/BackToTop";
import TrustCompliance from "./components/TrustCompliance";

const PHONE_HREF = "tel:+18324770896";
const EMAIL_HREF = "mailto:operations@riverwaylogistics.com";
const FMCSA_URL =
  "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Lanes", href: "#lanes" },
  { label: "Drivers", href: "#drivers" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center" aria-label="Riverway Logistics home">
          <img
            src="/images/logo.png"
            alt="Riverway Logistics"
            className="h-11 w-auto sm:h-14"
            width="180"
            height="67"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.12em] text-brand-slate transition-colors hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={FMCSA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-l border-slate-200 pl-4 text-right text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-brand-navy hover:text-brand-orange"
          >
            <span className="block">MC: 1473682 | DOT: 3955747</span>
            <span className="mt-1 flex items-center justify-end gap-1 text-[10px] font-semibold text-brand-slate">
              FMCSA Snapshot <ExternalLink className="h-3 w-3" />
            </span>
          </a>
          <a
            href={PHONE_HREF}
            className="btn-glow inline-flex min-h-[44px] items-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-slate-200 text-brand-navy transition-colors hover:border-brand-navy hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-bold uppercase tracking-[0.12em] text-brand-charcoal transition-colors hover:bg-slate-50 hover:text-brand-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <a
                href={FMCSA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 text-sm font-bold text-brand-navy"
              >
                <span>MC: 1473682 | DOT: 3955747</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-brand-orange-light"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const SectionIntro = ({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
}) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-brand-orange">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {body && <p className="mt-5 text-base leading-8 text-brand-slate sm:text-lg">{body}</p>}
  </div>
);

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => (
  <section className="relative isolate min-h-[680px] overflow-hidden bg-brand-navy-dark">
    <img
      className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
      src="/images/hero-flatbed-pipes.png"
      alt="Clean Peterbilt flatbed loaded with steel pipes on a sunny highway"
      width="1280"
      height="896"
    />
    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/78 to-brand-navy-dark/5 lg:w-[72%]" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy-dark/45 to-transparent" />

    <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full min-w-0 max-w-3xl pt-10">
        <p className="mb-5 inline-flex max-w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-left text-[11px] font-extrabold uppercase leading-5 tracking-[0.18em] text-brand-orange backdrop-blur sm:text-xs sm:tracking-[0.22em]">
          Asset-based flatbed motor carrier
        </p>
        <h1 className="font-display max-w-[11ch] text-[2.35rem] font-black leading-[1.05] text-white min-[420px]:text-5xl sm:max-w-none sm:text-6xl lg:text-7xl">
          Texas-Based Flatbed Carrier
        </h1>
        <p className="mt-7 max-w-2xl break-words text-base font-medium leading-8 text-slate-100 sm:text-lg lg:text-xl">
          Specializing in steel, pipe, and industrial freight. Consistent lanes between Houston,
          Georgia, and the Permian Basin.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn-glow inline-flex min-h-[54px] w-full items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-500/25 transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark sm:w-auto"
          >
            Book a Load
          </button>
          <a
            href="#drivers"
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-md border-2 border-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark sm:w-auto"
          >
            Drive With Us
          </a>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 text-sm font-bold text-white sm:grid-cols-3">
          <span className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <MapPin className="h-4 w-4 text-brand-orange" />
            Spring, TX
          </span>
          <span className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <FileCheck2 className="h-4 w-4 text-brand-orange" />
            MC 1473682
          </span>
          <span className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-orange" />
            DOT 3955747
          </span>
        </div>
      </div>
    </div>
  </section>
);

const TrustGrid = () => {
  const items = [
    {
      icon: Truck,
      title: "100% Asset-Based",
      body: "Direct carrier capacity with owned equipment, direct dispatch, and no freight marketplace handoff.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Compliance Driven",
      body: "Flatbed operations built around securement, inspections, documentation, and dependable communication.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Carrier",
      body: "Active authority with MC 1473682 and DOT 3955747 available for shipper and broker review.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="card-lift rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md border border-brand-orange/30 bg-orange-50 text-brand-orange">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-extrabold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CoreCapabilities = ({ onOpenQuote }: { onOpenQuote: () => void }) => (
  <section id="services" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Core Capabilities"
        title={
          <>
            Built for steel, pipe, and industrial freight that needs real flatbed discipline.
          </>
        }
        body="Riverway Logistics focuses on freight where securement, communication, and predictable lanes matter. The homepage is designed to make that specialization obvious from the first scroll."
      />

      <div className="mt-14 grid gap-10 lg:gap-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <img
              src="/images/flatbed.png"
              alt="Flatbed truck carrying steel products on a highway"
              className="h-full min-h-[320px] w-full object-cover"
              loading="lazy"
              width="1408"
              height="768"
            />
          </div>

          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-white">
              <Truck className="h-6 w-6" />
            </div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
              Freight Types
            </p>
            <h3 className="font-display text-3xl font-extrabold text-brand-charcoal">
              Flatbed freight with a clear industrial focus.
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Steel products", "Pipe and tubing", "Construction materials", "Industrial freight"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
                    <CheckCircle2 className="h-5 w-5 flex-none text-brand-orange" />
                    {item}
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-sm leading-7 text-brand-slate">
              Riverway is intentionally focused on flatbed-appropriate freight. That means no dry van,
              reefer, box truck, household goods, or passenger vehicle quoting.
            </p>
          </article>
        </div>

        <div id="lanes" className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="order-2 rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:order-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-white">
              <Route className="h-6 w-6" />
            </div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
              Primary Service Areas
            </p>
            <h3 className="font-display text-3xl font-extrabold text-brand-charcoal">
              Regional Texas and Southeast corridor coverage.
            </h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-display text-lg font-extrabold text-brand-navy">
                  Regional Texas
                </h4>
                <p className="mt-1 text-sm leading-7 text-brand-slate">
                  Focused flatbed service between Houston, Midland, and the Permian Basin.
                </p>
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-display text-lg font-extrabold text-brand-navy">
                  Southeast Corridor
                </h4>
                <p className="mt-1 text-sm leading-7 text-brand-slate">
                  Consistent lanes connecting Houston and Georgia for industrial freight partners.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-glow mt-7 inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Request Capacity
            </button>
          </article>

          <div className="order-1 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-900/10 lg:order-2">
            <img
              src="/images/trucks/truck-1.jpg"
              alt="Riverway Logistics Peterbilt flatbed truck in Texas"
              className="h-full min-h-[360px] w-full object-cover object-[45%_center]"
              loading="lazy"
              width="4032"
              height="3024"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Drivers = ({ onOpenDriverForm }: { onOpenDriverForm: () => void }) => {
  const [expanded, setExpanded] = React.useState(false);

  const highlights = [
    "1+ year flatbed experience required",
    "TX and Southeast regional lanes",
    "Home most weekends",
    "Company drivers and owner-operators welcome",
  ];

  const details = [
    "Weekly settlements with direct deposit",
    "Direct dispatch line with clear communication",
    "No forced dispatch",
    "Well-maintained equipment with regular inspections",
    "Professional, safety-first driver culture",
    "Consistent steel, pipe, and industrial loads",
  ];

  return (
    <section id="drivers" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-brand-navy shadow-2xl shadow-slate-900/20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-brand-orange">
                Driver Careers
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Built for flatbed drivers who care about safety and steady work.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Riverway is looking for experienced flatbed drivers who value professional equipment,
                consistent lanes, and direct communication with dispatch.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 flex-none text-brand-orange" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-slate-200 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-expanded={expanded}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                />
                More Driver Details
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-6 rounded-lg border border-white/10 bg-brand-navy-dark/60 p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {details.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-orange" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenDriverForm}
                className="btn-glow mt-8 inline-flex min-h-[52px] items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-500/25 transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Apply Now
              </button>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <img
                src="/images/trucks/truck-2.jpg"
                alt="Riverway Logistics flatbed equipment"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width="4032"
                height="3024"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-brand-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-white/90 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3 text-brand-navy">
                  <Clock3 className="h-5 w-5 text-brand-orange" />
                  <span className="font-display text-lg font-extrabold">Consistent Regional Work</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  Texas, Houston to Georgia, and Permian Basin lanes for professional flatbed drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const cards = [
    {
      icon: Phone,
      label: "Phone",
      detail: "Main Operations",
      value: "(832) 477-0896",
      href: PHONE_HREF,
    },
    {
      icon: Mail,
      label: "Email",
      detail: "Dispatch & Sales",
      value: "operations@riverwaylogistics.com",
      href: EMAIL_HREF,
    },
    {
      icon: MapPin,
      label: "Location",
      detail: "Headquarters",
      value: "Spring, Texas",
    },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Get In Touch"
          title="Talk to a flatbed carrier that knows the lane."
          body="Reach Riverway Logistics for capacity inquiries, carrier documentation, driver recruiting, or general operations questions."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-brand-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  {card.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-slate">{card.detail}</p>
                <p className="mt-4 break-words font-display text-xl font-extrabold text-brand-charcoal">
                  {card.value}
                </p>
              </>
            );

            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                className="card-lift rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition-colors hover:border-brand-orange/50"
              >
                {content}
              </a>
            ) : (
              <div
                key={card.label}
                className="card-lift rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy-dark text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
      <div>
        <img src="/images/logo-white.png" alt="Riverway Logistics" className="h-16 w-auto" />
        <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
          Asset-based flatbed transportation services based in Spring, Texas. Focused on steel,
          pipe, industrial freight, safety, compliance, and reliable execution.
        </p>
      </div>

      <div>
        <h4 className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-white">
          Carrier Authority
        </h4>
        <div className="mt-5 space-y-3 text-sm text-slate-400">
          <p>MC: 1473682</p>
          <p>DOT: 3955747</p>
          <a
            href={FMCSA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-brand-orange transition-colors hover:text-brand-orange-light"
          >
            FMCSA Snapshot <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-white">
          Quick Contact
        </h4>
        <div className="mt-5 space-y-4 text-sm text-slate-400">
          <a href={PHONE_HREF} className="flex items-center gap-3 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-brand-orange" />
            (832) 477-0896
          </a>
          <a href={EMAIL_HREF} className="flex items-center gap-3 transition-colors hover:text-white">
            <Mail className="h-4 w-4 text-brand-orange" />
            operations@riverwaylogistics.com
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-brand-orange" />
            Spring, Texas
          </p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Riverway Logistics. All rights reserved.</p>
        <a
          href="https://qronnect.pro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-slate-300"
        >
          <img src="/assets/qro-logo.png" alt="QRO" className="h-4 w-auto opacity-70" />
          Site by QRO
        </a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <TrustGrid />
        <CoreCapabilities onOpenQuote={() => setIsQuoteModalOpen(true)} />
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
