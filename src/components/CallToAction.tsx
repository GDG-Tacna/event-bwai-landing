export const CallToAction = () => {
  return (
    <section className="max-w-3xl mx-auto text-center border-t border-white/5 pt-20">
      <div className="flex items-center justify-center gap-2 text-primary-container font-mono mb-8 text-sm md:text-base">
        <span className="text-secondary">invitado@gdgtacna:~$</span>
        <span className="text-on-surface">join_event --confirm</span>
      </div>
      <button className="group relative w-full overflow-hidden">
        <div className="bg-surface-container border border-outline-variant/30 px-6 py-8 text-on-surface font-mono text-lg md:text-2xl hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer">
          <pre className="whitespace-pre-wrap font-mono uppercase tracking-tighter">
            [ HAZ CLIC AQUÍ PARA REGISTRARTE Y RESERVAR TU LUGAR ]
          </pre>
        </div>
        <div className="absolute inset-0 bg-primary-container/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </button>
      <p className="mt-6 text-on-surface-variant font-mono text-xs uppercase tracking-widest opacity-50">
        Cupos limitados. Módulos de IA en proceso de asignación.
      </p>
    </section>
  );
};
