import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { THEME } from '../styles/theme';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const glow1X = interpolate(Math.sin(frame * 0.02), [-1, 1], [20, 80]);
  const glow1Y = interpolate(Math.cos(frame * 0.02), [-1, 1], [20, 70]);
  const glow2X = interpolate(Math.cos(frame * 0.015), [-1, 1], [80, 20]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${glow1X}% ${glow1Y}%, rgba(30, 58, 138, 0.6) 0%, rgba(15, 30, 61, 0.9) 50%, ${THEME.colors.bgDark} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Light glow accents */}
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          top: '-15%',
          left: `${glow2X}%`,
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          bottom: '-20%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Grid Pattern Overlay */}
      <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.12 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </AbsoluteFill>
  );
};
