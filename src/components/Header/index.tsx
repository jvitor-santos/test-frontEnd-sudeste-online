import { IoCalendarOutline } from 'react-icons/io5'
import { LuClock3 } from 'react-icons/lu'

import { Badge } from '../Badge'

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center xs:text-center md:text-center lg:h-[387px] lg:w-[1174px]">
      <img src="/assets/png/icon.png" alt="icone" className="xs:pt-12" />
      <h1 className="pt-12 text-5xl font-extrabold">
        DESIGN BETTER. FASTER. TOGETHER.
      </h1>
      <h2 className="pt-4 text-lg font-normal">
        The digital product design platform powering the world’s best user
        experiences
      </h2>

      <div className="flex w-full items-center justify-center gap-x-6 pt-12">
        <div className="text-xs">
          <span className="font-semibold">CATEGORIA: </span>
          <span className="font-extrabold text-info">POR ONDE COMEÇAR</span>
        </div>

        <Badge icon={<LuClock3 />} text="7 MIN LEITURA" />
        <Badge icon={<IoCalendarOutline />} text="01/SETEMBRO/2024" />
      </div>
    </header>
  )
}
