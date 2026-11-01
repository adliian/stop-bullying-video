import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderTag } from '../components/HeaderTag';
import { THEME } from '../styles/theme';

export const Scene4Impacts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const impacts = [
    { title: 'Kesehatan Mental Menurun', stat: '80%', desc: 'Mengalami depresi, trauma berkepanjangan, cemas tinggi' },
    { title: 'Prestasi Akademik Anjlok', stat: '🔻', desc: 'Sulit berkonsentrasi, bolos sekolah, putus asa belajar' },
    { title: 'Hilang Kepercayaan Diri', stat: '💔', desc: 'Menarik diri dari pergaulan dan merasa tak berharga' },
    { title: 'Gejala Psikosomatis', stat: '⚠️', desc: 'Sakit kepala, lemas, hingga gangguan tidur berkepanjangan' },
  ];

  return (
    <AbsoluteFill style={{ padding: '70px 100px', boxSizing: 'border-box' }}>
      <HeaderTag
        tag="Konsekuensi Tragis"
        title="Dampak Destruktif Terhadap Korban"
        subtitle="Bullying bukan fase pendewasaan! Efek psikologisnya dapat merenggut masa depan seorang anak."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginTop: 24 }}>
        {impacts.map((item, idx) => {
          const itemSpring = spring({ frame: frame - 20 - idx * 8, fps, config: { damping: 14 } });
          return (
            <div
              key={idx}
              style={{
                transform: `scale(${interpolate(itemSpring, [0, 1], [0.85, 1])})`,
                opacity: itemSpring,
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 24,
                padding: '30px 40px',
                display: 'flex',
                alignItems: 'center',
                gap: 30,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: THEME.colors.accentRed,
                  minWidth: 90,
                  textAlign: 'center',
                }}
              >
                {item.stat}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 26, color: '#FFFFFF' }}>{item.title}</h3>
                <p style={{ margin: '8px 0 0', fontSize: 19, color: THEME.colors.textSecondary }}>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
