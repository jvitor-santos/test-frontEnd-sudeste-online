import { IoCalendarOutline } from 'react-icons/io5'
import { Badge } from '../Badge'
import { LuClock3 } from 'react-icons/lu'
import { AiOutlineLike } from 'react-icons/ai'

export function ArticleCard() {
  return (
    <div className="flex w-[960px] rounded-3xl bg-gray">
      <div className="mx-12 flex flex-col py-8">
        <span className="text-[28px] font-extrabold leading-[36.4px]">
          DESIGN BETTER. FASTER. TOGETHER.
        </span>
        <span className="pt-3 text-[18px] font-normal leading-[28.8px]">
          Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizada desde o século XVII
          amet dollor aint.
        </span>
        <div className="flex gap-4 pt-6">
          <Badge
            text="01/SETEMBRO/2024"
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
