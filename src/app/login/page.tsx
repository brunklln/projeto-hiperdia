"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Login() {
  const [lembrar, setLembrar] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // integrar autenticação aqui
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-4xl">

        {/* Logo */}
        <div className="flex items-center justify-center w-64 h-32">
          {/* SUBSTITUIR O SPAN PELA LOGO */}
          <span className="text-5xl font-bold text-gray-800 tracking-widest">LOGO</span>
        </div>

        {/* form login */}
        <div className="w-full max-w-sm bg-[#2196F3] rounded-2xl p-7 shadow-lg flex flex-col gap-4">

          <h1 className="text-center text-2xl font-semibold text-white">Login</h1>

          {/* Botão gov.br */}
          <Button
            type="button"
            className="w-full rounded-full bg-[#003967] hover:bg-[#002a4d] text-white font-medium h-10"
          >
            Entrar com gov.br
          </Button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            {/* E-mail */}
            <Input
              type="email"
              placeholder="E-mail"
              required
              className="rounded-md h-10 bg-white border-none text-gray-700 placeholder:text-gray-400
              focus-visible:ring-2 focus-visible:ring-[#003967]"
            />

            {/* Senha */}
            <Input
              type="password"
              placeholder="Senha"
              required
              className="rounded-md h-10 bg-white border-none text-gray-700 placeholder:text-gray-400
              focus-visible:ring-2 focus-visible:ring-[#003967]"
            />

            {/* Lembrar de mim */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLembrar(v => !v)}
                className={`w-4 h-4 rounded-sm border-2 border-white flex items-center justify-center transition-colors
                  ${lembrar ? "bg-white" : "bg-transparent"}`}
              >
                {lembrar && (
                  <svg className="w-3 h-3 text-[#2196F3]" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <Label
                className="text-sm text-white cursor-pointer select-none"
                onClick={() => setLembrar(v => !v)}
              >
                Lembrar de mim
              </Label>
            </div>

            {/* Botão entrar */}
            <Button
              type="submit"
              className="w-full rounded-md bg-[#003967] hover:bg-[#002a4d] text-white font-medium h-10 mt-1"
            >
              Entrar
            </Button>

            {/* Esqueceu a senha */}
            <div className="text-center">
              <Link
                href="/esqueci-senha"
                className="text-sm text-white underline hover:text-blue-100 transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>

          {/* Divisor */}
          <div className="border-t border-white/30 pt-3 text-center">
            <p className="text-sm text-white">
              Ainda não tem conta?{" "}
              <Link
                href="#"   //adicionar a rota do cadastro de usuario
                className="text-white font-semibold underline hover:text-blue-100 transition-colors"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}