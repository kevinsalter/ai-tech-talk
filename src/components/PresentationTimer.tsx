'use client';

import { useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useTimer } from '@/contexts/TimerContext';

interface PresentationTimerProps {
  timeLimit?: number; // in seconds, default 5 minutes
}

export default function PresentationTimer({ timeLimit = 300 }: PresentationTimerProps) {
  const { seconds, isRunning, toggleTimer, resetTimer } = useTimer();

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const isOverTime = seconds > timeLimit;
  const percentageUsed = Math.min(100, (seconds / timeLimit) * 100);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' && e.shiftKey) {
        e.preventDefault();
        toggleTimer();
      } else if (e.key === 'r' && e.shiftKey) {
        e.preventDefault();
        resetTimer();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleTimer, resetTimer]);

  return (
    <div className="fixed top-4 right-4 z-50" onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}>
      <div className="bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-4">
          {/* Timer Display */}
          <div className="text-center">
            <div className={`text-2xl font-mono font-bold ${isOverTime ? 'text-danger animate-pulse' : 'text-foreground'}`}>
              {formatTime(seconds)}
            </div>
            <div className="text-xs text-muted mt-1">
              {isOverTime ? 'Over time!' : `of ${formatTime(timeLimit)}`}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${
                isOverTime ? 'bg-danger' : percentageUsed > 80 ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${Math.min(100, percentageUsed)}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTimer();
              }}
              className="p-2 rounded hover:bg-foreground/10 transition-colors"
              title={isRunning ? 'Pause (Shift+Space)' : 'Start (Shift+Space)'}
            >
              {isRunning ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetTimer();
              }}
              className="p-2 rounded hover:bg-foreground/10 transition-colors"
              title="Reset (Shift+R)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}