interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header className="bg-surface text-primary font-['Space_Grotesk'] tracking-tighter uppercase font-bold docked full-width top-0 flex justify-between items-center w-full px-6 py-4 border-b border-outline-variant sticky z-50 transition-colors duration-300">
      <div className="text-xl font-black text-primary tracking-widest flex items-center gap-2">
        <span className="material-symbols-outlined" data-icon="terminal">
          terminal
        </span>
        &gt; GDG_TACNA
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a
          className="text-primary before:content-['>'] before:mr-1 transition-transform active:scale-95"
          href="#events"
        >
          EVENTS
        </a>
        <a
          className="text-on-surface/60 hover:text-on-surface transition-colors hover:bg-primary/10 px-2 py-1 active:scale-95"
          href="#docs"
        >
          DOCS
        </a>
        <a
          className="text-on-surface/60 hover:text-on-surface transition-colors hover:bg-primary/10 px-2 py-1 active:scale-95"
          href="#source"
        >
          SOURCE
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-colors active:scale-90"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </button>
        <span
          className="material-symbols-outlined text-primary cursor-pointer"
          data-icon="terminal"
        >
          terminal
        </span>
      </div>
    </header>
  );
};
