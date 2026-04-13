const QroBadge = () => (
  <a
    href="https://qronnect.pro"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:flex fixed bottom-5 left-5 z-40 items-center gap-2.5 px-4 py-2.5 bg-brand-navy-dark/95 border border-white/10 rounded-full shadow-lg hover:border-white/25 hover:bg-brand-navy-dark transition-all group"
  >
    <img
      src="/assets/qro-logo.png"
      alt="QRO"
      className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
    />
    <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">
      Need a website?
    </span>
  </a>
);

export default QroBadge;
