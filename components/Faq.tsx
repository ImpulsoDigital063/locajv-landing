'use client'

import { useState } from 'react'
import SectionHeader from './SectionHeader'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Quais são os requisitos pra alugar?',
    a: <>Você precisa de <strong className="text-brand-silver-light">CNH categoria A</strong> válida e documentação regularizada. O processo é simples — fale com a gente pelo WhatsApp e a gente te orienta em tudo.</>,
  },
  {
    q: 'Quanto custa por dia?',
    a: <>A partir de <strong className="text-brand-silver-light">R$39,90/dia</strong>. Tudo incluso: seguro, guincho 24h, revisões e KM livre. Fale no WhatsApp pra ver os modelos disponíveis agora.</>,
  },
  {
    q: 'Preciso contratar seguro separado?',
    a: <>Não. O seguro já faz parte do <strong className="text-brand-silver-light">contrato de assinatura</strong>. Você não paga nada a mais por isso — já está tudo incluído.</>,
  },
  {
    q: 'E se eu quebrar no meio da corrida?',
    a: <>Sem problema. Temos <strong className="text-brand-silver-light">guincho disponível 24 horas por dia</strong>. Você liga, a gente resolve. Sem estresse, sem custo.</>,
  },
  {
    q: 'As revisões de quilometragem são por minha conta?',
    a: <>Não. As revisões de KM são <strong className="text-brand-silver-light">por nossa conta</strong>. Você só roda. A manutenção preventiva é responsabilidade da LOCAJV.</>,
  },
  {
    q: 'Tem limite de quilometragem?',
    a: <>Não. A quilometragem é <strong className="text-brand-silver-light">completamente livre</strong>. Você roda quantos quilômetros precisar sem nenhuma cobrança extra.</>,
  },
  {
    q: 'Quais modelos de moto estão disponíveis?',
    a: <>Temos uma frota com <strong className="text-brand-silver-light">mais de 25 motos e vários modelos</strong>. Fale no WhatsApp pra ver quais estão disponíveis agora.</>,
  },
  {
    q: 'Como funciona o contrato de assinatura?',
    a: <>É simples: você escolhe a moto, assina o contrato e já pode sair rodando. Tudo claro, sem letra miúda. Fale com a gente pelo WhatsApp pra tirar qualquer dúvida.</>,
  },
  {
    q: 'Vocês atuam em toda Goiânia?',
    a: <>Sim. Estamos em <strong className="text-brand-silver-light">Goiânia, GO</strong> e atendemos toda a região. Fale com a gente pra combinar a retirada ou entrega da moto.</>,
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-24 bg-brand-dark2">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="Dúvidas" title="Perguntas" highlight="frequentes" />

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`bg-brand-dark3 rounded-xl border cursor-pointer transition-colors duration-200 ${
                open === i ? 'border-brand-red/40' : 'border-white/6 hover:border-white/12'
              }`}
            >
              {/* Pergunta */}
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <h4 className="text-sm font-semibold text-white leading-snug">{faq.q}</h4>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`text-brand-red flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </div>

              {/* Resposta com animação suave */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm text-brand-silver/70 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
