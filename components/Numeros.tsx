'use client'

import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'

const stats = [
  { value: 25,  suffix: '+',  label: 'Motos na frota',           sublabel: 'Sempre tem uma pra você',     highlight: true },
  { value: 24,  suffix: 'h',  label: 'Guincho disponível',       sublabel: 'Na hora que precisar',        highlight: false },
  { value: 0,   suffix: '',    label: 'KM Ilimitado',            sublabel: 'Trabalhe sem freio',          highlight: false },
  { value: 100, suffix: '%',  label: 'Revisões por nossa conta', sublabel: 'Você só foca em ganhar',      highlight: false },
]

function StatCard({
  value,
  suffix,
  label,
  sublabel,
  highlight,
}: {
  value: number
  suffix: string
  label: string
  sublabel?: string
  highlight: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value === 0) { setCount(0); return }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let current = 0
        const step = value / (1400 / 16)
        const timer = setInterval(() => {
          current += step
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 16)
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className={`rounded-xl p-10 text-center border transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? 'bg-brand-red/5 border-brand-red/40'
          : 'bg-brand-dark2 border-white/6 hover:border-brand-red/40'
      }`}
    >
      <div className="mb-3">
        <span className="font-title text-6xl font-bold text-brand-red leading-none">
          {value === 0 ? '∞' : count}
        </span>
        <span className="font-title text-3xl font-bold text-brand-red align-top mt-2.5 inline-block">
          {value === 0 ? '' : suffix}
        </span>
      </div>
      <p className="text-xs text-brand-silver/60 uppercase tracking-widest font-semibold">
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-brand-silver/40 mt-1 normal-case tracking-normal">{sublabel}</p>
      )}
    </div>
  )
}

export default function Numeros() {
  return (
    <section
      id="numeros"
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      {/* Glow central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,30,58,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader tag="Confiança" title="Por que Goiânia" highlight="confia na LOCAJV" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
