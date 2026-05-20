import { ImageResponse } from 'next/og';
import { siteData } from '@/lib/site-data';

export const alt = `${siteData.site.name} social image`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function brandInitials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'GG';
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div
            style={{
              width: 140,
              height: 140,
              background: 'linear-gradient(to bottom right, #2d8a4e, #1a522f)',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              color: '#facc15',
              fontWeight: 900,
              marginRight: '40px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
            }}
          >
            {brandInitials(siteData.site.shortName)}
          </div>
          <h1 style={{ fontSize: 82, color: '#f8fafc', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
            {siteData.game.name}
          </h1>
        </div>
        <p style={{ fontSize: 42, color: '#94a3b8', margin: 0, textAlign: 'center', maxWidth: '900px', lineHeight: 1.4 }}>
          {siteData.site.description}
        </p>
        <div style={{ display: 'flex', marginTop: '60px', gap: '32px' }}>
          {['Codes', 'Tier List', 'Units', 'Guides'].map((tag) => (
            <div key={tag} style={{ padding: '20px 40px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', color: '#cbd5e1', fontSize: 36, fontWeight: 600 }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}