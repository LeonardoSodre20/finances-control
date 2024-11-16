import { ElementType } from "react"

type IconProps = {
  icon: ElementType
}

export const IconRight = ({ icon: Icon }: IconProps) => {
  return (
    <div className="absolute bottom-3 right-3 z-10 text-gray-400 p-1">
      <Icon size={20} />
    </div>
  )
}