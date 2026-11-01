import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../styles/theme';
import { StopHandIcon, ShieldProtectIcon } from '../components/AnimatedIcons';

export const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeSpring = spring({ frame, fps, config: { damping: 12 } });
  const textSpring = spring({ frame: frame - 15, fps, config: { damping: 10 } });
  const pulse = Math.sin(frame * 0.15) * 8;

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          transform: `scale(${badgeSpring})`,
          marginBottom: 30,
        }}
      >
        <div style={{ transform: `scale(${1 + pulse * 0.01})` }}>
          <StopHandIcon size={160} />
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          transform: `scale(${textSpring})`,
          opacity: interpolate(textSpring, [0, 1], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 6,
            color: THEME.colors.accentCyan,
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Gerakan Aksi Nyata Pelajar & Sekolah Sehat
        </div>
        <h1
          style={{
            fontSize: 108,
            fontWeight: 900,
            margin: 0,
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: -2,
            textShadow: '0 0 50px rgba(239,68,68,0.7)',
          }}
        >
          STOP <span style={{ color: THEME.colors.accentRed }}>BULLYING</span>
        </h1>
        <div
          style={{
            display: 'inline-block',
            marginTop: 24,
            padding: '12px 36px',
            background: 'linear-gradient(90deg, #1E3A8A, #0F1E3D)',
            border: '2px solid rgba(56, 189, 248, 0.4)',
            borderRadius: 50,
            fontSize: 32,
            fontWeight: 700,
            color: '#FFFFFF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}
        >
          🛡️ Berani Peduli, Berani Melindungi
        </div>
      </div>

      {/* Floating accent elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 90,
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' }),
        }}
      >
        <ShieldProtectIcon size={44} />
        <span style={{ color: THEME.colors.textSecondary, fontSize: 20, letterSpacing: 1 }}>
          Ciptakan Lingkungan Aman Tanpa Rasa Takut
        </span>
      </div>
    </AbsoluteFill>
  );
};
