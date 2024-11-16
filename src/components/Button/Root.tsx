import { ComponentProps } from "react"

type ButtonProps = {
  label: string
} & ComponentProps<'button'>


export const Root = ({ label, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className="bg-[#76c885] w-full rounded-3xl h-12 shadow-md 
      text-white font-semibold text-sm hover:bg-gray-400"
      {...buttonProps}
    >
      {label}
    </button>
  )
}