const WA = 'https://wa.me/5562991234567?text=Olá!%20Quero%20garantir%20minha%20moto.%20Podem%20me%20ajudar?'

const inclusos = [
  'Seguro incluso',
  'Guincho 24h',
  'KM Livre',
  'Revisões por nossa conta',
]

export default function CardPreco() {
  return (
    <section className="py-10 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <div className="relative bg-brand-dark2 border border-brand-red/40 rounded-2xl px-10 py-9 max-w-sm w-full shadow-xl shadow-brand-red/10">
          {/* Tag "Mais Popular" */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
              Melhor Custo-Benefício
            </span>
          </div>

          {/* Modelo */}
          <p className="text-brand-silver/60 text-xs font-semibold uppercase tracking-widest mb-1 mt-2">
            Moto Seminova
          </p>

          {/* Preço */}
          <div className="flex items-end gap-1 mb-6">
            <span className="text-brand-silver/50 text-lg font-bold leading-none mb-1">R$</span>
            <span className="font-title text-6xl font-bold text-brand-red leading-none">39,90</span>
            <span className="text-brand-silver/50 text-base font-semibold mb-1">/dia</span>
          </div>

          {/* Lista de inclusos */}
          <ul className="flex flex-col gap-2.5 mb-8">
            {inclusos.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-brand-silver-light font-medium">
                <span className="text-green-400">✅</span> {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-lg text-sm font-bold hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            Garantir Minha Moto
          </a>

          <p className="text-center text-brand-silver/40 text-xs mt-3">
            Contrato semanal ou mensal · Sem burocracia
          </p>
        </div>
      </div>
    </section>
  )
}
