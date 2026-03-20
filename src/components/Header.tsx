export const Header = () => {
  return (
    <header className="bg-[#131313] text-[#E11D48] font-['Space_Grotesk'] tracking-tighter uppercase font-bold docked full-width top-0 border-b-0 flex justify-between items-center w-full px-6 py-4 border-b border-white/10 sticky z-50">
      <div className="text-xl font-black text-[#E11D48] tracking-widest flex items-center gap-2">
        <span className="material-symbols-outlined" data-icon="terminal">
          terminal
        </span>
        &gt; GDG_TACNA
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a
          className="text-[#E11D48] before:content-['>'] before:mr-1 transition-transform active:scale-95"
          href="#events"
        >
          EVENTS
        </a>
        <a
          className="text-white/60 hover:text-white transition-colors hover:bg-[#E11D48]/10 px-2 py-1 active:scale-95"
          href="#docs"
        >
          DOCS
        </a>
        <a
          className="text-white/60 hover:text-white transition-colors hover:bg-[#E11D48]/10 px-2 py-1 active:scale-95"
          href="#source"
        >
          SOURCE
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <span
          className="material-symbols-outlined text-[#E11D48] cursor-pointer"
          data-icon="terminal"
        >
          terminal
        </span>
      </div>
    </header>
  );
};
