'use client'

import Link from 'next/link'
import { CornerDividerBottom } from './mainComponents/CornerDivider'
import DiscoverButton from './mainComponents/DiscoverButton'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  const handleLinkClick = () => {
    router.push('/#service')
  }
  return (
    <div
      id="hero"
      className="section-spacing relative flex flex-col items-center justify-center gap-12 bg-gradient-to-b  from-mainPalette-bg to-zinc-300 py-36 text-center md:py-52 xl:gap-16 xl:pb-32 2xl:py-80"
    >
      <CornerDividerBottom />
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="z-20 font-main text-[2.5rem] leading-10 tracking-wide text-zinc-700 xl:text-6xl ">
          O <span className="text-mainPalette-primaryButton">site</span> que
          você precisa{' '}
          <span className="text-mainPalette-primaryButton">sem enrolação</span>{' '}
        </h1>
        <h2 className="text-lg leading-relaxed text-mainPalette-text md:max-w-md lg:max-w-2xl xl:max-w-3xl xl:text-xl ">
          Estamos aqui para expandir sua marca para o mundo digital. Explore
          nossa plataforma e consolide suas ideias.
        </h2>
      </div>

      {/* Buttons */}
      <div className="z-20 flex w-full flex-col justify-center gap-8 font-main  md:flex-row">
        <Link
          href="#"
          onClick={handleLinkClick}
          rel="noopener noreferrer"
          className="button-hover flex items-center justify-center bg-mainPalette-primaryButton px-4 py-4 text-lg uppercase tracking-widest shadow-md active:scale-95 md:px-12"
        >
          explorar
        </Link>
        <div className="flex flex-col">
          <button className="duration-400 rounded-md bg-mainPalette-bg px-6 py-4 text-lg uppercase tracking-widest shadow-md transition-all active:scale-95 md:px-12 lg:hover:bg-zinc-200">
            Projetos
          </button>
        </div>
      </div>

      <DiscoverButton />
    </div>
  )
}
