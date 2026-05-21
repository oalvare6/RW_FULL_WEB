import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  FileCheck2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import DriverApplicationForm from "./components/DriverApplicationForm";
import BackToTop from "./components/BackToTop";
import TrustCompliance from "./components/TrustCompliance";
import AuthorityBar from "./components/AuthorityBar";
import Reveal from "./components/Reveal";

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

type LaneState = {
  abbr: string;
  label: string;
};

type LaneCorridor = {
  name: string;
  description: string;
  states: LaneState[];
  note?: string;
};

const LANE_CORRIDORS: LaneCorridor[] = [
  {
    name: "Texas & Southern Plains",
    description:
      "Reliable flatbed service from our Spring, TX home base across Texas and into Oklahoma—supporting Houston, Permian Basin, and regional industrial partners who need steady capacity.",
    states: [
      { abbr: "TX", label: "Texas" },
      { abbr: "OK", label: "Oklahoma" },
    ],
  },
  {
    name: "Southeast Corridor",
    description:
      "Recurring lanes through the Gulf South and Atlantic Southeast for brokers and shippers who value securement discipline, clear dispatch communication, and consistent execution.",
    states: [
      { abbr: "TN", label: "Tennessee" },
      { abbr: "KY", label: "Kentucky" },
      { abbr: "AL", label: "Alabama" },
      { abbr: "MS", label: "Mississippi" },
      { abbr: "GA", label: "Georgia" },
      { abbr: "SC", label: "South Carolina" },
      { abbr: "NC", label: "North Carolina" },
    ],
  },
  {
    name: "Midwest & Mid-Atlantic Connections",
    description:
      "Targeted connections into central Midwest points and the Greater Philadelphia area for project freight and industrial accounts that fit flatbed operations.",
    states: [
      { abbr: "MO", label: "Missouri" },
      { abbr: "PA", label: "Pennsylvania — Philadelphia area" },
    ],
    note: "PA service focused on the Philadelphia metro.",
  },
];

const OPERATING_SIGNALS = [
  {
    label: "Freight focus",
    value: "Steel, pipe, construction",
    detail: "Flatbed-appropriate freight, quoted with lane and securement context.",
  },
  {
    label: "Home base",
    value: "Spring, Texas",
    detail: "Texas-based dispatch with recurring Southeast and regional lanes.",
  },
  {
    label: "Authority",
    value: "MC 1473682 / DOT 3955747",
    detail: "Carrier details stay visible for broker and shipper verification.",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`relative sticky top-[var(--authority-bar-height)] z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
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
            Talk to Dispatch
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
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-navy-dark/50 lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div className="absolute left-0 top-full z-50 w-full border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
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
                className="flex items-start justify-between gap-3 text-sm font-bold text-brand-navy"
              >
                <span className="break-words">MC: 1473682 | DOT: 3955747</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={PHONE_HREF}
                className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-brand-orange-light"
              >
                <Phone className="h-4 w-4" />
                Talk to Dispatch
              </a>
            </div>
          </div>
          </div>
        </>
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
  <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {body && <p className="mt-5 text-base leading-8 text-brand-slate sm:text-lg">{body}</p>}
  </Reveal>
);

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => (
  <section className="relative isolate overflow-hidden bg-brand-navy-dark logistics-surface">
    <img
      className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
      src="/images/hero-flatbed-pipes.png"
      alt="Clean Peterbilt flatbed loaded with steel pipes on a sunny highway"
      width="1280"
      height="896"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/82 to-brand-navy-dark/18" />
    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-navy-dark/65 to-transparent" />

    <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-16 sm:min-h-[640px] sm:px-6 lg:min-h-[700px] lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:py-20">
      <div className="w-full min-w-0 max-w-3xl pt-6 sm:pt-8">
        <p className="animate-fade-up mb-5 inline-flex max-w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-left text-[10px] font-extrabold uppercase leading-4 tracking-[0.16em] text-brand-orange backdrop-blur sm:text-xs sm:leading-5">
          Asset-based flatbed carrier / Spring, TX
        </p>
        <h1 className="animate-fade-up animation-delay-100 font-display max-w-[13ch] text-[2.55rem] font-black leading-[1.02] text-white min-[420px]:max-w-none min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
          Flatbed freight moved with lane discipline.
        </h1>
        <p className="animate-fade-up animation-delay-200 mt-7 max-w-2xl break-words text-base font-medium leading-8 text-slate-100 sm:text-lg lg:text-xl">
          Steel, pipe, construction materials, and industrial loads across Texas, the Southeast,
          and select Midwest and Mid-Atlantic markets.
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn-glow inline-flex min-h-[54px] w-full items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-xl shadow-orange-500/25 transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark sm:w-auto"
          >
            Request Flatbed Capacity
          </button>
          <a
            href="#drivers"
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-md border border-white/70 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-brand-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark sm:w-auto"
          >
            Driver Opportunities
          </a>
        </div>

        <div className="animate-fade-up animation-delay-400 mt-12 flex flex-wrap gap-3 text-sm font-bold text-white">
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <MapPin className="h-4 w-4 text-brand-orange" />
            Spring, TX
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <FileCheck2 className="h-4 w-4 text-brand-orange" />
            MC 1473682
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-orange" />
            DOT 3955747
          </span>
        </div>
      </div>

      <aside className="animate-fade-up animation-delay-500 hidden rounded-xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl lg:block">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
          Dispatch Snapshot
        </p>
        <div className="mt-5 space-y-4">
          {OPERATING_SIGNALS.map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-brand-navy-dark/45 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
                {item.label}
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </section>
);

const TrustGrid = () => {
  const items = [
    {
      signal: "Capacity",
      title: "Asset-Based Capacity",
      body: "Direct Riverway equipment and dispatch for loads that match flatbed operations.",
    },
    {
      signal: "Securement",
      title: "Securement-Minded",
      body: "Steel, pipe, and construction freight handled with documentation and load details up front.",
    },
    {
      signal: "Authority",
      title: "Authority Visible",
      body: "MC 1473682 and DOT 3955747 stay one click away for broker and shipper setup.",
    },
  ];

  return (
    <section className="relative z-10 border-y border-slate-200/70 bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:grid-cols-3">
          {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full border-b border-slate-200 p-6 md:border-b-0 md:border-r md:last:border-r-0 lg:p-7">
                  <div className="flex h-full flex-col">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="h-px flex-1 bg-gradient-to-r from-brand-orange/70 to-transparent" />
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-orange">
                        {item.signal}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-extrabold text-brand-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-slate">{item.body}</p>
                  </div>
                </article>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreCapabilities = ({ onOpenQuote }: { onOpenQuote: () => void }) => (
  <section id="services" className="bg-slate-50 py-20 logistics-surface sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Core Capabilities"
        title={
          <>
            Built for steel, pipe, and industrial freight that needs real flatbed discipline.
          </>
        }
        body="Riverway keeps the operation narrow on purpose: flatbed freight, clear lane fit, and the details dispatch needs before a truck is committed."
      />

      <div className="mt-14 grid gap-10 lg:gap-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white strong-panel-shadow">
            <img
              src="/images/flatbed.png"
              alt="Flatbed truck carrying steel products on a highway"
              className="h-full min-h-[240px] w-full object-cover sm:min-h-[320px]"
              loading="lazy"
              width="1408"
              height="768"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-brand-navy-dark/80 p-4 text-white backdrop-blur">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-orange">
                Quote Fit
              </p>
              <p className="mt-1 text-sm font-semibold leading-6">
                Flatbed freight only: no dry van, reefer, box truck, household goods, or passenger vehicles.
              </p>
            </div>
          </div>
          </Reveal>

          <Reveal delay={100}>
          <article className="rounded-xl border border-slate-200 bg-white p-7 soft-panel-shadow sm:p-9">
            <p className="mb-3 inline-flex border-b-2 border-brand-orange pb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
              Freight Focus
            </p>
            <h3 className="font-display text-3xl font-extrabold text-brand-charcoal">
              Flatbed freight with a clear industrial focus.
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Steel products", "Pipe and tubing", "Construction materials", "Industrial freight"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
                    <span className="h-1.5 w-6 flex-none rounded-full bg-brand-orange" aria-hidden="true" />
                    {item}
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-sm leading-7 text-brand-slate">
              Requests are easier to route when the freight profile is clear from the start: what is
              moving, how it needs to be secured, and which lane it belongs on.
            </p>
          </article>
          </Reveal>
        </div>

        <div id="lanes" className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
          <article className="order-2 rounded-xl border border-slate-200 bg-white p-7 soft-panel-shadow sm:p-9 lg:order-1">
            <p className="mb-3 inline-flex border-b-2 border-brand-orange pb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
              Primary Service Areas
            </p>
            <h3 className="font-display text-3xl font-extrabold text-brand-charcoal">
              Texas-origin flatbed lanes with focused Southeast reach.
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              Capacity is positioned around lanes that make sense for Riverway equipment: Texas,
              Gulf South, Atlantic Southeast, and select industrial markets beyond.
            </p>
            <div className="mt-6 space-y-4">
              {LANE_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.name}
                  className="rounded-lg border border-slate-200 bg-slate-50/80 p-4 transition-colors hover:bg-white"
                >
                  <h4 className="font-display text-lg font-extrabold text-brand-navy">
                    {corridor.name}
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-brand-slate">{corridor.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label={`${corridor.name} states`}>
                    {corridor.states.map((state) => (
                      <span
                        key={state.abbr}
                        role="listitem"
                        className="inline-flex rounded-md border border-brand-orange/30 bg-orange-50 px-2.5 py-1 text-xs font-extrabold tracking-wide text-brand-navy"
                        aria-label={state.label}
                        title={state.label}
                      >
                        {state.abbr}
                      </span>
                    ))}
                  </div>
                  {corridor.note && (
                    <p className="mt-2 text-xs leading-5 text-brand-slate">{corridor.note}</p>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-glow mt-7 inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Check This Lane
            </button>
          </article>
          </Reveal>

          <Reveal delay={100}>
          <div className="order-1 overflow-hidden rounded-xl border border-slate-200 bg-white strong-panel-shadow lg:order-2">
            <img
              src="/images/trucks/truck-1.jpg"
              alt="Riverway Logistics Peterbilt flatbed truck in Texas"
              className="h-full min-h-[240px] w-full object-cover object-[45%_center] sm:min-h-[320px] md:min-h-[360px]"
              loading="lazy"
              width="4032"
              height="3024"
            />
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const Drivers = ({ onOpenDriverForm }: { onOpenDriverForm: () => void }) => {
  const [expanded, setExpanded] = React.useState(false);

  const highlights = [
    "1+ year flatbed experience required",
    "Texas through Southeast and select Midwest/Mid-Atlantic lanes",
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
        <div className="overflow-hidden rounded-2xl bg-brand-navy strong-panel-shadow">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
                Driver Desk
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Built for flatbed drivers who care about safety and steady work.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Riverway is looking for experienced flatbed drivers who want direct dispatch,
                professional equipment, and freight that fits the work.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white">
                    <span className="mt-2 h-1.5 w-5 flex-none rounded-full bg-brand-orange" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                className="mt-7 inline-flex items-center gap-2 rounded-md px-1 py-2 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-expanded={expanded}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                />
                More Driver Details
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
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
              </div>

              <button
                type="button"
                onClick={onOpenDriverForm}
                className="btn-glow mt-8 inline-flex min-h-[52px] items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-xl shadow-orange-500/25 transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Start Driver Application
              </button>
            </div>
            </Reveal>

            <Reveal delay={120}>
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <img
                src="/images/trucks/truck-2.jpg"
                alt="Riverway Logistics flatbed equipment"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width="4032"
                height="3024"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-brand-navy/10" />
              <div className="absolute bottom-5 left-5 max-w-[min(23rem,calc(100%-2.5rem))] rounded-lg border border-white/15 bg-brand-navy-dark/65 p-4 text-white backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
                  <span className="font-display text-lg font-extrabold">Regional Flatbed Work</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Texas through the Southeast and select Midwest/Mid-Atlantic lanes, with flatbed
                  experience required.
                </p>
              </div>
            </div>
            </Reveal>
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
      detail: "Capacity & dispatch",
      value: "(832) 477-0896",
      href: PHONE_HREF,
    },
    {
      icon: Mail,
      label: "Email",
      detail: "Quotes, setup docs, recruiting",
      value: "operations@riverwaylogistics.com",
      href: EMAIL_HREF,
    },
    {
      icon: MapPin,
      label: "Location",
      detail: "Texas home base",
      value: "Spring, Texas",
    },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20 logistics-surface sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Operations Contact"
          title="Get the right Riverway contact path without digging."
          body="Use the same operations line for capacity, setup documents, driver interest, and lane-fit questions. Include the lane, freight type, timing, and best callback number when possible."
          align="center"
        />

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-brand-navy p-7 text-white sm:p-8 lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              When you reach out
            </p>
            <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight">
              Send the lane. We will route the request.
            </h3>
            <div className="mt-7 space-y-4 text-sm leading-7 text-slate-200">
              <p>For quotes: origin, destination, freight type, dimensions, weight, and pickup window.</p>
              <p>For setup docs: request the exact document or carrier packet needed for onboarding.</p>
              <p>For drivers: include flatbed experience, CDL state, and best callback time.</p>
            </div>
          </div>
          <div className="grid gap-0 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-orange">
                  {card.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-slate">{card.detail}</p>
                <p className="mt-4 break-words font-display text-xl font-extrabold text-brand-charcoal">
                  {card.value}
                </p>
              </>
            );

            return card.href ? (
              <Reveal key={card.label} delay={index * 80}>
                <a
                  href={card.href}
                  className="block h-full border-b border-slate-200 bg-white p-7 transition-colors hover:bg-slate-50 md:border-r md:last:border-r-0 lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r xl:last:border-r-0"
                >
                  {content}
                </a>
              </Reveal>
            ) : (
              <Reveal key={card.label} delay={index * 80}>
                <div className="h-full border-b border-slate-200 bg-white p-7 md:border-r md:last:border-r-0 lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r xl:last:border-r-0">
                  {content}
                </div>
              </Reveal>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy-dark text-slate-300 logistics-surface">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
      <div>
        <img src="/images/logo-white.png" alt="Riverway Logistics" className="h-16 w-auto" />
        <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
          Spring, Texas flatbed carrier focused on steel, pipe, construction materials, industrial
          freight, and lane-fit communication before the truck rolls.
        </p>
      </div>

      <div>
        <h4 className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-white">
          Carrier Record
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
          Operations Line
        </h4>
        <div className="mt-5 space-y-4 text-sm text-slate-400">
          <a href={PHONE_HREF} className="flex items-center gap-3 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-brand-orange" />
            <span>
              <span className="block text-slate-300">(832) 477-0896</span>
              <span className="text-xs text-slate-500">Capacity, dispatch, and driver inquiries</span>
            </span>
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center gap-3 break-words transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0 text-brand-orange" />
            <span>
              <span className="block break-all text-slate-300">operations@riverwaylogistics.com</span>
              <span className="text-xs text-slate-500">Quotes and setup documents</span>
            </span>
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-brand-orange" />
            <span>
              <span className="block text-slate-300">Spring, Texas</span>
              <span className="text-xs text-slate-500">Texas-based flatbed operations</span>
            </span>
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
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-brand-cream">
      <AuthorityBar />
      <Header />
      <main className="overflow-x-clip">
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
