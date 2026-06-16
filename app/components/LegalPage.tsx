import Link from 'next/link'

interface LegalPageProps {
  title: string
  children: React.ReactNode
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div style={{
      position: 'relative', minHeight: '100vh',
      background: '#0a0c0b', fontFamily: 'inherit',
      color: '#e8ebe8', overflow: 'hidden',
    }}>
      {/* Static blurs (no animation on legal pages) */}
      <div style={{
        position: 'absolute', top: '-12%', right: '-6%',
        width: '44vw', height: '44vw', maxWidth: '560px', maxHeight: '560px',
        background: 'radial-gradient(circle, oklch(0.72 0.16 155) 0%, transparent 68%)',
        filter: 'blur(120px)', opacity: 0.32, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-16%', left: '-8%',
        width: '46vw', height: '46vw', maxWidth: '600px', maxHeight: '600px',
        background: 'radial-gradient(circle, oklch(0.72 0.16 350) 0%, transparent 68%)',
        filter: 'blur(130px)', opacity: 0.28, pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '720px', margin: '0 auto', padding: '56px 32px 96px',
      }}>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontSize: '14px', fontWeight: 500,
          color: 'oklch(0.8 0.04 155)', textDecoration: 'none', marginBottom: '48px',
          transition: 'color 0.2s',
        }}>
          ← Back to Beta Works
        </Link>

        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 46px)', fontWeight: 600,
          letterSpacing: '-0.025em', marginBottom: '10px',
        }}>
          {title}
        </h1>
        <p style={{ fontSize: '14px', color: 'oklch(0.62 0.01 150)', marginBottom: '36px' }}>
          Last updated: June 2026
        </p>

        {children}

      </div>
    </div>
  )
}

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '16px', lineHeight: 1.7,
      color: 'oklch(0.85 0.01 150)', marginBottom: '8px', textWrap: 'pretty',
    }}>
      {children}
    </p>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 style={{ fontSize: '19px', fontWeight: 600, margin: '40px 0 12px' }}>{title}</h2>
      <p style={{
        fontSize: '16px', lineHeight: 1.7,
        color: 'oklch(0.85 0.01 150)', textWrap: 'pretty',
      }}>
        {children}
      </p>
    </>
  )
}

export function FooterNote({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '14px', lineHeight: 1.7,
      color: 'oklch(0.62 0.01 150)',
      marginTop: '48px', paddingTop: '24px',
      borderTop: '1px solid oklch(0.3 0.005 150)',
    }}>
      {children}
    </p>
  )
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#e8ebe8' }}>{children}</strong>
}

export function MailLink() {
  return (
    <a href="mailto:hello@betaworks.co.uk" style={{ color: 'inherit' }}>
      hello@betaworks.co.uk
    </a>
  )
}
