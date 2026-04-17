
import  Sidebar  from '@/components/sidebar'
import { ChevronRight, Users, ClipboardList, User, PillBottle} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import ChartOverview from '@/components/chart';
import Retiradas from '@/components/retiradas';



const actionCards = [


    {
        href: "/dispensacao",       
        icon: PillBottle,
        label: "Dispensar Medicamentos",
    },

    {
        href: "/paciente",       
        icon: User,
        label: "Pacientes Cadastrados",
    },

    {
        href: "/paciente/cadastro",           
        icon: Users,
        label: "Cadastrar Novo Paciente",
    },

    {
        href: "/estoque/relatorio",           
        icon: ClipboardList,
        label: "Relatório de Estoque",
    },
];

export default function AppHome() {
    return (
        <main className='sm:ml-56 min-h-screen bg-white'>
            <div className='relative flex items-center bg-gray-50 border-b
                border-gray-200 p-4 h-16'>
                <Sidebar />
                <h1 className='text-2xl font-semibold text-[#003967] whitespace-nowrap'>Olá, fulano</h1>
            </div>
            <section className='p-4'>
                <Card className='rounded-xl'>
                    <CardHeader>
                        {/* Cards de ações rápidas */}
                        <div className='flex items-center justify-center text-lg sm:text-xl rounded-lg border-gray-200'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                                {actionCards.map(({ href, icon: Icon, label}) => (
                                    <Link
                                    href={href}
                                    key={href}
                                    className='relative flex items-center gap-4 bg-[#2196F3] hover:bg-[#1976d2] rounded-xl
                                    px-5 py-5 min-h-22 text-white transition-colors group'
                                    >
                                        {/* ìcones */}
                                        <div className='shrink-0 w-15 h-15 flex items-center justify-center bg-white/15
                                        rounded-lg'>
                                            <Icon className='w-10 h-10 text-white'/>
                                        </div>

                                        {/* textos */}
                                        <span className='text-[25px] font-medium leading-snug flex-1'>
                                            {label}
                                        </span>

                                        {/* setas */}
                                        <span className='absolute bottom-1 right-0 text-white/60 text-lg group-hover:text-white/90
                                        transition-colors'>
                                            <ChevronRight />
                                        </span>                      
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </section>

               {/* GRÁFICOS */} {/* FALTA CONFIGURAR COM O BANCO DE DADOS */} 
            <section className='flex flex-col md:flex-row p-4 gap-4'>
                <ChartOverview/>
                <Retiradas/>
            </section>
        </main>
    )
}