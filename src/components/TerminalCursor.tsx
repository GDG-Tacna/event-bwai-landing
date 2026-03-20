import { motion } from 'framer-motion';

export const TerminalCursor = ({ className = '' }: { className?: string }) => {
  return (
    <motion.span
      className={`inline-block align-middle ${className}`}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
};
