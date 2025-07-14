'use client';

import { motion } from 'framer-motion';

interface CodeCommand {
  command: string;
  description: string;
  gistUrl?: string;
}

interface CodeBlockProps {
  commands: CodeCommand[];
}

export default function CodeBlock({ commands }: CodeBlockProps) {
  return (
    <div className="space-y-6">
      {commands.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group relative"
        >
          <div className="bg-background/50 border border-primary/30 rounded-lg p-6 
                          hover:border-primary/60 hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <code className="text-2xl font-mono text-primary">
                {item.command}
              </code>
              {item.gistUrl && (
                <a
                  href={item.gistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200"
                >
                  View Gist →
                </a>
              )}
            </div>
            <p className="text-lg text-foreground/80">
              {item.description}
            </p>
          </div>
          
          {/* Decorative arrow */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 
                          text-primary/40 text-2xl opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300">
            →
          </div>
        </motion.div>
      ))}
    </div>
  );
}