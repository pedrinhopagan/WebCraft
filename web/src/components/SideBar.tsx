import {
  Activity,
  AlertOctagon,
  ArrowLeftFromLine,
  Bird,
  PaintBucket,
  Wallpaper,
} from 'lucide-react'
import Link from 'next/link'

export function SideBar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-32 flex-col items-center justify-center space-y-12 text-mainPalette-text">
      <Link
        href={'/'}
        className="absolute top-10 m-2 flex h-12 w-12 items-center justify-center rounded-3xl bg-mainPalette-bgAlt text-mainPalette-text transition-all ease-linear hover:-translate-x-1 hover:bg-mainPalette-text hover:text-mainPalette-bg"
      >
        <ArrowLeftFromLine size={28} />
      </Link>

      <SideBarIcon text="Resumo" icon={<Activity size={30} />} />
      <SideBarIcon text="Notifição" icon={<AlertOctagon size={30} />} />
      <SideBarIcon text="Dispositivo" icon={<Wallpaper size={30} />} />
      <SideBarIcon text="Piriquito" icon={<Bird size={30} />} />
      <SideBarIcon text="Cores" icon={<PaintBucket size={30} />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)
