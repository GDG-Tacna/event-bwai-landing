import { TerminalCursor } from '@/components/TerminalCursor';

export const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] font-mono text-sm tracking-widest w-full px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8 border-t border-white/5 mt-20">
      <div className="space-y-4">
        <div className="text-[#10B981] font-bold text-lg uppercase">
          Organizado por Google Developer Group Tacna. 2026.
        </div>
        <div className="flex gap-6">
          <a
            className="text-white/40 hover:text-[#E11D48] transition-colors uppercase"
            href="#github"
          >
            GITHUB
          </a>
          <a
            className="text-white/40 hover:text-[#E11D48] transition-colors uppercase"
            href="#guidelines"
          >
            COMMUNITY_GUIDELINES
          </a>
          <a
            className="text-white/40 hover:text-[#E11D48] transition-colors uppercase"
            href="#contact"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-white/20 text-xs">VERSION: 4.2.0-TACNA</div>
        <div className="text-[#10B981] font-mono flex items-center">
          invitado@gdgtacna:~$ _ <TerminalCursor className="w-2 h-4 bg-[#10B981] ml-1" />
        </div>
      </div>
    </footer>
  );
};
