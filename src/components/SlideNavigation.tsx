'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useKeypress from 'react-use-keypress';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
}

export default function SlideNavigation({ currentSlide, totalSlides }: SlideNavigationProps) {
  const router = useRouter();

  // Navigation functions
  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      router.push(`/slide/${currentSlide + 1}`);
    }
  }, [currentSlide, totalSlides, router]);

  const goToPreviousSlide = useCallback(() => {
    if (currentSlide > 1) {
      router.push(`/slide/${currentSlide - 1}`);
    } else if (currentSlide === 1) {
      router.push('/');
    }
  }, [currentSlide, router]);

  const goToHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const goToEnd = useCallback(() => {
    router.push(`/slide/${totalSlides}`);
  }, [totalSlides, router]);

  // Keyboard navigation
  useKeypress(['ArrowRight', ' ', 'Enter'], (event: KeyboardEvent) => {
    // Don't navigate with space if shift is pressed (timer control)
    if (event.key === ' ' && event.shiftKey) {
      return;
    }
    event.preventDefault();
    goToNextSlide();
  });

  useKeypress('ArrowLeft', (event: KeyboardEvent) => {
    event.preventDefault();
    goToPreviousSlide();
  });

  useKeypress('Home', (event: KeyboardEvent) => {
    event.preventDefault();
    goToHome();
  });

  useKeypress('End', (event: KeyboardEvent) => {
    event.preventDefault();
    goToEnd();
  });

  // Touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left - go to next slide
          goToNextSlide();
        } else {
          // Swiped right - go to previous slide
          goToPreviousSlide();
        }
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNextSlide, goToPreviousSlide]);

  // Click navigation (for slide area clicks)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Don't navigate if clicking on buttons, links, or interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.fixed') || // Don't navigate when clicking on fixed positioned elements like timer
        e.defaultPrevented // Check if event was already handled
      ) {
        return;
      }

      // Navigate based on click position
      const windowWidth = window.innerWidth;
      const clickX = e.clientX;

      if (clickX > windowWidth * 0.6) {
        // Clicked on right 40% - go next
        goToNextSlide();
      } else if (clickX < windowWidth * 0.4) {
        // Clicked on left 40% - go previous
        goToPreviousSlide();
      }
    };

    // Use capture phase to check before bubbling
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [goToNextSlide, goToPreviousSlide]);

  return null; // This component only handles navigation logic
}