export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Orb superior direito */}
      <div
        className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full blur-[130px] animate-orb-1"
        style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
      />

      {/* Orb inferior esquerdo */}
      <div
        className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full blur-[120px] animate-orb-2"
        style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.09) 0%, transparent 70%)' }}
      />

      {/* Orb central — muito sutil */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] animate-orb-3"
        style={{ background: 'radial-gradient(ellipse, rgba(196,30,58,0.05) 0%, transparent 70%)' }}
      />

      {/* Ruído de textura sutil */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}
