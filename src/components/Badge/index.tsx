interface BadgeProps {
  icon?: React.ReactNode
  text: string
}

export function Badge({ icon, text }: BadgeProps) {
  return (
    <div
      className={`flex h-[28px] items-center justify-center rounded-full bg-[#E9ECF0] px-2 text-[10px] font-extrabold leading-4`}
    >
      {icon && (
        <span className="mr-2" style={{ fontSize: '16px' }}>
          {icon}
        </span>
      )}
      <span>{text}</span>
    </div>
  )
}
