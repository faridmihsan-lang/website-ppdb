import React from 'react';

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({ className = '', opacity = 0.05 }) => {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} 
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-star-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* 8-pointed Islamic geometric star */}
            <path
              d="M30 5 L37 23 L55 30 L37 37 L30 55 L23 37 L5 30 L23 23 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="30" cy="30" r="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M0 0 L15 15 M60 0 L45 15 M0 60 L15 45 M60 60 L45 45" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
      </svg>
    </div>
  );
};
