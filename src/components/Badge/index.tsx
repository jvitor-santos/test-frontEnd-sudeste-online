interface BadgeProps {
  icon?: React.ReactNode
  text: string
  bgColor?: string
  textColor?: string
}

export function Badge({ icon, text, bgColor, textColor }: BadgeProps) {
  return (
    <div
      className={`flex h-[28px] items-center justify-center rounded-full px-2 text-[10px] font-extrabold leading-4`}
      style={{
        backgroundColor: bgColor || '#F3F4F6',
        color: textColor || '##21262F',
      }}
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
