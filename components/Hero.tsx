import Image from 'next/image'
import Link from 'next/link'

const WA = 'https://wa.me/5562991234567?text=Olá!%20Tenho%20interesse%20em%20alugar%20uma%20moto.'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 bg-brand-black"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(196,30,58,0.12) 0%, transparent 70%), #0a0a0a',
      }}
    >
      {/* Grade decorativa de fundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(196,30,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Conteúdo */}
        <div>
          <span className="inline-block bg-brand-red/10 border border-brand-red/40 text-brand-red px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            🏍️ Aluguel de Motos em Goiânia
          </span>

          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-bold leading-tight uppercase tracking-wide text-white mb-6">
            Alugue sua Moto<br />
            <span className="text-brand-red">a partir de R$39,90/dia</span>
          </h1>

          <p className="text-brand-silver text-lg leading-relaxed mb-9 max-w-lg">
            Comece a ganhar dinheiro com entregas em Goiânia agora mesmo.
            Seguro, guincho 24h, revisões e KM livre —
            tudo já incluso, sem custo extra.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href={WA}
              target="_blank"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <WhatsAppIcon /> Falar no WhatsApp
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold border border-brand-silver/30 text-brand-silver-light hover:border-brand-red hover:text-brand-red transition-all"
            >
              Como Funciona
            </Link>
          </div>

          {/* Barra de confiança */}
          <div className="flex items-center gap-6 flex-wrap">
            <TrustItem value="✅" label="Seguro Incluso" />
            <div className="w-px h-9 bg-white/10" />
            <TrustItem value="✅" label="KM Livre" />
            <div className="w-px h-9 bg-white/10" />
            <TrustItem value="✅" label="Guincho 24h" />
            <div className="w-px h-9 bg-white/10" />
            <TrustItem value="✅" label="Revisões Inclusas" />
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            {/* Anel de glow */}
            <div
              className="absolute w-72 h-72 rounded-full animate-pulse-ring"
              style={{
                background: 'radial-gradient(circle, rgba(196,30,58,0.18) 0%, transparent 70%)',
              }}
            />
            <Image
              src="/logoLocaJV.png"
              alt="LOCAJV"
              width={480}
              height={400}
              className="relative z-10 w-full max-w-md animate-float drop-shadow-[0_0_40px_rgba(196,30,58,0.5)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-silver/50 text-xs uppercase tracking-widest z-10">
        <span>Role para baixo</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C41E3A"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </div>
    </section>
  )
}

function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <strong className="font-title text-3xl font-bold text-brand-red leading-none">
        {value}
      </strong>
      <span className="text-xs text-brand-silver/70 mt-1">{label}</span>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
