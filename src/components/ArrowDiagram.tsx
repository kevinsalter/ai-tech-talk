'use client';

import { motion } from 'framer-motion';

const steps = [
  { id: 1, label: 'Brainstorm', short: 'Brainstorm' },
  { id: 2, label: 'Generate PRD', short: 'Generate\nPRD' },
  { id: 3, label: 'Scrutinize PRD', short: 'Scrutinize\nPRD' },
  { id: 4, label: 'Create Task List', short: 'Create\nTask List' },
  { id: 5, label: 'Scrutinize Order & Dependencies of Task List', short: 'Scrutinize\nOrder & Deps' },
  { id: 6, label: 'Complete Tasks', short: 'Complete\nTasks' },
  { id: 7, label: 'Commit', short: 'Commit' },
  { id: 8, label: 'Generate Tests', short: 'Generate\nTests' },
  { id: 9, label: 'Create Manual QA Steps', short: 'Create Manual\nQA Steps' },
  { id: 10, label: 'Write helper scripts (if needed)', short: 'Write Helper\nScripts' },
  { id: 11, label: 'Write Documentation', short: 'Write\nDocumentation' },
];

export default function ArrowDiagram() {
  // Responsive sizing based on screen size - optimized for perfect circular spacing
  const getDimensions = () => {
    if (typeof window !== 'undefined') {
      const isSmall = window.innerWidth < 768;
      const isMedium = window.innerWidth < 1024;
      
      if (isSmall) {
        return { size: 580, radius: 210, stepWidth: 100, stepHeight: 58 };
      } else if (isMedium) {
        return { size: 720, radius: 270, stepWidth: 120, stepHeight: 62 };
      }
    }
    return { size: 820, radius: 310, stepWidth: 130, stepHeight: 66 };
  };

  const { size, radius, stepWidth, stepHeight } = getDimensions();
  const centerX = size / 2;
  const centerY = size / 2;
  
  const getPosition = (index: number) => {
    // Start at top (12 o'clock) and go clockwise with precise equal spacing
    const degreesPerStep = 360 / 11; // Exactly 32.727272... degrees per step
    const angle = (index * degreesPerStep - 90) * (Math.PI / 180); // -90 to start at top
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Get arrow direction from current step to next step
  const getArrowDirection = (index: number) => {
    const current = getPosition(index);
    const next = getPosition((index + 1) % 11);
    const angle = Math.atan2(next.y - current.y, next.x - current.x) * (180 / Math.PI);
    return angle;
  };

  return (
    <div className="flex flex-col items-center my-8 max-w-5xl mx-auto px-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="absolute inset-0">
          {/* Circle path for reference (hidden) */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="transparent"
          />
          
          {/* Arrows between steps */}
          {steps.map((_, index) => {
            const current = getPosition(index);
            const next = getPosition((index + 1) % 11);
            const angle = getArrowDirection(index);
            
            // Calculate arrow position (centered between current and next step)
            const arrowX = current.x + (next.x - current.x) * 0.5;
            const arrowY = current.y + (next.y - current.y) * 0.5;
            
            return (
              <motion.g
                key={`arrow-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <text
                  x={arrowX}
                  y={arrowY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-primary text-xl md:text-2xl font-bold"
                  transform={`rotate(${angle}, ${arrowX}, ${arrowY})`}
                >
                  →
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Steps positioned in circle */}
        {steps.map((step, index) => {
          const position = getPosition(index);
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute"
              style={{
                left: position.x - stepWidth / 2,
                top: position.y - stepHeight / 2,
              }}
            >
              <div 
                className="bg-background border-2 border-primary rounded-lg 
                          flex items-center justify-center text-center
                          hover:bg-primary/10 hover:border-primary/80 hover:shadow-lg
                          hover:scale-105 transition-all duration-200 cursor-pointer"
                style={{ width: stepWidth, height: stepHeight }}
              >
                <div>
                  <div className="text-xs font-bold text-primary mb-1">
                    {step.id}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-foreground whitespace-pre-line leading-tight">
                    {step.short}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Center rotating arrow - 75% of inner circle space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute"
          style={{
            left: centerX - (radius * 0.75) / 2,
            top: centerY - (radius * 0.75) / 2,
          }}
        >
          <div 
            className="relative flex items-center justify-center"
            style={{
              width: radius * 0.75,
              height: radius * 0.75,
            }}
          >
            {/* Large rotating arrow filling 75% of center space */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute text-primary/25"
              style={{
                fontSize: `${radius * 0.4}px`,
                lineHeight: 1,
              }}
            >
              ↻
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Center label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 text-center"
      >
        <h3 className="text-2xl font-bold text-foreground/20">AI Development Loop</h3>
      </motion.div>
    </div>
  );
}