import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../styles/theme';

export const HeaderTag: React.FC<{ tag: string; title: string; subtitle?: string }> = ({
  tag,
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const anim = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(anim, [0, 1], [0, 1]);
  const translateY = interpolate(anim, [0, 1], [30, 0]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        opacity,
        transform: `translateY(${translateY}px)`,
        marginBottom: 36,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '8px 24px',
          background: 'rgba(239, 68, 68, 0.2)',
          border: `1px solid ${THEME.colors.accentRed}`,
          borderRadius: 40,
          color: THEME.colors.accentRed,
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: 3,
          textTransform: 'uppercase',
          marginBottom: 16,
          boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontSize: 54,
          fontWeight: 900,
          color: THEME.colors.textPrimary,
          margin: 0,
          letterSpacing: -1,
          fontFamily: THEME.fonts.heading,
          textShadow: '0 8px 30px rgba(0,0,0,0.6)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 24,
            color: THEME.colors.textSecondary,
            marginTop: 12,
            maxWidth: 960,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
