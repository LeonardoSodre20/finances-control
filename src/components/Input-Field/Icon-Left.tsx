import { ElementType } from "react"

type IconProps = {
  icon: ElementType
}

export const IconLeft = ({ icon: Icon }: IconProps) => {
  return (
    <div className="absolute bottom-3 left-3 z-10 text-gray-400 
    border-r border-r-gray-400 p-1 pointer-events-none">
      <Icon size={20} />
    </div>
  )
}