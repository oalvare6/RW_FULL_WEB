import { ExternalLink } from "lucide-react";

const FMCSA_URL =
  "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3955747&query_type=queryCarrierSnapshot&searchtype=ANY";

const AuthorityBar = () => (
  <div
    className="sticky top-0 z-[60] border-b border-white/10 bg-brand-navy-dark text-slate-200"
    aria-label="Carrier authority information"
  >
    <div className="mx-auto flex h-[var(--authority-bar-height)] max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] sm:gap-3 sm:text-xs sm:tracking-[0.1em]">
        <span className="shrink-0 whitespace-nowrap">MC 1473682</span>
        <span className="text-white/30" aria-hidden="true">
          ·
        </span>
        <span className="shrink-0 whitespace-nowrap">DOT 3955747</span>
        <span className="hidden text-white/30 min-[360px]:inline" aria-hidden="true">
          ·
        </span>
        <span className="hidden truncate min-[360px]:inline">Spring, TX</span>
      </div>
      <a
        href={FMCSA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-orange transition-colors hover:text-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange sm:gap-1.5 sm:text-xs"
      >
        <span className="hidden sm:inline">FMCSA Snapshot</span>
        <span className="sm:hidden">FMCSA</span>
        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </a>
    </div>
  </div>
);

export default AuthorityBar;
