'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleDown } from 'react-icons/fa'
import { CornerDividerBottom } from './MainComponents/CornerDivider'
import TraceAnimations from './MainComponents/TraceAnimations'

export default function Main() {
  const router = useRouter()

  const handleLinkClick = (item: string) => {
    router.push(`/demo#${item.toLocaleLowerCase()}`)
  }

  return (
    <div className="section-spacing relative flex h-[95vh] flex-col items-center justify-center gap-12 bg-mainPalette-bg pt-12 text-center xl:gap-16 xl:pt-24">
      <TraceAnimations />
      <CornerDividerBottom />
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="z-20 font-main text-[2.5rem] leading-10 tracking-wide text-zinc-700 xl:text-6xl ">
          O <span className="text-mainPalette-primaryButton">site</span> que
          você precisa{' '}
          <span className="text-mainPalette-primaryButton">sem enrolação</span>{' '}
        </h1>
        <h2 className="text-lg leading-relaxed text-mainPalette-text md:max-w-md lg:max-w-2xl xl:max-w-3xl xl:text-xl ">
          Vamos expandir sua marca para o mundo digital. Explore nossa
          plataforma e consolide suas ideias.
        </h2>
      </div>
      {/* Buttons */}
      <div className="z-20 flex w-full flex-col justify-center gap-8 font-main  md:flex-row">
        <Link
          href="/demo"
          rel="noopener noreferrer"
          className="button-hover flex items-center justify-center bg-mainPalette-primaryButton px-4 py-4 text-lg uppercase tracking-widest shadow-md active:scale-95 md:px-12"
        >
          explorar
        </Link>
        <div className="flex flex-col">
          <button className="duration-400 rounded-md bg-mainPalette-bg px-6 py-4 text-lg uppercase tracking-widest shadow-md transition-all lg:hover:bg-zinc-200">
            Projetos
          </button>
        </div>
      </div>
      <Link
        href={'#'}
        onClick={() => handleLinkClick('about')}
        className="absolute bottom-20 flex justify-center gap-2 text-zinc-500 hover:text-mainPalette-text"
      >
        <FaAngleDown
          size={24}
          className="animate-bounce text-mainPalette-primaryButton"
        />
        <p>Descubra</p>
      </Link>
    </div>
  )
}
