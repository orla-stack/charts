import { useState } from 'react';

const themes = {
  dark: {
    bg: '#001234', card: 'rgba(255,255,255,0.03)', text: '#FFFFFF',
    textSec: 'rgba(255,255,255,0.6)', textMuted: 'rgba(255,255,255,0.4)',
    accent: '#3EECD2', accent2: '#8B5CF6', grid: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.08)', tooltipBg: 'rgba(0,18,52,0.95)',
    tooltipBorder: 'rgba(255,255,255,0.1)', tooltipText: '#FFFFFF',
    toggleBg: 'rgba(255,255,255,0.06)', toggleActive: 'rgba(255,255,255,0.12)',
    toggleActiveText: '#FFFFFF', toggleOffText: 'rgba(255,255,255,0.4)',
    calloutBg: 'rgba(62,236,210,0.1)', calloutBorder: 'rgba(62,236,210,0.2)',
    calloutText: '#f1f5f9', footerBorder: 'rgba(255,255,255,0.08)',
    logoVariant: 'white',
  },
  light: {
    bg: '#F1F4F8', card: '#FFFFFF', text: '#0F172A',
    textSec: '#475569', textMuted: '#94A3B8',
    accent: '#0D9488', accent2: '#7C3AED', grid: 'rgba(0,0,0,0.06)',
    border: 'rgba(0,0,0,0.08)', tooltipBg: '#FFFFFF',
    tooltipBorder: 'rgba(0,0,0,0.1)', tooltipText: '#0F172A',
    toggleBg: 'rgba(0,0,0,0.06)', toggleActive: '#FFFFFF',
    toggleActiveText: '#0F172A', toggleOffText: '#94A3B8',
    calloutBg: 'rgba(13,148,136,0.08)', calloutBorder: 'rgba(13,148,136,0.2)',
    calloutText: '#334155', footerBorder: 'rgba(0,0,0,0.08)',
    logoVariant: 'dark',
  },
};

const toMonth = (d) => { const [y, m] = d.split('-').map(Number); return (y - 2022) * 12 + (m - 1); };
const MIN_M = toMonth('2022-06');
const MAX_M = toMonth('2026-04');
const SPAN = MAX_M - MIN_M;

const harveyData = [
  { date: '2022-08', label: 'Aug 2022', round: 'Founded', raised: 0, val: 0.001, lbl: '', founded: true },
  { date: '2023-04', label: 'Apr 2023', round: 'Series A', raised: 21, val: 0.15, lbl: '$150M' },
  { date: '2023-12', label: 'Dec 2023', round: 'Series B', raised: 80, val: 0.715, lbl: '$715M' },
  { date: '2024-07', label: 'Jul 2024', round: 'Series C', raised: 100, val: 1.5, lbl: '$1.5B' },
  { date: '2025-02', label: 'Feb 2025', round: 'Series D', raised: 300, val: 3.0, lbl: '$3B' },
  { date: '2025-06', label: 'Jun 2025', round: 'Series E', raised: 300, val: 5.0, lbl: '$5B' },
  { date: '2025-10', label: 'Oct 2025', round: 'Series F', raised: 160, val: 8.0, lbl: '$8B' },
];
const hRep = { date: '2026-02', label: 'Feb 2026', round: 'Reported', val: 11.0, lbl: '$11B' };

const legoraData = [
  { date: '2023-11', label: 'Nov 2023', round: 'Founded', raised: 0, val: 0.001, lbl: '', founded: true },
  { date: '2024-05', label: 'May 2024', round: 'Seed', raised: 10.5, val: 0.055, lbl: '$55M' },
  { date: '2024-07', label: 'Jul 2024', round: 'Series A', raised: 25, val: 0.13, lbl: '$130M' },
  { date: '2025-05', label: 'May 2025', round: 'Series B', raised: 80, val: 0.675, lbl: '$675M' },
  { date: '2025-10', label: 'Oct 2025', round: 'Series C', raised: 150, val: 1.8, lbl: '$1.8B' },
];
const lRep = { date: '2026-02', label: 'Feb 2026', round: 'Reported', val: 6.0, lbl: '$6B' };

const DealroomLogo = ({ variant = 'white' }) => {
  if (variant === 'white') {
    return (
      <svg width="110" height="26" viewBox="0 0 222.15 53.28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M201.48,27.53a2.47,2.47,0,0,1,1.22.29,2.25,2.25,0,0,1,.87.75l2.8-2.94A5.37,5.37,0,0,0,204,24.2a8.89,8.89,0,0,0-2.56-.4,8.6,8.6,0,0,0-3,.5,7.15,7.15,0,0,0-2.44,1.46A6.79,6.79,0,0,0,194.44,28a7.63,7.63,0,0,0,0,5.93,6.89,6.89,0,0,0,1.62,2.27,7.31,7.31,0,0,0,2.44,1.46,8.6,8.6,0,0,0,3,.5,8.26,8.26,0,0,0,2.56-.41,5.35,5.35,0,0,0,2.33-1.42l-2.8-2.94a3.63,3.63,0,0,1-.87.74,2.26,2.26,0,0,1-1.22.3,3.22,3.22,0,0,1-2.5-1,3.53,3.53,0,0,1-.89-2.51,3.52,3.52,0,0,1,.89-2.5A3.22,3.22,0,0,1,201.48,27.53Z"/>
        <path fill="#fff" d="M158.18,25.76a7.15,7.15,0,0,0-2.44-1.46,8.6,8.6,0,0,0-3-.5,8.69,8.69,0,0,0-3,.5,7.17,7.17,0,0,0-2.43,1.46A6.68,6.68,0,0,0,145.71,28a7.63,7.63,0,0,0,0,5.93,6.78,6.78,0,0,0,1.63,2.27,7.17,7.17,0,0,0,2.43,1.46h0a8.69,8.69,0,0,0,3,.5,8.6,8.6,0,0,0,3-.5,7.31,7.31,0,0,0,2.44-1.46A6.92,6.92,0,0,0,159.81,34a7.63,7.63,0,0,0,0-5.93A6.82,6.82,0,0,0,158.18,25.76Zm-2.91,7.75a3.76,3.76,0,0,1-5,0,3.56,3.56,0,0,1-.89-2.51,3.53,3.53,0,0,1,.89-2.51h0a3.76,3.76,0,0,1,5,0,3.53,3.53,0,0,1,.89,2.51A3.56,3.56,0,0,1,155.27,33.51Z"/>
        <path fill="#fff" d="M141.46,25.76A7.31,7.31,0,0,0,139,24.3a9.16,9.16,0,0,0-6,0,7.17,7.17,0,0,0-2.43,1.46A6.68,6.68,0,0,0,129,28,7.75,7.75,0,0,0,129,34a6.78,6.78,0,0,0,1.63,2.27,7.17,7.17,0,0,0,2.43,1.46h0a9.16,9.16,0,0,0,6,0,7.31,7.31,0,0,0,2.44-1.46A7.07,7.07,0,0,0,143.09,34a7.75,7.75,0,0,0,0-5.93A7,7,0,0,0,141.46,25.76Zm-2.91,7.75a3.76,3.76,0,0,1-5,0,3.56,3.56,0,0,1-.89-2.51,3.48,3.48,0,0,1,.89-2.51h0a3.76,3.76,0,0,1,5,0,3.53,3.53,0,0,1,.89,2.51A3.56,3.56,0,0,1,138.55,33.51Z"/>
        <path fill="#fff" d="M74.14,25.61h0a4,4,0,0,0-1.88-1.41,7.49,7.49,0,0,0-2.48-.4,5.58,5.58,0,0,0-2.63.6,6.19,6.19,0,0,0-2,1.63,7.32,7.32,0,0,0-1.24,2.32,8.9,8.9,0,0,0-.44,2.76A8.17,8.17,0,0,0,63.93,34,6.63,6.63,0,0,0,65.3,36.2a6.07,6.07,0,0,0,2.14,1.47h0a7.11,7.11,0,0,0,2.77.53,5,5,0,0,0,1.38-.2,6.46,6.46,0,0,0,1.21-.51,5.56,5.56,0,0,0,1-.7,4.66,4.66,0,0,0,.66-.74h0v1.81h3.9V16.51H74.14Zm-.56,7.89a3.74,3.74,0,0,1-5,0A3.53,3.53,0,0,1,67.69,31a3.56,3.56,0,0,1,.89-2.51h0a3.76,3.76,0,0,1,5,0A3.56,3.56,0,0,1,74.47,31,3.53,3.53,0,0,1,73.58,33.5Z"/>
        <path fill="#fff" d="M221.55,28a6.82,6.82,0,0,0-1.63-2.27,7.31,7.31,0,0,0-2.44-1.46,8.6,8.6,0,0,0-3-.5,8.69,8.69,0,0,0-3,.5,7.17,7.17,0,0,0-2.43,1.46A6.68,6.68,0,0,0,207.45,28a7.75,7.75,0,0,0,0,5.93,6.78,6.78,0,0,0,1.63,2.27,7.17,7.17,0,0,0,2.43,1.46,8.69,8.69,0,0,0,3,.5,8.6,8.6,0,0,0,3-.5,7.31,7.31,0,0,0,2.44-1.46A6.92,6.92,0,0,0,221.55,34a7.63,7.63,0,0,0,0-5.93ZM217,33.51a3.76,3.76,0,0,1-5,0A3.56,3.56,0,0,1,211.1,31a3.53,3.53,0,0,1,.89-2.51h0a3.76,3.76,0,0,1,5,0A3.54,3.54,0,0,1,217.9,31,3.56,3.56,0,0,1,217,33.51Z"/>
        <path fill="#fff" d="M93.17,25.76a5.56,5.56,0,0,0-2-1.45,6.66,6.66,0,0,0-2.68-.51,8.46,8.46,0,0,0-3,.51A7,7,0,0,0,83,25.76,6.78,6.78,0,0,0,81.41,28a7.75,7.75,0,0,0,0,5.93A6.78,6.78,0,0,0,83,36.23a7,7,0,0,0,2.43,1.46h0a8.58,8.58,0,0,0,3,.5,7.71,7.71,0,0,0,3.23-.71,6.7,6.7,0,0,0,2.57-2l-3-2.17A4.8,4.8,0,0,1,90,34.51a3.05,3.05,0,0,1-1.77.46,3.12,3.12,0,0,1-2.09-.71,3.32,3.32,0,0,1-1.1-1.94h9.85V31a9.08,9.08,0,0,0-.46-3A6.63,6.63,0,0,0,93.17,25.76Zm-8.11,3.68a2.66,2.66,0,0,1,.24-1,2.42,2.42,0,0,1,.6-.82,3,3,0,0,1,.91-.58h0a3.24,3.24,0,0,1,1.23-.23,2.51,2.51,0,0,1,1.9.77,2.45,2.45,0,0,1,.71,1.83Z"/>
        <path fill="#fff" d="M108.19,25.64a4.47,4.47,0,0,0-1.92-1.37,8.68,8.68,0,0,0-3.07-.47,9.87,9.87,0,0,0-3.28.56A7.65,7.65,0,0,0,97.15,26l2.26,2.31a5.29,5.29,0,0,1,1.54-1.2,4.35,4.35,0,0,1,1.91-.44,2.91,2.91,0,0,1,1.91.67,2.23,2.23,0,0,1,.81,1.79l-1.91,0a20.62,20.62,0,0,0-2.07.17,13.6,13.6,0,0,0-2,.44,6,6,0,0,0-1.71.84A3.87,3.87,0,0,0,96.71,32a4.21,4.21,0,0,0-.44,2,4.15,4.15,0,0,0,.4,1.84,3.83,3.83,0,0,0,1.08,1.32,4.41,4.41,0,0,0,1.57.8h0a6.09,6.09,0,0,0,1.84.28,6.37,6.37,0,0,0,2.48-.48,4,4,0,0,0,1.88-1.58h.06v1.72h3.9v-7a14.61,14.61,0,0,0-.29-3A5.21,5.21,0,0,0,108.19,25.64Zm-2.61,7.1a2.23,2.23,0,0,1-1,1.92,3.45,3.45,0,0,1-1,.48,4.1,4.1,0,0,1-1.2.17A2.69,2.69,0,0,1,101,35a1.21,1.21,0,0,1-.65-1.13,1.35,1.35,0,0,1,.47-1.1,3,3,0,0,1,1.13-.6,6.43,6.43,0,0,1,1.38-.24h0c.49,0,.89,0,1.2,0h1Z"/>
        <path fill="#fff" d="M191,33.58a2.6,2.6,0,0,0-.84-.55,2.73,2.73,0,0,0-1-.2,2.76,2.76,0,0,0-1,.2,2.5,2.5,0,0,0-1.38,1.38,2.54,2.54,0,0,0-.2,1,2.58,2.58,0,0,0,.2,1,2.41,2.41,0,0,0,.55.83,2.56,2.56,0,0,0,.83.55h0a2.67,2.67,0,0,0,1,.2,2.73,2.73,0,0,0,1-.2,2.6,2.6,0,0,0,.84-.55,2.73,2.73,0,0,0,.55-.83,2.76,2.76,0,0,0,.2-1,2.62,2.62,0,0,0-.75-1.85Z"/>
        <rect fill="#fff" x="111.67" y="16.51" width="4.24" height="21.35"/>
        <path fill="#fff" d="M182.91,25.54a3.7,3.7,0,0,0-1.5-1.27,5.34,5.34,0,0,0-2.33-.47,5.42,5.42,0,0,0-2.57.56,4.53,4.53,0,0,0-1.78,1.9,3.78,3.78,0,0,0-1.68-1.87,5.46,5.46,0,0,0-2.56-.59,4.87,4.87,0,0,0-1.42.2,5.18,5.18,0,0,0-1.16.51,3.71,3.71,0,0,0-.87.71,3.18,3.18,0,0,0-.57.79h-.06V24.14h-4.07V37.86h4.24V31a9.36,9.36,0,0,1,.09-1.3,3.4,3.4,0,0,1,.35-1.12,2,2,0,0,1,.78-.79,2.67,2.67,0,0,1,1.33-.29,1.67,1.67,0,0,1,1.12.33,2.05,2.05,0,0,1,.55.82,3.92,3.92,0,0,1,.2,1c0,.36,0,.66,0,.9v7.26h4.25V30.6a5.28,5.28,0,0,1,.12-1.19,2.77,2.77,0,0,1,.43-1,2,2,0,0,1,.79-.67,2.75,2.75,0,0,1,1.23-.23,1.56,1.56,0,0,1,1.46.68,3.32,3.32,0,0,1,.41,1.66v8h4.23v-8.1a10.65,10.65,0,0,0-.23-2.33A5.37,5.37,0,0,0,182.91,25.54Z"/>
        <path fill="#fff" d="M126.69,23.79a4.07,4.07,0,0,0-2.35.64,5.21,5.21,0,0,0-1.62,1.9h0v-2.2h-4.24V37.86h4.24V32.12a12.9,12.9,0,0,1,.11-1.86,3.58,3.58,0,0,1,.5-1.45,2.48,2.48,0,0,1,1.08-.95,4.55,4.55,0,0,1,1.93-.34,5.62,5.62,0,0,1,.92.07,6.77,6.77,0,0,1,.89.21V23.94a3.87,3.87,0,0,0-.68-.12Z"/>
        <path fill="#fff" d="M32.75,20.12H31v13h1.3a5.05,5.05,0,0,0,4.17-1.65,8,8,0,0,0,1.33-5.05,7.34,7.34,0,0,0-1.26-4.72A4.66,4.66,0,0,0,32.75,20.12Z"/>
        <path fill="#fff" d="M51.89,0H1.5A1.5,1.5,0,0,0,0,1.5V51.77a1.51,1.51,0,0,0,1.51,1.51H51.88a1.52,1.52,0,0,0,1.51-1.51V1.5A1.5,1.5,0,0,0,51.89,0ZM15.36,38.2H9.15V27.55h6.21Zm7.81,0H17v-17h6.21Zm18-3.14q-3.18,3.13-9,3.14H24.82V15.07h7.87q5.56,0,8.6,2.85t3,8.23C44.32,30,43.26,33,41.13,35.06Z"/>
      </svg>
    );
  }
  return (
    <svg width="110" height="26" viewBox="0 0 222.15 53.28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#001234" d="M211.51,37.69a7.17,7.17,0,0,1-2.43-1.46A6.78,6.78,0,0,1,207.45,34a7.75,7.75,0,0,1,0-5.93,6.68,6.68,0,0,1,1.63-2.27,7.17,7.17,0,0,1,2.43-1.46,8.69,8.69,0,0,1,3-.5,8.6,8.6,0,0,1,3,.5,7.31,7.31,0,0,1,2.44,1.46A6.82,6.82,0,0,1,221.55,28a7.63,7.63,0,0,1,0,5.93,6.92,6.92,0,0,1-1.63,2.27,7.31,7.31,0,0,1-2.44,1.46,8.6,8.6,0,0,1-3,.5A8.69,8.69,0,0,1,211.51,37.69Zm.48-9.2A3.53,3.53,0,0,0,211.1,31a3.56,3.56,0,0,0,.89,2.51,3.76,3.76,0,0,0,5,0A3.56,3.56,0,0,0,217.9,31a3.54,3.54,0,0,0-.89-2.51,3.76,3.76,0,0,0-5,0Zm-13.49,9.2a7.31,7.31,0,0,1-2.44-1.46A6.89,6.89,0,0,1,194.44,34a7.63,7.63,0,0,1,0-5.93,6.79,6.79,0,0,1,1.62-2.27,7.15,7.15,0,0,1,2.44-1.46,8.6,8.6,0,0,1,3-.5,8.89,8.89,0,0,1,2.56.4,5.37,5.37,0,0,1,2.33,1.43l-2.8,2.94a2.25,2.25,0,0,0-.87-.75,2.47,2.47,0,0,0-1.22-.29,3.22,3.22,0,0,0-2.5,1,3.52,3.52,0,0,0-.89,2.5A3.53,3.53,0,0,0,199,33.5a3.22,3.22,0,0,0,2.5,1,2.26,2.26,0,0,0,1.22-.3,3.63,3.63,0,0,0,.87-.74l2.8,2.94A5.35,5.35,0,0,1,204,37.78a8.26,8.26,0,0,1-2.56.41A8.6,8.6,0,0,1,198.5,37.69Zm-48.73,0a7.17,7.17,0,0,1-2.43-1.46A6.78,6.78,0,0,1,145.71,34a7.63,7.63,0,0,1,0-5.93,6.68,6.68,0,0,1,1.63-2.27,7.17,7.17,0,0,1,2.43-1.46,8.69,8.69,0,0,1,3-.5,8.6,8.6,0,0,1,3,.5,7.15,7.15,0,0,1,2.44,1.46A6.82,6.82,0,0,1,159.81,28a7.63,7.63,0,0,1,0,5.93,6.92,6.92,0,0,1-1.63,2.27,7.31,7.31,0,0,1-2.44,1.46,8.6,8.6,0,0,1-3,.5,8.69,8.69,0,0,1-3-.5Zm.48-9.2a3.53,3.53,0,0,0-.89,2.51,3.56,3.56,0,0,0,.89,2.51,3.76,3.76,0,0,0,5,0,3.56,3.56,0,0,0,.89-2.51,3.53,3.53,0,0,0-.89-2.51,3.76,3.76,0,0,0-5,0Zm-17.2,9.2a7.17,7.17,0,0,1-2.43-1.46A6.78,6.78,0,0,1,129,34,7.75,7.75,0,0,1,129,28a6.68,6.68,0,0,1,1.63-2.27,7.17,7.17,0,0,1,2.43-1.46,9.16,9.16,0,0,1,6,0,7.31,7.31,0,0,1,2.44,1.46A7,7,0,0,1,143.09,28a7.75,7.75,0,0,1,0,5.93,7.07,7.07,0,0,1-1.63,2.27A7.31,7.31,0,0,1,139,37.69a9.16,9.16,0,0,1-6,0Zm.48-9.2a3.48,3.48,0,0,0-.89,2.51,3.56,3.56,0,0,0,.89,2.51,3.76,3.76,0,0,0,5,0,3.56,3.56,0,0,0,.89-2.51,3.53,3.53,0,0,0-.89-2.51,3.76,3.76,0,0,0-5,0ZM99.32,37.92a4.41,4.41,0,0,1-1.57-.8,3.83,3.83,0,0,1-1.08-1.32,4.15,4.15,0,0,1-.4-1.84,4.21,4.21,0,0,1,.44-2,3.87,3.87,0,0,1,1.19-1.35,6,6,0,0,1,1.71-.84,13.6,13.6,0,0,1,2-.44,20.62,20.62,0,0,1,2.07-.17l1.91,0a2.23,2.23,0,0,0-.81-1.79,2.91,2.91,0,0,0-1.91-.67,4.35,4.35,0,0,0-1.91.44,5.29,5.29,0,0,0-1.54,1.2L97.15,26a7.65,7.65,0,0,1,2.77-1.65,9.87,9.87,0,0,1,3.28-.56,8.68,8.68,0,0,1,3.07.47,4.47,4.47,0,0,1,1.92,1.37,5.21,5.21,0,0,1,1,2.22,14.61,14.61,0,0,1,.29,3v7h-3.9V36.14h-.06a4,4,0,0,1-1.88,1.58,6.37,6.37,0,0,1-2.48.48,6.09,6.09,0,0,1-1.84-.28Zm4-6a6.43,6.43,0,0,0-1.38.24,3,3,0,0,0-1.13.6,1.35,1.35,0,0,0-.47,1.1A1.21,1.21,0,0,0,101,35a2.69,2.69,0,0,0,1.36.36,4.1,4.1,0,0,0,1.2-.17,3.45,3.45,0,0,0,1-.48,2.23,2.23,0,0,0,1-1.92v-.9h-1c-.31,0-.71,0-1.2,0ZM85.47,37.69A7,7,0,0,1,83,36.23,6.78,6.78,0,0,1,81.41,34a7.75,7.75,0,0,1,0-5.93A6.78,6.78,0,0,1,83,25.76a7,7,0,0,1,2.43-1.45,8.46,8.46,0,0,1,3-.51,6.66,6.66,0,0,1,2.68.51,5.56,5.56,0,0,1,2,1.45A6.63,6.63,0,0,1,94.45,28a9.08,9.08,0,0,1,.46,3v1.32H85.06a3.32,3.32,0,0,0,1.1,1.94,3.12,3.12,0,0,0,2.09.71A3.05,3.05,0,0,0,90,34.51a4.8,4.8,0,0,0,1.26-1.2l3,2.17a6.7,6.7,0,0,1-2.57,2,7.71,7.71,0,0,1-3.23.71,8.58,8.58,0,0,1-3-.5Zm1.34-10.62a3,3,0,0,0-.91.58,2.42,2.42,0,0,0-.6.82,2.66,2.66,0,0,0-.24,1h5.6A2.45,2.45,0,0,0,90,27.61a2.51,2.51,0,0,0-1.9-.77,3.24,3.24,0,0,0-1.23.23ZM67.44,37.67A6.07,6.07,0,0,1,65.3,36.2,6.63,6.63,0,0,1,63.93,34a8.17,8.17,0,0,1-.48-2.85,8.9,8.9,0,0,1,.44-2.76A7.32,7.32,0,0,1,65.13,26a6.19,6.19,0,0,1,2-1.63,5.58,5.58,0,0,1,2.63-.6,7.49,7.49,0,0,1,2.48.4,4,4,0,0,1,1.88,1.41h0v-9.1h4.24V37.86h-3.9V36.05h0a4.66,4.66,0,0,1-.66.74,5.56,5.56,0,0,1-1,.7,6.46,6.46,0,0,1-1.21.51,5,5,0,0,1-1.38.2,7.11,7.11,0,0,1-2.77-.53Zm1.14-9.19A3.56,3.56,0,0,0,67.69,31a3.53,3.53,0,0,0,.89,2.51,3.74,3.74,0,0,0,5,0A3.53,3.53,0,0,0,74.47,31a3.56,3.56,0,0,0-.89-2.51,3.76,3.76,0,0,0-5,0Zm119.51,9.35a2.56,2.56,0,0,1-.83-.55,2.41,2.41,0,0,1-.55-.83,2.58,2.58,0,0,1-.2-1,2.54,2.54,0,0,1,.2-1A2.5,2.5,0,0,1,188.09,33a2.76,2.76,0,0,1,1-.2,2.73,2.73,0,0,1,1,.2,2.6,2.6,0,0,1,.84.55,2.62,2.62,0,0,1,.75,1.85,2.76,2.76,0,0,1-.2,1,2.73,2.73,0,0,1-.55.83,2.6,2.6,0,0,1-.84.55,2.73,2.73,0,0,1-1,.2,2.67,2.67,0,0,1-1-.2Zm-8.38,0v-8a3.32,3.32,0,0,0-.41-1.66,1.56,1.56,0,0,0-1.46-.68,2.75,2.75,0,0,0-1.23.23,2,2,0,0,0-.79.67,2.77,2.77,0,0,0-.43,1,5.28,5.28,0,0,0-.12,1.19v7.26H171V30.6c0-.24,0-.54,0-.9a3.92,3.92,0,0,0-.2-1,2.05,2.05,0,0,0-.55-.82,1.67,1.67,0,0,0-1.12-.33,2.67,2.67,0,0,0-1.33.29,2,2,0,0,0-.78.79,3.4,3.4,0,0,0-.35,1.12,9.36,9.36,0,0,0-.09,1.3v6.83h-4.24V24.14h4.07V26h.06a3.18,3.18,0,0,1,.57-.79,3.71,3.71,0,0,1,.87-.71,5.18,5.18,0,0,1,1.16-.51,4.87,4.87,0,0,1,1.42-.2,5.46,5.46,0,0,1,2.56.59,3.78,3.78,0,0,1,1.68,1.87,4.53,4.53,0,0,1,1.78-1.9,5.42,5.42,0,0,1,2.57-.56,5.34,5.34,0,0,1,2.33.47,3.7,3.7,0,0,1,1.5,1.27,5.37,5.37,0,0,1,.8,1.89,10.65,10.65,0,0,1,.23,2.33v8.1Zm-61.28,0V24.13h4.24v2.2h0a5.21,5.21,0,0,1,1.62-1.9,4.07,4.07,0,0,1,2.35-.64l.73,0a3.87,3.87,0,0,1,.68.12V27.8a6.77,6.77,0,0,0-.89-.21,5.62,5.62,0,0,0-.92-.07,4.55,4.55,0,0,0-1.93.34,2.48,2.48,0,0,0-1.08.95,3.58,3.58,0,0,0-.5,1.45,12.9,12.9,0,0,0-.11,1.86v5.73Zm-6.76,0V16.51h4.24V37.86Z"/>
      <path fill="#001234" d="M1.5,0H51.89a1.5,1.5,0,0,1,1.5,1.5V51.77a1.52,1.52,0,0,1-1.51,1.51H1.51A1.51,1.51,0,0,1,0,51.77H0V1.5A1.5,1.5,0,0,1,1.5,0Z"/>
      <path fill="#fff" d="M17,38.2v-17h6.21v17Zm14,0H24.82V15.07h7.87q5.56,0,8.6,2.85t3,8.23c0,3.85-1.06,6.83-3.19,8.91s-5.11,3.13-9,3.14ZM31,33.07h1.3a5.05,5.05,0,0,0,4.17-1.65,8,8,0,0,0,1.33-5.05,7.34,7.34,0,0,0-1.26-4.72,4.66,4.66,0,0,0-3.82-1.53H31ZM9.15,38.2V27.55h6.21V38.2Z"/>
    </svg>
  );
};

export default function ValuationChart() {
  const [mode, setMode] = useState('dark');
  const [hover, setHover] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [logScale, setLogScale] = useState(false);
  const t = themes[mode];
  const font = "'Source Sans 3', 'Source Sans Pro', system-ui, -apple-system, sans-serif";

  const W = 940, H = 520;
  const pad = { top: 55, right: 75, bottom: 60, left: 80 };
  const cW = W - pad.left - pad.right, cH = H - pad.top - pad.bottom;

  const xPos = (dateStr) => {
    const m = toMonth(dateStr);
    return pad.left + ((m - MIN_M) / SPAN) * cW;
  };

  // Linear scale
  const maxVal = 12;
  const yLin = (v) => pad.top + cH - (Math.max(v, 0) / maxVal) * cH;

  // Log scale: map from log10(0.001) = -3 to log10(12) ≈ 1.08
  const LOG_MIN = -3, LOG_MAX = Math.log10(12);
  const yLog = (v) => {
    const lv = Math.log10(Math.max(v, 0.001));
    return pad.top + cH - ((lv - LOG_MIN) / (LOG_MAX - LOG_MIN)) * cH;
  };

  const yPos = logScale ? yLog : yLin;

  const linGrid = [0, 2, 4, 6, 8, 10, 12];
  const logGrid = [0.001, 0.01, 0.1, 1, 10];
  const logGridLabels = { 0.001: '$1M', 0.01: '$10M', 0.1: '$100M', 1: '$1B', 10: '$10B' };
  const gridLines = logScale ? logGrid : linGrid;

  const timeLabels = [
    { d: '2022-08', l: "Q3 '22" }, { d: '2023-04', l: "Q2 '23" },
    { d: '2023-11', l: "Q4 '23" }, { d: '2024-07', l: "Q3 '24" },
    { d: '2025-02', l: "Q1 '25" }, { d: '2025-10', l: "Q4 '25" },
    { d: '2026-02', l: "Q1 '26" },
  ];

  const mkPts = (data) => data.map(d => ({ ...d, px: xPos(d.date), py: yPos(d.val) }));
  const hPts = mkPts(harveyData);
  const lPts = mkPts(legoraData);
  const hR = { ...hRep, px: xPos(hRep.date), py: yPos(hRep.val) };
  const lR = { ...lRep, px: xPos(lRep.date), py: yPos(lRep.val) };

  const mkLine = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.px},${p.py}`).join(' ');
  const lastH = hPts[hPts.length - 1], lastL = lPts[lPts.length - 1];
  const hOp = !hover || hover === 'harvey' ? 1 : 0.15;
  const lOp = !hover || hover === 'legora' ? 1 : 0.15;
  const bR = (raised) => raised === 0 ? 5 : Math.max(8, Math.sqrt(raised) * 1.3);

  const toggleStyle = (active) => ({
    background: active ? t.toggleActive : 'transparent',
    color: active ? t.toggleActiveText : t.toggleOffText,
    border: 'none', borderRadius: 6, padding: '5px 14px',
    fontSize: 12, fontWeight: 600, cursor: 'pointer',
    textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: font,
  });

  return (
    <div style={{
      background: t.bg, minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 24,
      fontFamily: font, transition: 'all 0.3s ease',
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700;900&display=swap');`}</style>
      <div style={{
        background: t.card, borderRadius: 16, border: `1px solid ${t.border}`,
        padding: '48px 52px 40px', maxWidth: 1000, width: '100%',
        transition: 'all 0.3s ease',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <span style={{
            background: t.calloutBg, color: t.accent, padding: '4px 12px',
            borderRadius: 20, fontSize: 12, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            🚀 AI Legal Tech
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            {/* Log toggle */}
            <div style={{ display: 'flex', background: t.toggleBg, borderRadius: 8, padding: 3 }}>
              {['Linear', 'Log'].map(s => (
                <button key={s} onClick={() => setLogScale(s === 'Log')} style={toggleStyle(logScale ? s === 'Log' : s === 'Linear')}>
                  {s}
                </button>
              ))}
            </div>
            {/* Theme toggle */}
            <div style={{ display: 'flex', background: t.toggleBg, borderRadius: 8, padding: 3 }}>
              {['dark', 'light'].map(m => (
                <button key={m} onClick={() => setMode(m)} style={toggleStyle(mode === m)}>
                  {m === 'dark' ? '🌙 Dark' : '☀️ Light'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h1 style={{
          color: t.text, fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em',
          lineHeight: 1.1, margin: 0, fontFamily: font,
        }}>
          Harvey racing to $11B in 4 years — Legora to $6B in 3
        </h1>
        <p style={{
          color: t.textSec, fontSize: 16, fontWeight: 400, margin: '12px 0 0',
          lineHeight: 1.5, fontFamily: font,
        }}>
          Valuation at each funding round · Bubble size = amount raised
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 24, marginTop: 28, marginBottom: 8 }}>
          {[
            { key: 'harvey', label: '🇺🇸 Harvey', color: t.accent2 },
            { key: 'legora', label: '🇸🇪 Legora', color: t.accent },
          ].map(s => (
            <div key={s.key} style={{
              display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
              opacity: !hover || hover === s.key ? 1 : 0.35,
              transition: 'opacity 0.2s ease',
            }}
              onMouseEnter={() => setHover(s.key)}
              onMouseLeave={() => setHover(null)}
            >
              <span style={{ width: 14, height: 14, borderRadius: '50%', background: s.color, display: 'inline-block' }}/>
              <span style={{ color: t.textSec, fontSize: 16, fontWeight: 600, fontFamily: font }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ position: 'relative', marginTop: 8 }}>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: 'visible' }}>
            {/* Grid */}
            {gridLines.map(v => {
              const yy = yPos(v);
              if (yy < pad.top - 5 || yy > pad.top + cH + 5) return null;
              const label = logScale ? (logGridLabels[v] || '') : `$${v}B`;
              return (
                <g key={v}>
                  <line x1={pad.left} x2={W - pad.right} y1={yy} y2={yy} stroke={t.grid} />
                  <text x={pad.left - 16} y={yy + 5} textAnchor="end"
                    fill={t.textMuted} fontSize={16} fontFamily={font} fontWeight={500}>{label}</text>
                </g>
              );
            })}
            {/* X-axis */}
            {timeLabels.map(tl => (
              <text key={tl.d} x={xPos(tl.d)} y={H - 10} textAnchor="middle"
                fill={t.textMuted} fontSize={15} fontFamily={font} fontWeight={500}>{tl.l}</text>
            ))}

            {/* Harvey line */}
            <path d={mkLine(hPts)} fill="none" stroke={t.accent2} strokeWidth={2.5}
              opacity={hOp} style={{ transition: 'opacity 0.2s ease' }} />
            <line x1={lastH.px} y1={lastH.py} x2={hR.px} y2={hR.py}
              stroke={t.accent2} strokeWidth={2} strokeDasharray="6 4"
              opacity={hOp * 0.6} style={{ transition: 'opacity 0.2s ease' }} />

            {/* Legora line */}
            <path d={mkLine(lPts)} fill="none" stroke={t.accent} strokeWidth={2.5}
              opacity={lOp} style={{ transition: 'opacity 0.2s ease' }} />
            <line x1={lastL.px} y1={lastL.py} x2={lR.px} y2={lR.py}
              stroke={t.accent} strokeWidth={2} strokeDasharray="6 4"
              opacity={lOp * 0.6} style={{ transition: 'opacity 0.2s ease' }} />

            {/* Harvey dots */}
            {hPts.map((p, i) => (
              <g key={i} opacity={hOp} style={{ transition: 'opacity 0.2s ease', cursor: p.founded ? 'default' : 'pointer' }}
                onMouseEnter={(e) => !p.founded && setTooltip({ x: e.clientX, y: e.clientY, data: p, co: 'Harvey' })}
                onMouseLeave={() => setTooltip(null)}>
                <circle cx={p.px} cy={p.py} r={bR(p.raised)} fill={t.accent2} opacity={0.85} stroke={t.accent2} strokeWidth={1.5} />
                {p.founded ? (
                  <text x={p.px} y={p.py + 26} textAnchor="middle" fill={t.accent2}
                    fontSize={14} fontWeight={600} fontFamily={font}>Founded</text>
                ) : (
                  <text x={p.px} y={p.py - bR(p.raised) - 12} textAnchor="middle" fill={t.accent2}
                    fontSize={16} fontWeight={700} fontFamily={font}>{p.lbl}</text>
                )}
              </g>
            ))}
            <g opacity={hOp * 0.5} style={{ transition: 'opacity 0.2s ease' }}>
              <circle cx={hR.px} cy={hR.py} r={10} fill="none" stroke={t.accent2} strokeWidth={2} strokeDasharray="4 3" />
              <text x={hR.px} y={hR.py - 20} textAnchor="middle" fill={t.accent2}
                fontSize={16} fontWeight={700} fontFamily={font} opacity={0.7}>{hR.lbl}?</text>
            </g>

            {/* Legora dots */}
            {lPts.map((p, i) => (
              <g key={i} opacity={lOp} style={{ transition: 'opacity 0.2s ease', cursor: p.founded ? 'default' : 'pointer' }}
                onMouseEnter={(e) => !p.founded && setTooltip({ x: e.clientX, y: e.clientY, data: p, co: 'Legora' })}
                onMouseLeave={() => setTooltip(null)}>
                <circle cx={p.px} cy={p.py} r={bR(p.raised)} fill={t.accent} opacity={0.85} stroke={t.accent} strokeWidth={1.5} />
                {p.founded ? (
                  <text x={p.px} y={p.py + 26} textAnchor="middle" fill={t.accent}
                    fontSize={14} fontWeight={600} fontFamily={font}>Founded</text>
                ) : (
                  <text x={p.px} y={p.py - bR(p.raised) - 12} textAnchor="middle" fill={t.accent}
                    fontSize={16} fontWeight={700} fontFamily={font}>{p.lbl}</text>
                )}
              </g>
            ))}
            <g opacity={lOp * 0.5} style={{ transition: 'opacity 0.2s ease' }}>
              <circle cx={lR.px} cy={lR.py} r={10} fill="none" stroke={t.accent} strokeWidth={2} strokeDasharray="4 3" />
              <text x={lR.px} y={lR.py - 20} textAnchor="middle" fill={t.accent}
                fontSize={16} fontWeight={700} fontFamily={font} opacity={0.7}>{lR.lbl}?</text>
            </g>
          </svg>

          {/* Tooltip */}
          {tooltip && (
            <div style={{
              position: 'fixed', left: tooltip.x + 14, top: tooltip.y - 12,
              background: t.tooltipBg, border: `1px solid ${t.tooltipBorder}`,
              borderRadius: 10, padding: '14px 18px', color: t.tooltipText,
              fontSize: 14, fontFamily: font, boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              pointerEvents: 'none', zIndex: 10,
            }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6,
                color: tooltip.co === 'Harvey' ? t.accent2 : t.accent }}>
                {tooltip.co} · {tooltip.data.round}
              </div>
              <div style={{ color: t.textSec, marginBottom: 2 }}>{tooltip.data.label}</div>
              <div>Valuation: <strong>{tooltip.data.lbl}</strong></div>
              {tooltip.data.raised > 0 && <div>Raised: <strong>${tooltip.data.raised}M</strong></div>}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 24, paddingTop: 16, borderTop: `1px solid ${t.footerBorder}`,
        }}>
          <span style={{ color: t.textMuted, fontSize: 12, fontFamily: font }}>Source: Dealroom.co</span>
          <DealroomLogo variant={t.logoVariant} />
        </div>
      </div>
    </div>
  );
}
