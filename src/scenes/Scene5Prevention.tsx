import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderTag } from '../components/HeaderTag';
import { THEME } from '../styles/theme';

export const Scene5Prevention: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: '01', title: 'Tumbuhkan Empati', desc: 'Hargai setiap perbedaan latar belakang fisik, ras, dan kemampuan.' },
    { num: '02', title: 'Berani Bicara & Bersuara', desc: 'Jangan diam jika melihat penindasan. Laporkan kepada guru/orang tua.' },
    { num: '03', title: 'Rangkul Teman yang Sendiri', desc: 'Jadilah pendengar yang baik dan rangkul mereka yang tersisihkan.' },
    { num: '04', title: 'Bijak Berselancar di Medsos', desc: 'Saring sebelum sharing. Tolak menyebarkan konten perundungan online.' },
    { num: '05', title: 'Tegakkan Aturan Tegas', desc: 'Dukung kebijakan anti-bullying tanpa kompromi di lingkungan sekolah.' },
  ];

  return (
    <AbsoluteFill style={{ padding: '60px 100px', boxSizing: 'border-box' }}>
      <HeaderTag
        tag="Langkah Konkret"
        title="5 Cara Melawan & Mencegah Bullying"
        subtitle="Perubahan besar dimulai dari tindakan kecil kita setiap hari di lingkungan kelas."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
        {steps.map((st, i) => {
          const itemAnim = spring({ frame: frame - 20 - i * 10, fps, config: { damping: 14 } });
          return (
            <div
              key={i}
              style={{
                transform: `translateX(${interpolate(itemAnim, [0, 1], [-60, 0])}px)`,
                opacity: itemAnim,
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 18,
                padding: '16px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: THEME.colors.accentCyan,
                  background: 'rgba(56, 189, 248, 0.1)',
                  padding: '6px 14px',
                  borderRadius: 12,
                }}
              >
                {st.num}
              </span>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: 24, color: '#FFFFFF', display: 'block' }}>{st.title}</strong>
                <span style={{ fontSize: 18, color: THEME.colors.textSecondary }}>{st.desc}</span>
              </div>
              <div style={{ fontSize: 26 }}>✅</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
