import { ReactNode } from "react"


export const WrapperPage = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center"
    >
      {children}
    </main>
  )
}