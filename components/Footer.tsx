import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <Image
          src="/logoLocaJV.png"
          alt="LOCAJV"
          width={120}
          height={48}
          className="h-12 w-auto opacity-60 grayscale-[30%]"
        />
        <p className="text-sm text-brand-silver/50">
          &copy; {new Date().getFullYear()} LOCAJV. Todos os direitos reservados.
        </p>
        <p className="text-xs text-brand-silver/30">
          Desenvolvido por <strong className="text-brand-silver/50">Impulso Digital</strong>
        </p>
      </div>
    </footer>
  )
}
