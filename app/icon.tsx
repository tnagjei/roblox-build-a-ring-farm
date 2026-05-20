import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, #2d8a4e, #1a522f)',
          borderRadius: '128px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#facc15',
            fontSize: 320,
            fontWeight: 900,
            textShadow: '0 10px 20px rgba(0,0,0,0.4)',
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
