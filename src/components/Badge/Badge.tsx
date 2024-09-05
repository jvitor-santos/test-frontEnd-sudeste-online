interface BadgeProps {
    icon?: any;
    text: string;
}

export function Badge ({ icon, text }: BadgeProps) {
    return (
        <div
      className={`flex justify-center items-center h-[28px] bg-[#E9ECF0] rounded-full pl-2 pr-2 font-extrabold text-[10px] leading-4`}
    >
      {icon && <span className="mr-2" style={{ fontSize: '16px' }}>{icon}</span>}
      <span>{text}</span>
    </div>
    )
}