import { forwardRef, ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className = '', onClick, ...props }, ref) => {
    return (
      <a 
        ref={ref}
        href={`#${href.replace(/^\//, '')}`}
        className={className}
        onClick={(e) => {
          // Don't prevent default for hash navigation
          onClick?.();
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';