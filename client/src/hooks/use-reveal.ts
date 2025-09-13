import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useReveal(options: UseRevealOptions = {}) {
  const {
    threshold = 0.3,
    rootMargin = '0px 0px -15% 0px',
    once = true
  } = options;
  
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation and show immediately
      element.setAttribute('data-visible', 'true');
      setVisible(true);
      return;
    }

    // Progressive enhancement - if Intersection Observer is not supported
    if (!('IntersectionObserver' in window)) {
      element.setAttribute('data-visible', 'true');
      setVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          setVisible(true);
          
          if (once && observerRef.current) {
            observerRef.current.unobserve(entry.target);
            observerRef.current.disconnect();
          }
        } else if (!once) {
          entry.target.setAttribute('data-visible', 'false');
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    // Initially set as not visible
    element.setAttribute('data-visible', 'false');
    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}