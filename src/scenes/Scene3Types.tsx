import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderTag } from '../components/HeaderTag';
import { THEME } from '../styles/theme';

export const Scene3Types: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const types = [
    {
      title: 'Bullying Fisik',
      icon: '💥',
      color: '#EF4444',
      examples: 'Memukul, menendang, merusak barang, menjegal secara sengaja.',
    },
    {
      title: 'Bullying Verbal',
      icon: '🗣️',
      color: '#F59E0B',
      examples: 'Mengejek, mencaci maki, body-shaming, serta julukan merendahkan.',
    },
    {
      title: 'Bullying Sosial / Relasional',
      icon: '👥',
      color: '#3B82F6',
      examples: 'Mengucilkan, menyebarkan gosip palsu, merusak reputasi teman.',
    },
    {
      title: 'Cyberbullying',
      icon: '📱',
      color: '#8B5CF6',
      examples: 'Meneror lewat sosmed, doxxing, komentar jahat, menyebar foto aib.',
    },
  ];

  return (
    <AbsoluteFill style={{ padding: '70px 100px', boxSizing: 'border-box' }}>
      <HeaderTag
        tag="Waspada di Sekitar Kita"
        title="4 Bentuk Nyata Perundungan"
        subtitle="Bullying bukan cuma kontak fisik. Luka batin akibat kata-kata dan dunia maya seringkali berbekas lebih dalam."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          marginTop: 20,
        }}
      >
        {types.map((t, idx) => {
          const cardSpring = spring({ frame: frame - 15 - idx * 10, fps, config: { damping: 12 } });
          const scale = interpolate(cardSpring, [0, 1], [0.8, 1]);
          const opacity = interpolate(cardSpring, [0, 1], [0, 1]);

          return (
            <div
              key={idx}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: 'rgba(255, 255, 255, 0.05)',
                borderTop: `6px solid ${t.color}`,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 24,
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backdropFilter: 'blur(16px)',
                boxShadow: `0 15px 35px rgba(0,0,0,0.4)`,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 24,
                  background: `${t.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 42,
                  marginBottom: 20,
                }}
              >
                {t.icon}
              </div>
              <h3 style={{ fontSize: 26, margin: '0 0 12px', color: '#fff' }}>{t.title}</h3>
              <p style={{ fontSize: 18, lineHeight: 1.5, color: THEME.colors.textSecondary, margin: 0 }}>
                {t.examples}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
