import { ReactNode } from "react"

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="w-full relative"
    >
      {children}
    </div>
  )
}