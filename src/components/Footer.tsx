import { TerminalCursor } from '@/components/TerminalCursor';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest font-mono text-sm tracking-widest w-full px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8 border-t border-outline-variant mt-20 transition-colors duration-300">
      <div className="space-y-4">
        <div className="text-secondary font-bold text-lg uppercase">
          Organizado por Google Developer Group Tacna. 2026.
        </div>
        <div className="flex gap-6">
          <a
            className="text-on-surface/40 hover:text-primary transition-colors uppercase"
            href="https://github.com/GDG-Tacna"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="hidden text-on-surface/40 hover:text-primary transition-colors uppercase"
            href="#guidelines"
          >
            COMMUNITY_GUIDELINES
          </a>
          <a
            className="text-on-surface/40 hover:text-primary transition-colors uppercase"
            href="https://chat.whatsapp.com/Ky6wXKxnEQmIsJ2cEqdDiD"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACTO
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-on-surface/20 text-xs">VERSIÓN: 4.2.0-TACNA</div>
        <div className="text-secondary font-mono flex items-center">
          invitado@gdgtacna:~$ _ <TerminalCursor className="w-2 h-4 bg-secondary ml-1" />
        </div>
      </div>
    </footer>
  );
};
