import type { Metadata } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import './globals.css'
import BackgroundEffects from '@/components/BackgroundEffects'

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LOCAJV — Aluguel de Motos em Goiânia | Sua Jornada, Nossa Resposta',
  description: 'Alugue motos em Goiânia com seguro, guincho 24h e revisões inclusos. Frota com 25+ motos e vários modelos. Quilometragem livre.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${inter.variable} font-body bg-brand-black text-white antialiased`}>
        <BackgroundEffects />
        {children}
      </body>
    </html>
  )
}
