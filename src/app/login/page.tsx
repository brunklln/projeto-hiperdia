"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Login() {
  const [lembrar, setLembrar] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // integrar autenticação aqui
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">

      <Card className="w-full max-w-5xl border-2 border-[#2196F3] shadow-xl overflow-hidden bg-white rounded-lg">
        <CardContent className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* Logo */}
        <div className="flex items-center justify-center w-70 md:w-96">
          {/* Substituir a Logo atual por uma melhor depois */}
          <Image 
          src="/logo_hiperdia.svg" 
          alt="Logodo sistema"
          width={1000}
          height={1000}
          priority
          className="w-full h-auto"
          />
        </div>

        {/* Card de login */}
        <div className="w-full max-w-sm shrink-0 bg-white border border-blue-500 rounded-2xl p-7 shadow-lg flex flex-col gap-4">

          <h1 className="text-center text-2xl font-semibold text-[#003967]">Login</h1>

          {/* Botão gov.br */}
          <Button
            type="button"
            className="w-full rounded-full bg-[#003967] hover:bg-[#002a4d] text-white font-medium h-10"
          >
            Entrar com gov.br
          </Button>

          <div className="border-t border-blue-500 pt-3 text-center"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            {/* E-mail */}
            <Input
              type="email"
              placeholder="E-mail"
              required
              className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400
              focus-visible:ring-2 focus-visible:ring-[#003967]"
            />

            {/* Senha */}
            <Input
              type="password"
              placeholder="Senha"
              required
              className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400
              focus-visible:ring-2 focus-visible:ring-[#003967]"
            />

            {/* Botão entrar */}
            <Button
              type="submit"
              className="w-full rounded-md bg-[#003967] hover:bg-[#002a4d] text-white font-medium h-10 mt-1"
            >
              <Link 
              href={"/dashboard"}>
                Entrar
              </Link>
            </Button>

            {/* Esqueceu a senha */}
            <div className="text-center">
              <Link
                href="/esqueci-senha"
                className="text-sm text-blue-500 underline hover:text-blue-100 transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>

          {/* Divisor */}
          <div className="border-t border-blue-500 pt-3 text-center">
            <p className="text-sm text-blue-500">
              Ainda não tem conta?{" "}
              <Link
                href="/cadastro"
                className="text-blue-500 font-semibold underline hover:text-blue-100 transition-colors"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
        </CardContent>
      </Card>

    </main>
  )
}