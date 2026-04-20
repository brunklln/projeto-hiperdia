
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    atribuicao: "",
    registro: "",
    cep: "",
    bairro: "",
    rua: "",
    numero: ""
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // integrar lógica de cadastro aqui
    console.log("Dados do formulário:", formData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md border-2 border-gray-100 shadow-xl bg-white rounded-lg">
        <CardContent className="p-8 flex flex-col gap-6">
          <h1 className="text-center text-2xl font-semibold text-[#003967]">Cadastre-se</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nome */}
            <div>
              <Label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                required
                value={formData.nome}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* E-mail */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Senha */}
            <div>
              <Label htmlFor="senha" className="text-sm font-medium text-gray-700">Senha</Label>
              <Input
                id="senha"
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                required
                value={formData.senha}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Confirmar Senha */}
            <div>
              <Label htmlFor="confirmarSenha" className="text-sm font-medium text-gray-700">Confirmar Senha</Label>
              <Input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Confirme sua senha"
                required
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Atribuição */}
            <div>
              <Label htmlFor="atribuicao" className="text-sm font-medium text-gray-700">Atribuição</Label>
              <select
                id="atribuicao"
                name="atribuicao"
                required
                value={formData.atribuicao}
                onChange={handleChange}
                className="rounded-md h-10 border border-blue-500 bg-white text-gray-700 focus-visible:ring-2 focus-visible:ring-[#003967] w-full px-3"
              >
                <option value="">Selecione uma atribuição</option>
                <option value="médico">Médico</option>
                <option value="enfermeiro">Enfermeiro</option>
                <option value="técnico de enfermagem">Técnico de Enfermagem</option>
                <option value="farmacêutico">Farmacêutico</option>
                <option value="técnico em farmácia">Técnico em Farmácia</option>
                <option value="odontólogo">Odontólogo</option>
              </select>
            </div>

            {/* Registro */}
            <div>
              <Label htmlFor="registro" className="text-sm font-medium text-gray-700">Registro</Label>
              <Input
                id="registro"
                name="registro"
                type="text"
                placeholder="Número do registro profissional"
                required
                value={formData.registro}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Endereço */}
            <h2 className="text-lg font-medium text-[#003967] mt-4 mb-2">Endereço</h2>

            {/* CEP */}
            <div>
              <Label htmlFor="cep" className="text-sm font-medium text-gray-700">CEP</Label>
              <Input
                id="cep"
                name="cep"
                type="text"
                placeholder="00000-000"
                required
                value={formData.cep}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Bairro */}
            <div>
              <Label htmlFor="bairro" className="text-sm font-medium text-gray-700">Bairro</Label>
              <Input
                id="bairro"
                name="bairro"
                type="text"
                placeholder="Nome do bairro"
                required
                value={formData.bairro}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Rua */}
            <div>
              <Label htmlFor="rua" className="text-sm font-medium text-gray-700">Rua</Label>
              <Input
                id="rua"
                name="rua"
                type="text"
                placeholder="Nome da rua"
                required
                value={formData.rua}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Número */}
            <div>
              <Label htmlFor="numero" className="text-sm font-medium text-gray-700">Número</Label>
              <Input
                id="numero"
                name="numero"
                type="text"
                placeholder="Número da residência"
                required
                value={formData.numero}
                onChange={handleChange}
                className="rounded-md h-10 bg-white border-blue-500 text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#003967]"
              />
            </div>

            {/* Botão cadastrar */}
            <Button
              type="submit"
              className="w-full rounded-md bg-[#003967] hover:bg-[#002a4d] text-white font-medium h-10 mt-2"
            >
              Cadastrar
            </Button>
          </form>

          {/* Divisor */}
          <div className="border-t border-blue-500 pt-3 text-center">
            <p className="text-sm text-blue-500">
              Já tem conta?{" "}
              <Link
                href="/login"
                className="text-blue-500 font-semibold underline hover:text-[#003967] transition-colors"
              >
                Faça login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}