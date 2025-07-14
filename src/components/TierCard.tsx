'use client';

import { motion } from 'framer-motion';

interface TierCardProps {
  tier: 1 | 2 | 3;
  emoji: string;
  title: string;
  description: string;
  delay?: number;
}

export default function TierCard({ tier, emoji, title, description, delay = 0 }: TierCardProps) {
  // Color schemes for each tier
  const colorClasses = {
    1: {
      border: 'border-green-500',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      hover: 'hover:bg-green-500/20 hover:border-green-400',
    },
    2: {
      border: 'border-blue-500',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      hover: 'hover:bg-blue-500/20 hover:border-blue-400',
    },
    3: {
      border: 'border-amber-500',
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      hover: 'hover:bg-amber-500/20 hover:border-amber-400',
    },
  };

  const colors = colorClasses[tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`
        border-2 rounded-lg p-6 transition-all duration-300
        ${colors.border} ${colors.bg} ${colors.hover}
        cursor-pointer transform hover:scale-105
      `}
    >
      <div className="flex items-start gap-4">
        <div className="text-5xl flex-shrink-0">{emoji}</div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
            Tier {tier}: {title}
          </h3>
          <p className="text-lg text-foreground/80">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}