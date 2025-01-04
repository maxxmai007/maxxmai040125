import { useEffect, useRef } from 'react';

export function useCardStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    // Initial setup for each card
    [1, 2, 3].forEach((index) => {
      const card = container.querySelector(`.card${index}`) as HTMLElement;
      if (!card) return;

      // Set initial position
      card.style.transform = 'translateY(-200%) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      card.style.transition = 'none';
      card.style.opacity = '0';

      // Force reflow
      card.offsetHeight;

      // Add transition
      card.style.transition = 'all 1500ms ease-out';

      // Trigger animation with appropriate delay
      const timeout = setTimeout(() => {
        card.style.opacity = '1';
        
        switch(index) {
          case 1: // Bottom card
            card.style.transform = 'translateX(0) translateY(0) translateZ(-100px) rotateX(20deg) rotateY(-15deg)';
            break;
          case 2: // Middle card
            card.style.transform = 'translateX(-30px) translateY(-30px) translateZ(-50px) rotateX(20deg) rotateY(-15deg)';
            break;
          case 3: // Top card
            card.style.transform = 'translateX(-60px) translateY(-60px) translateZ(0) rotateX(20deg) rotateY(-15deg)';
            break;
        }
      }, (index - 1) * 300);

      timeoutsRef.current.push(timeout);
    });

    // Cleanup function
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  return containerRef;
}