import { TerminalCursor } from '@/components/TerminalCursor';
import { AsciiArt } from '@/components/AsciiArt';

export const Hero = () => {
  return (
    <div className="w-full">
      {/* Header Banner Section */}
      <section className="mb-16 border-l-4 border-primary-container pl-6 py-2 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <p className="text-primary-container font-mono tracking-widest text-sm mb-2 opacity-80 uppercase">
            {'// Bienvenido a GDG Tacna - AI Season 2026.'}
          </p>
          <div className="relative inline-block w-full max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-on-surface uppercase leading-none break-words">
              GDG_TACNA<span className="text-primary-container">.</span>AI
            </h1>
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-8 bg-secondary px-2 py-0.5 text-[8px] sm:text-[10px] text-on-secondary font-bold tracking-widest whitespace-nowrap">
              STABLE_BUILD_2026
            </div>
          </div>
        </div>

        {/* Arte ASCII - Oculto en móviles */}
        <div className="hidden lg:block opacity-80 shrink-0">
          <AsciiArt />
        </div>
      </section>

      {/* Hero Prompt Section */}
      <section className="mb-24 space-y-4">
        <div className="bg-surface-container-lowest p-4 sm:p-6 border border-outline-variant/20 shadow-[0_0_30px_rgba(225,29,72,0.05)] overflow-x-auto overflow-y-hidden">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-primary-container font-mono mb-4 text-xs sm:text-base">
            <span className="text-secondary shrink-0">invitado@gdgtacna:~$</span>
            <span className="text-on-surface break-all sm:break-normal">
              gemini deploy --event &apos;build with ai&apos;
            </span>
            <TerminalCursor className="w-2 h-4 sm:w-3 sm:h-6 bg-primary-container ml-1 shrink-0" />
          </div>
          <div className="font-mono text-secondary/80 ml-2 sm:ml-4 space-y-2 sm:space-y-1 text-xs sm:text-base whitespace-pre-wrap sm:whitespace-normal">
            <p>&gt; Cargando módulos de Tacna... [OK]</p>
            <p>&gt; Inicializando entorno de ejecución... [OK]</p>
            <p>&gt; Verificando conectividad local... [OK]</p>
            <p className="text-primary-container">
              &gt; ACCESO CONCEDIDO: DESPLEGANDO EVENTOS_2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
