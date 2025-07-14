import { useEffect } from 'react';

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
          'Navigation:\n' +
          '→ or Space: Next slide\n' +
          '←: Previous slide\n' +
          'Home: First slide\n' +
          'End: Last slide\n\n' +
          'Timer Controls:\n' +
          'Shift+Space: Start/Pause timer\n' +
          'Shift+R: Reset timer'
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
}