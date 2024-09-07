import { AiOutlineLike } from 'react-icons/ai'

export function ButtonLike() {
  return (
    <div className="flex h-[56px] w-[98px] items-center justify-around rounded-3xl border border-black">
      <AiOutlineLike className="size-6" />
      <span className="text-[11px] font-extrabold leading-[16.5px]">37</span>
    </div>
  )
}
