"use client";

import { useEffect, useRef, useState} from "react";
import  Sidebar  from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import Link from "next/link";


export default function Paciente() {

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <main className='sm:ml-56 min-h-screen bg-white'>
            <div className='relative flex items-center bg-gray-50 border-b
                                border-gray-200 p-4 h-16'>
                <Sidebar />
                <h1 className='text-2xl font-semibold text-[#003967] whitespace-nowrap'>Pacientes</h1>

            </div>

            <div className='relative flex flex-col p-4 min-h-fit'>
                
                {/* SEARCH E ÍCONES */}
                <section className="w-full w-px-1/2 flex">
                    <Field orientation={"horizontal"}>
                        <Input type="search" className="rounded-lg h-10 w-64 border-[#1976d2]"/>

                        <div ref={ref}>
                            <Collapsible open={open} onOpenChange={setOpen} className="relative items-center">
                                <CollapsibleTrigger asChild>
                                    <Button className="shrink-0 w-10 h-10 flex gap-2 items-center
                                    justify-center bg-transparent text-[#1976d2] rounded-full">
                                        <ChevronDown className="text-[#1976d2] ml-auto group-data-state:open:rotate-180"/>
                                    </Button>
                                </CollapsibleTrigger>

                                {/* Menu suspenso */}
                                <CollapsibleContent className="absolute top-11 left-0 z-50 flex 
                                flex-col items-start gap-2 pt-0 text-sm bg-white border
                                border-gray-200 rounded-lg shadow-md p-2 min-w-40">
                                    <Button variant="outline" size="sm" className="w-full">Nome</Button>
                                    <Button variant="outline" size="sm" className="w-full">CPF</Button>
                                    <Button variant="outline" size="sm" className="w-full">CNS</Button>
                                </CollapsibleContent>
                            </Collapsible>
                            
                        </div>
                        <Button className="shrink-0 w-10 h-10 flex gap-4 items-center
                        justify-center rounded-full bg-transparent border-[#1976d2] sm:bg-transparent text-[#1976d2]">
                            <Search />                            
                        </Button>
                    </Field>
                </section>

                {/* TERMINAR DE DESENVOLVER
                FALTA CARD QUE MOSTRA OS DADOS DO PACIENTE PROCURADO*/}
                
            </div>

                {/* BOTÃO PARA CADASTRAR PACIENTE */}
            <div className="relative flex items-center justify-center">
                <div className="p-4">
                    <section className="w-full min-h-screen">
                        <Button variant="default" className="bg-[#1976d2] text-white hover:bg-[#1565c0] rounded-lg">
                            <Link href="/paciente/cadastro" className="text-[18px] font-medium">Cadastrar Paciente</Link>
                        </Button>

                    </section>
                </div>
            </div>
        </main>

    )
}