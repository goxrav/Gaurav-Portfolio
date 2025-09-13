import { ReactNode, createElement, CSSProperties } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function Reveal({ 
  as = 'div', 
  className, 
  delayMs = 0,
  children,
  threshold,
  rootMargin,
  once = true
}: RevealProps) {
  const { ref } = useReveal({ threshold, rootMargin, once });

  const baseClasses = `
    opacity-0 translate-y-6 blur-[2px] 
    data-[visible=true]:opacity-100 
    data-[visible=true]:translate-y-0 
    data-[visible=true]:blur-0
    transition-all duration-700 ease-out
    will-change-[opacity,transform]
  `;

  const style: CSSProperties = delayMs > 0 ? {
    transitionDelay: `${delayMs}ms`
  } : {};

  return createElement(
    as,
    {
      ref,
      className: cn(baseClasses, className),
      style,
      'data-testid': `reveal-${as}`
    },
    children
  );
}