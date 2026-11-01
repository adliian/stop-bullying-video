import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderTag } from '../components/HeaderTag';
import { StudentIllustration } from '../components/CharacterIllustrations';
import { THEME } from '../styles/theme';

export const Scene2Definition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardEntrance = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const points = [
    { title: 'Perilaku Agresif Disengaja', desc: 'Bukan sekadar gurauan biasa, melainkan memiliki niat menyakiti.' },
    { title: 'Dilakukan Berulang Kali', desc: 'Pola tindakan merugikan yang terus-menerus terjadi seiring waktu.' },
    { title: 'Ketimpangan Kuasa Fisik/Sosial', desc: 'Pelaku memanfaatkan status, fisik, atau dominasi terhadap korban.' },
  ];

  return (
    <AbsoluteFill style={{ padding: '80px 100px', boxSizing: 'border-box' }}>
      <HeaderTag
        tag="Kenali Masalahnya"
        title="Apa Sebenarnya Arti Bullying?"
        subtitle="Bullying (perundungan) adalah tindakan agresif secara sadar yang bertujuan menindas pihak lain."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 60, alignItems: 'center', marginTop: 30 }}>
        {/* Karakter Ilustrasi */}
        <div style={{ transform: `scale(${cardEntrance})`, textAlign: 'center' }}>
          <StudentIllustration type="sad" />
          <div
            style={{
              marginTop: 15,
              fontSize: 20,
              fontWeight: 600,
              color: THEME.colors.accentRed,
              background: 'rgba(239,68,68,0.1)',
              padding: '8px 16px',
              borderRadius: 20,
            }}
          >
            Korban Merasa Terisolasi
          </div>
        </div>

        {/* 3 Indikator Utama */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {points.map((p, i) => {
            const itemSpring = spring({ frame: frame - 25 - i * 12, fps, config: { damping: 13 } });
            return (
              <div
                key={i}
                style={{
                  transform: `translateX(${interpolate(itemSpring, [0, 1], [80, 0])}px)`,
                  opacity: itemSpring,
                  background: THEME.colors.cardBg,
                  border: `1px solid ${THEME.colors.cardBorder}`,
                  borderRadius: 20,
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    background: THEME.colors.accentRed,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    fontWeight: 900,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 26, color: '#fff' }}>{p.title}</h4>
                  <p style={{ margin: '6px 0 0', fontSize: 20, color: THEME.colors.textSecondary }}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
