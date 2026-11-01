import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../styles/theme';
import { StudentIllustration } from '../components/CharacterIllustrations';
import { ShieldProtectIcon } from '../components/AnimatedIcons';

export const Scene6Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoomSpring = spring({ frame, fps, config: { damping: 12 } });
  const scale = interpolate(zoomSpring, [0, 1], [0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{ transform: `scale(${scale})`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 20 }}>
          <StudentIllustration type="caring" />
          <StudentIllustration type="confident" />
        </div>

        <div
          style={{
            padding: '10px 30px',
            background: THEME.colors.accentRed,
            borderRadius: 50,
            fontSize: 22,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: 2,
            marginBottom: 20,
            textTransform: 'uppercase',
            boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
          }}
        >
          Mari Bergerak Bersama!
        </div>

        <h1
          style={{
            fontSize: 76,
            fontWeight: 900,
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.1,
            textShadow: '0 5px 30px rgba(0,0,0,0.7)',
          }}
        >
          “JADILAH TEMAN, <span style={{ color: THEME.colors.accentCyan }}>BUKAN ANCAMAN!”</span>
        </h1>

        <h2
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: THEME.colors.warningYellow,
            marginTop: 18,
            marginBottom: 28,
            letterSpacing: 1,
          }}
        >
          STOP BULLYING, MULAI DARI DIRI SENDIRI!
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '14px 40px',
            borderRadius: 40,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <ShieldProtectIcon size={36} />
          <span style={{ fontSize: 22, color: THEME.colors.textSecondary, fontWeight: 600 }}>
            Layanan Pengaduan & Bantuan Sekolah: Konseling & Sahabat Peduli
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
