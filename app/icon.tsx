import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1px',
          }}
        >
          <div
            style={{
              background: 'white',
              width: '6px',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              color: '#2563eb',
            }}
          >
            I
          </div>
          <div
            style={{
              background: 'white',
              width: '6px',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              color: '#2563eb',
              marginLeft: '1px',
            }}
          >
            L
          </div>
          <div
            style={{
              background: 'white',
              width: '6px',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              color: '#2563eb',
              marginLeft: '1px',
            }}
          >
            S
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 