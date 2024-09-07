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

      <div className="flex w-full items-center justify-center pt-12 xs:gap-2 lg:gap-x-6">
        <div className="xs:flex xs:flex-col xs:text-xs lg:flex-none lg:flex-row lg:text-xs">
          <span className="font-semibold">CATEGORIA:</span>
          <span className="font-extrabold text-info lg:ml-2">
            POR ONDE COMEÇAR
          </span>
        </div>

        <div className="flex xs:flex-col xs:gap-3 lg:flex-row lg:gap-6">
          <Badge icon={<LuClock3 />} text="7 MIN LEITURA" />
          <Badge icon={<IoCalendarOutline />} text="01/SETEMBRO/2024" />
        </div>
      </div>
    </header>
  )
}
