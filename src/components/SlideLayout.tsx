'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
// import PresentationTimer from './PresentationTimer';

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
  showNavigation?: boolean;
  showProgress?: boolean;
}

export default function SlideLayout({
  children,
  slideNumber,
  totalSlides,
  showNavigation = true,
  showProgress = true,
}: SlideLayoutProps) {
  const progress = (slideNumber / totalSlides) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Presentation Timer - Hidden */}
      {/* <PresentationTimer timeLimit={300} /> */}
      
      {/* Main content area */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="slide-container px-8 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24"
      >
        {children}
      </motion.main>

      {/* Slide number indicator */}
      <div className="absolute bottom-8 left-8 text-muted text-lg md:text-xl">
        {slideNumber} / {totalSlides}
      </div>


      {/* Navigation controls */}
      {showNavigation && (
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <Link
            href={slideNumber > 1 ? `/slide/${slideNumber - 1}` : '/'}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
          
          <Link
            href="/"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>

          <Link
            href={slideNumber < totalSlides ? `/slide/${slideNumber + 1}` : `/slide/${totalSlides}`}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      )}

      {/* Progress bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}
    </div>
  );
}