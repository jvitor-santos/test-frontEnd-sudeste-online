import { IoCalendarOutline } from 'react-icons/io5'
import { Badge } from '../Badge'
import { LuClock3 } from 'react-icons/lu'
import { AiOutlineLike } from 'react-icons/ai'

export function CardFooter() {
  return (
    <div className="flex h-[378px] w-[359.33px] rounded-3xl bg-gray text-center">
      <div className="flex flex-col items-center py-8">
        <img src="/assets/png/icon.png" alt="icone" className="size-12" />
        <span className="pt-12 text-[24px] font-extrabold leading-[31.2px]">
          DESIGN BETTER. FASTER. TOGETHER.
        </span>
        <span className="pt-3 text-[16px] font-normal leading-[25.6px]">
          Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizada desde o século XVII.
        </span>
        <div className="flex justify-center gap-2 pt-6">
          <Badge
            text="01/SET/24"
            icon={<IoCalendarOutline />}
            bgColor="#21262F"
            textColor="#ffffff"
          />
          <Badge
            text="7 MIN LEITURA"
            icon={<LuClock3 />}
            bgColor="#21262F"
            textColor="#ffffff"
          />
          <Badge
            text="37"
            icon={<AiOutlineLike />}
            bgColor="#21262F"
            textColor="#ffffff"
          />
        </div>
      </div>
    </div>
  )
}
