'use client'

import Image from "next/image"

import { Input } from "@/components/Input-Field/Index"

import { Mail, LockKeyhole, EyeOff, Eye } from "lucide-react"

import { useState } from "react"
import { Button } from "@/components/Button/Index"

export const FormLogin = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible)
  }


  return (
    <form className="flex flex-col items-center justify-center gap-6 w-[400px]">
      <Image
        src='/images/bg-login.png'
        alt='bg-login'
        width={200}
        height={200}
        quality={100}
      />

      <h1 className="text-3xl font-semibold">Login</h1>

      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <Input.Wrapper>
          <Input.Label label="E-mail" />
          <Input.Field
            placeholder="Digite seu e-mail..."
          />
          <Input.IconLeft icon={Mail} />
        </Input.Wrapper>

        <Input.Wrapper>
          <Input.Label label="Senha" />
          <Input.Field
            type={isVisible ? 'text' : 'password'}
            placeholder="Digite sua senha..."
          />
          <Input.IconLeft icon={LockKeyhole} />
          <button
            onClick={handleChangeVisibility}
          >
            <Input.IconRight icon={isVisible ? Eye : EyeOff} />
          </button>
        </Input.Wrapper>
      </div>

      <Button.Root label="Entrar" />
    </form>
  )
}