import { TerminalCursor } from '@/components/TerminalCursor';
import { AsciiArt } from '@/components/AsciiArt';
import { useState, useEffect } from 'react';

interface HeroProps {
  theme?: 'dark' | 'light';
}

export const Hero = ({ theme = 'dark' }: HeroProps) => {
  const [typedText, setTypedText] = useState(['', '', '', '']);

  useEffect(() => {
    const lines = [
      '> Cargando módulos de Tacna [OK]',
      '> Inicializando entorno de ejecución [OK]',
      '> Verificando conectividad local [OK]',
      '> ACCESO CONCEDIDO: DESPLEGANDO EVENTOS_2026',
    ];
    let currentLine = 0;
    let currentChar = 0;

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setTypedText((prev) => {
            const newText = [...prev];
            newText[currentLine] = lines[currentLine].substring(0, currentChar + 1);
            return newText;
          });
          currentChar++;
        } else {
          currentLine++;
          currentChar = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const renderTypedLine = (line: string, index: number) => {
    if (!line) return null;
    if (line.startsWith('>')) {
      const accentClass = `accent-${(index % 3) + 1}`;
      return (
        <p key={index} className={index === 3 ? 'text-primary' : ''}>
          <span className={theme === 'light' ? accentClass : 'text-primary'}>&gt;</span>
          {line.substring(1)}
        </p>
      );
    }
    return <p key={index}>{line}</p>;
  };

  return (
    <div className="w-full transition-colors duration-300">
      {/* Header Banner Section */}
      <section className="mb-16 border-l-4 border-primary pl-6 py-2 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <p className="text-primary font-mono tracking-widest text-sm mb-2 opacity-80 uppercase">
            {'// Bienvenido a GDG Tacna - AI Season 2026.'}
          </p>
          <div className="relative inline-block w-full max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-on-surface uppercase leading-none break-words">
              GDG_TACNA<span className="text-primary">.</span>AI
            </h1>
            <div className="hidden sm:block absolute -top-4 -right-8 bg-secondary px-2 py-0.5 text-[10px] text-on-secondary font-bold tracking-widest whitespace-nowrap">
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
        <div className="bg-surface-container-lowest p-4 sm:p-6 border border-outline-variant shadow-[0_0_30px_rgba(225,29,72,0.05)] overflow-x-auto overflow-y-hidden">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-primary font-mono mb-4 text-xs sm:text-base">
            <span className="text-secondary shrink-0">invitado@gdgtacna:~$</span>
            <span className="text-on-surface break-all sm:break-normal">
              gemini deploy --event &apos;build with ai&apos;
            </span>
            <TerminalCursor className="w-2 h-4 sm:w-3 sm:h-6 bg-primary ml-1 shrink-0" />
          </div>
          <div className="font-mono text-on-surface/80 ml-2 sm:ml-4 space-y-2 sm:space-y-1 text-xs sm:text-base whitespace-pre-wrap sm:whitespace-normal min-h-[6rem]">
            {typedText.map((line, index) => renderTypedLine(line, index))}
          </div>
        </div>
      </section>
    </div>
  );
};
