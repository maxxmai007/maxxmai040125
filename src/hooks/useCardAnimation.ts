import { useCallback, useRef } from 'react';

export function useCardAnimation() {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const animateCard = useCallback((
    element: HTMLElement,
    index: number,
    totalCards: number
  ) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Calculate final position
    const yOffset = index * 20; // 20px spacing between cards
    const rotation = (Math.random() * 6 - 3); // Random rotation between -3 and 3 degrees

    // Initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(-100%) rotateX(45deg) scale(0.9)';

    // Trigger animation after delay
    timeoutRef.current = setTimeout(() => {
      element.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      element.style.opacity = '1';
      element.style.transform = `translateY(${yOffset}px) rotateZ(${rotation}deg) scale(1)`;

      // Add floating animation after landing
      const animation = element.animate(
        [
          { transform: `translateY(${yOffset}px) rotateZ(${rotation}deg)` },
          { transform: `translateY(${yOffset - 5}px) rotateZ(${rotation}deg)` },
          { transform: `translateY(${yOffset}px) rotateZ(${rotation}deg)` },
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out',
          delay: 1200, // Start after initial animation
        }
      );

      // Store animation reference
      element.dataset.floatAnimation = String(animation);
    }, index * 200);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Clean up float animation if it exists
      const floatAnimation = element.dataset.floatAnimation;
      if (floatAnimation) {
        delete element.dataset.floatAnimation;
      }
    };
  }, []);

  return { animateCard };
}