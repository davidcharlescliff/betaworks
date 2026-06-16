import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: '#0a0c0b',
      fontFamily: 'inherit',
      color: '#f4f6f4',
    }}>
      {/* Animated blurs */}
      <div className="blur-green" style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '55vw', height: '55vw', maxWidth: '760px', maxHeight: '760px',
        background: 'radial-gradient(circle, oklch(0.72 0.16 155) 0%, transparent 68%)',
        filter: 'blur(110px)', opacity: 0.55, pointerEvents: 'none',
      }} />
      <div className="blur-purple" style={{
        position: 'absolute', bottom: '-15%', right: '-8%',
        width: '58vw', height: '58vw', maxWidth: '800px', maxHeight: '800px',
        background: 'radial-gradient(circle, oklch(0.72 0.16 350) 0%, transparent 68%)',
        filter: 'blur(120px)', opacity: 0.5, pointerEvents: 'none',
      }} />
      <div className="blur-pink" style={{
        position: 'absolute', top: '35%', left: '45%',
        width: '36vw', height: '36vw', maxWidth: '480px', maxHeight: '480px',
        background: 'radial-gradient(circle, oklch(0.70 0.15 320) 0%, transparent 70%)',
        filter: 'blur(130px)', opacity: 0.4, pointerEvents: 'none',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex', flexDirection: 'column',
      }}>
        {/* Brand */}
        <header className="rise-0" style={{ flex: '0 0 auto', padding: '40px 48px' }}>
          <img src="/bwLogoWhite.svg" alt="BetaWorks" style={{ height: '20px', width: 'auto' }} />
        </header>

        {/* Hero */}
        <main style={{
          flex: '1 1 auto', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          <div style={{
            maxWidth: '820px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '28px',
          }}>
            <h1 className="rise-1" style={{
              fontSize: 'clamp(38px, 6.2vw, 76px)',
              lineHeight: 1.04, fontWeight: 600,
              letterSpacing: '-0.03em', textWrap: 'balance',
            }}>
              Simple web tools for small businesses
            </h1>
            <p className="rise-2" style={{
              fontSize: 'clamp(17px, 2vw, 22px)', lineHeight: 1.5, fontWeight: 400,
              color: 'oklch(0.86 0.01 150)', maxWidth: '580px', textWrap: 'pretty',
            }}>
              Replace repetitive admin, spreadsheets and workarounds with simple, custom-built apps.
            </p>
            <div className="rise-3" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '10px 20px',
              border: '1px solid oklch(0.78 0.16 155 / 0.35)',
              borderRadius: '100px',
              background: 'oklch(0.78 0.16 155 / 0.08)',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'oklch(0.82 0.16 155)',
              }} />
              <span style={{ fontSize: '15px', fontWeight: 500, color: 'oklch(0.92 0.04 155)' }}>
                No build fee — just one monthly subscription
              </span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="rise-4" style={{
          flex: '0 0 auto', padding: '32px 48px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@betaworks.co.uk"
              style={{ fontSize: '14px', fontWeight: 500, color: 'oklch(0.85 0.01 150)', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              hello@betaworks.co.uk
            </a>
            <span style={{ fontSize: '13px', color: 'oklch(0.45 0.01 150)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'oklch(0.6 0.01 150)' }}>© 2026 Beta Works · York</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ fontSize: '14px', color: 'oklch(0.78 0.01 150)', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: '14px', color: 'oklch(0.78 0.01 150)', textDecoration: 'none', transition: 'color 0.2s' }}>Terms of Use</Link>
            <Link href="/cookies" style={{ fontSize: '14px', color: 'oklch(0.78 0.01 150)', textDecoration: 'none', transition: 'color 0.2s' }}>Cookie Notice</Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}
