interface CardProps {
  title: string
  author: string
  thumbnail: string
}

export function Card({ title, author, thumbnail }: CardProps) {
  return (
    <div className="flex h-[440.81px] flex-col lg:w-[257.5px]">
      <img
        src={thumbnail}
        alt="card book"
        className="h-[386.81px] w-[full] rounded-2xl"
      />
      <div className="flex flex-col pt-4 text-center text-xs">
        <span className="font-extrabold">{title}</span>
        <span className="pt-2 font-semibold">{author}</span>
      </div>
    </div>
  )
}
