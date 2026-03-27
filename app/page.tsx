import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import CardPreco       from '@/components/CardPreco'
import StripComparativo from '@/components/StripComparativo'
import Beneficios      from '@/components/Beneficios'
import ComoFunciona    from '@/components/ComoFunciona'
import Numeros         from '@/components/Numeros'
import Faq             from '@/components/Faq'
import CtaFinal        from '@/components/CtaFinal'
import Footer          from '@/components/Footer'
import WhatsAppFloat   from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <CardPreco />
        <StripComparativo />
        <Beneficios />
        <ComoFunciona />
        <Numeros />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
