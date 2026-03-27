import SectionHeader from './SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Escolha Entre 25+ Motos',
    desc: 'Frota variada pra você escolher. Vários modelos disponíveis, todos prontos pra rodar. Sem fila, sem demora.',
  },
  {
    num: '02',
    title: 'Assine o Contrato',
    desc: 'Só precisa de CNH categoria A. É isso. Processo direto, sem complicação, sem letra miúda.',
  },
  {
    num: '03',
    title: 'Moto na Sua Mão',
    desc: 'Entregamos na sua porta ou você retira com a gente — como preferir. Moto pronta, documentada e segurada.',
  },
  {
    num: '04',
    title: 'Comece a Faturar HOJE',
    desc: 'Delivery, mototáxi, o que quiser. Pode começar no mesmo dia. Você na pista, gerando renda sem esperar.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-brand-dark2">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="Processo" title="Do contrato à estrada em" highlight="4 passos simples" />

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="group flex flex-col gap-5">
              {/* Número */}
              <div className="w-16 h-16 rounded-full border-2 border-brand-red bg-brand-black text-brand-red font-title text-2xl font-bold flex items-center justify-center shadow-lg shadow-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                {s.num}
              </div>
              {/* Conteúdo */}
              <div>
                <h3 className="font-title text-lg font-bold uppercase tracking-wide text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-brand-silver/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
