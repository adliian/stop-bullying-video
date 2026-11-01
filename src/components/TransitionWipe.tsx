import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { THEME } from '../styles/theme';

export const TransitionWipe: React.FC<{ type?: 'in' | 'out' }> = ({ type = 'in' }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    type === 'in' ? [0, 15] : [0, 15],
    type === 'in' ? [100, 0] : [0, -100],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        transform: `translateY(${progress}%)`,
        background: `linear-gradient(135deg, ${THEME.colors.accentRed} 0%, ${THEME.colors.bgNavy} 100%)`,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    />
  );
};
