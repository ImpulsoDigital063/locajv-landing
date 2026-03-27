import SectionHeader from './SectionHeader'

const benefits = [
  {
    title: 'Seguro Incluso — Zero Surpresa',
    desc: 'Você roda protegido. O seguro já está no contrato — não paga nada a mais, não contrata nada separado. Só roda.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
    ),
  },
  {
    title: 'KM Livre. Corra Quanto Quiser.',
    desc: 'Sem contador, sem cobrança extra. Você faz quantas corridas precisar — seu faturamento é 100% seu.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="19" cy="6" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: 'Quebrou? A Gente Resolve.',
    desc: 'Ligou, a gente vai. Guincho disponível 24h, todos os dias. Sem estresse, sem custo, qualquer hora.',
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    title: 'Moto Sempre em Dia — Custo Zero pra Você',
    desc: 'Revisões de KM são por nossa conta. A moto sempre regulada e bem cuidada. Manutenção é problema nosso, não seu.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      />
    ),
  },
  {
    title: 'Escolha a Moto Certa pro Seu Trabalho',
    desc: 'Frota com 25+ motos e vários modelos. Você vê o que tem disponível e escolhe a que mais combina com o seu trampo.',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 12h10M4 16h6" />
      </>
    ),
  },
  {
    title: 'Simples. Assina e Roda.',
    desc: 'Sem burocracia, sem letra miúda. Escolheu a moto, assinou o contrato — já pode sair rodando. Rápido assim.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline strokeLinecap="round" strokeLinejoin="round" points="14,2 14,8 20,8" />
        <line strokeLinecap="round" x1="16" y1="13" x2="8" y2="13" />
        <line strokeLinecap="round" x1="16" y1="17" x2="8" y2="17" />
      </>
    ),
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="Por que escolher" title="Tudo que você precisa," highlight="a gente já incluiu" />

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-2xl p-px overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(196,30,58,0.3) 0%, rgba(255,255,255,0.06) 50%, rgba(196,30,58,0.1) 100%)',
              }}
            >
              {/* Card interno */}
              <div className="relative h-full bg-brand-dark2 rounded-2xl p-8 overflow-hidden">

                {/* Glow de fundo ao hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Número decorativo */}
                <span className="absolute top-5 right-6 font-title text-6xl font-bold text-white/4 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Ícone */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-14 h-14 bg-brand-red/20 rounded-xl blur-lg group-hover:bg-brand-red/35 transition-colors duration-300" />
                  <div className="relative w-14 h-14 bg-brand-dark3 border border-brand-red/30 rounded-xl flex items-center justify-center text-brand-red group-hover:border-brand-red/60 group-hover:bg-brand-red/10 transition-all duration-300">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      {b.icon}
                    </svg>
                  </div>
                </div>

                <h3 className="font-title text-lg font-bold uppercase tracking-wide text-white mb-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-brand-silver/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
