'use client';

import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: 'small' | 'medium' | 'large';
  drift: number;
  symbol: string;
  opacity: number;
}

const SNOWFLAKE_SYMBOLS = ['❄', '❅', '❆', '*', '·', '•', '·'];
const SNOWFLAKE_COUNT = 400; // Increased for snowstorm effect

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate random snowflakes
    const generateSnowflakes = (): Snowflake[] => {
      return Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => {
        const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
        return {
          id: i,
          left: Math.random() * 100, // Random horizontal position (0-100%)
          delay: Math.random() * 2, // Reduced delay for continuous storm (0-2s)
          duration: 3 + Math.random() * 7, // Faster fall for storm (3-10s)
          size: sizes[Math.floor(Math.random() * sizes.length)],
          drift: (Math.random() - 0.5) * 300, // Increased drift for wind effect (-150px to 150px)
          symbol: SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * SNOWFLAKE_SYMBOLS.length)],
          opacity: 0.7 + Math.random() * 0.3, // Variable opacity for depth (0.7-1.0)
        };
      });
    };

    setSnowflakes(generateSnowflakes());
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className={`snowflake snowflake-${snowflake.size}`}
          style={{
            left: `${snowflake.left}%`,
            top: '-100vh',
            '--delay': `${snowflake.delay}s`,
            '--drift': `${snowflake.drift}px`,
            animationDuration: `${snowflake.duration}s`,
            '--opacity': snowflake.opacity,
          } as React.CSSProperties}
        >
          {snowflake.symbol}
        </div>
      ))}
    </div>
  );
}

