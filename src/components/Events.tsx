import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const EventCard = ({
  icon,
  command,
  title,
  description,
  date,
  type,
  iconDate,
  iconType,
}: {
  icon: string;
  command: string;
  title: string;
  description: string;
  date: string;
  type: string;
  iconDate: string;
  iconType: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="group relative bg-surface border border-[#064e3b] hover:border-secondary transition-colors p-8 flex flex-col justify-between min-h-[320px] overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="material-symbols-outlined text-7xl">{icon}</span>
      </div>

      <div>
        <motion.div
          variants={defaultVariants}
          className="text-[10px] font-mono text-secondary mb-4 tracking-widest uppercase"
        >
          {command}
        </motion.div>
        <motion.h3
          variants={defaultVariants}
          className="text-2xl font-bold text-on-surface mb-2 uppercase leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={defaultVariants}
          className="text-on-surface-variant text-sm mb-6 max-w-xs"
        >
          {description}
        </motion.p>
      </div>

      <motion.div variants={defaultVariants} className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-on-surface font-mono text-sm">
          <span className="material-symbols-outlined text-secondary text-sm">{iconDate}</span>
          {date}
        </div>
        <div className="flex items-center gap-2 text-on-surface font-mono text-sm">
          <span className="material-symbols-outlined text-secondary text-sm">{iconType}</span>
          {type}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Events = () => {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-primary-container font-mono text-base sm:text-xl">&gt;</span>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight uppercase">
          ./listar_eventos_ia --tacna
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EventCard
          icon="memory"
          command="bash install-dependencies.sh"
          title="Road to Build with AI Tacna 2026"
          description="Preparación técnica intensiva y configuración de entornos para la temporada de IA."
          date="28 de Marzo, 2026"
          type="Prep session"
          iconDate="calendar_today"
          iconType="settings"
        />
        <EventCard
          icon="smart_toy"
          command="gemini run build-with-ai.py --project 'tacna'"
          title="Build with AI Tacna 2026"
          description="El evento principal donde construiremos soluciones reales utilizando modelos de Gemini."
          date="11 de Abril, 2026"
          type="Main event"
          iconDate="event"
          iconType="stars"
        />
      </div>
    </section>
  );
};
