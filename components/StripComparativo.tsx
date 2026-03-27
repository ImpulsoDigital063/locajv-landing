const problems = [
  'Seguro separado — você paga ou fica desprotegido',
  'Quebrou? O prejuízo é seu.',
  'Revisão? Tira do seu lucro.',
  'KM limitado — trabalhou demais? Paga mais.',
  'Uma moto só. Gosta ou vai embora.',
]

const solutions = [
  'Seguro incluso no contrato',
  'Guincho 24h incluso',
  'Revisões de KM por nossa conta',
  'Quilometragem livre',
  'Mais de 25 motos, vários modelos',
]

export default function StripComparativo() {
  return (
    <section className="py-16 bg-brand-dark2 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* Lado negativo */}
          <div>
            <p className="font-title text-base font-bold uppercase tracking-widest text-brand-silver/50 mb-5">
              Por que a concorrência te deixa na mão 🚫
            </p>
            <ul className="flex flex-col gap-3">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-3 text-brand-silver/40 text-sm font-medium line-through decoration-brand-silver/30">
                  <span className="no-underline">❌</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* VS */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center font-title text-xl font-bold text-white shadow-lg shadow-brand-red/30">
              VS
            </div>
          </div>

          {/* Lado positivo */}
          <div>
            <p className="font-title text-base font-bold uppercase tracking-widest text-brand-red mb-5">
              Na LOCAJV você tem
            </p>
            <ul className="flex flex-col gap-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-center gap-3 text-brand-silver-light text-sm font-medium">
                  <span>✅</span> {s}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
