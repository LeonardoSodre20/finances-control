'use client'

import { Menu } from "lucide-react"
import { useState } from "react"

export const SideBar = () => {

  const [width, setWidth] = useState<'70px' | '150px'>('70px')

  const handleChangeWidth = () => {
    setWidth((prevValue) => prevValue === '70px' ? '150px' : '70px')
  }

  return (
    <section className={`fixed top-0 left-0 bg-[#76c885] w-[${width}] 
    h-full flex flex-col justify-start items-center`}>
      <button
        className="mt-1 cursor-pointer hover:bg-slate-300 p-1 rounded-sm"
        onClick={handleChangeWidth}
      >
        <Menu size={20} color="#fff" />
      </button>
    </section>
  )
}