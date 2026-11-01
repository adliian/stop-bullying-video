import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const StudentIllustration: React.FC<{ type: 'confident' | 'sad' | 'caring' }> = ({
  type,
}) => {
  const frame = useCurrentFrame();
  const breath = Math.sin(frame * 0.08) * 6;

  const mouthPath =
    type === 'sad'
      ? 'M 85 135 Q 100 120 115 135'
      : 'M 85 125 Q 100 145 115 125';

  const eyeY = type === 'sad' ? 102 : 98;
  const shirtColor = type === 'caring' ? '#38BDF8' : type === 'confident' ? '#10B981' : '#64748B';

  return (
    <div style={{ transform: `translateY(${breath}px)`, display: 'flex', justifyContent: 'center' }}>
      <svg width="240" height="280" viewBox="0 0 200 240" fill="none">
        {/* Glow behind character */}
        <circle cx="100" cy="110" r="85" fill={shirtColor} fillOpacity="0.2" filter="blur(20px)" />

        {/* Hair Back */}
        <ellipse cx="100" cy="85" rx="55" ry="60" fill="#1E293B" />

        {/* Head */}
        <circle cx="100" cy="95" r="45" fill="#FED7AA" />

        {/* Hair Front */}
        <path d="M 55 80 C 65 45 135 45 145 80 C 130 65 110 65 100 70 C 85 65 70 70 55 80 Z" fill="#0F172A" />

        {/* Eyes */}
        <circle cx="85" cy={eyeY} r="5" fill="#0F172A" />
        <circle cx="115" cy={eyeY} r="5" fill="#0F172A" />

        {/* Cheeks */}
        {type !== 'sad' && (
          <>
            <circle cx="78" cy="110" r="6" fill="#F87171" fillOpacity="0.4" />
            <circle cx="122" cy="110" r="6" fill="#F87171" fillOpacity="0.4" />
          </>
        )}

        {/* Eyebrows */}
        {type === 'sad' ? (
          <>
            <path d="M 78 88 Q 85 92 92 88" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 108 88 Q 115 92 122 88" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M 78 90 Q 85 86 92 90" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 108 90 Q 115 86 122 90" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {/* Mouth */}
        <path d={mouthPath} stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* School Uniform Collar */}
        <path d="M 50 170 C 50 140 150 140 150 170 L 165 240 L 35 240 Z" fill={shirtColor} />
        <polygon points="100,165 80,140 120,140" fill="#FFFFFF" />
        <polygon points="96,165 104,165 102,210 98,210" fill="#EF4444" />
      </svg>
    </div>
  );
};
