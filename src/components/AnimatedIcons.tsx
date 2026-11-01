import React from 'react';
import { THEME } from '../styles/theme';

export const StopHandIcon: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#EF4444" fillOpacity="0.2" stroke={THEME.colors.accentRed} strokeWidth="4" />
    <path
      d="M38 32 C38 29 42 29 42 32 V46 H44 C44 26 48 26 48 30 V46 H50 C50 24 54 24 54 28 V46 H56 C56 28 60 28 60 32 V54 C60 64 53 72 43 72 C35 72 30 65 30 58 L38 48 Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ShieldProtectIcon: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 15 L80 28 V52 C80 72 50 86 50 86 C50 86 20 72 20 52 V28 Z" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="5" />
    <path d="M40 50 L47 57 L63 41" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
