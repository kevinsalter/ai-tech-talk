import { useEffect, useCallback } from 'react';

export function useSlideKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Prevent shortcuts when typing in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Show keyboard shortcuts with '?'
      if (event.key === '?') {
        alert(
          'Keyboard Shortcuts:\n\n' +
          '→ or Space: Next slide\n' +
          '←: Previous slide\n' +
          'Home: First slide\n' +
          'End: Last slide\n' +
          'R: Resources page'
        );
      }

      // Go to resources with 'R'
      if (event.key.toLowerCase() === 'r') {
        window.location.href = '/resources';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
}