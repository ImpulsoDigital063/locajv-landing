'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#beneficios',    label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#numeros',       label: 'Números' },
  { href: '#faq',           label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-red/20 py-2.5'
          : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" onClick={close}>
          <Image
            src="/logoLocaJV.png"
            alt="LOCAJV"
            width={140}
            height={56}
            className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(196,30,58,0.4)]"
            priority
          />
        </Link>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-brand-silver-light text-sm font-medium tracking-wide hover:text-brand-red transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contato"
              className="bg-brand-red text-white px-6 py-2.5 rounded-md text-sm font-bold tracking-wide hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/20"
            >
              Alugar Agora
            </Link>
          </li>
        </ul>

        {/* Hambúrguer — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1.5 z-[1001] relative"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-brand-black/98 flex flex-col items-center justify-center gap-8 z-[999]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-xl font-medium text-brand-silver-light hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={close}
            className="bg-brand-red text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-brand-red-dark transition-colors"
          >
            Alugar Agora
          </Link>
        </div>
      )}
    </nav>
  )
}
