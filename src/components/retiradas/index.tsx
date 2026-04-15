import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Retiradas() {
    return (
        <Card className="w-full rounded-lg md:w-1/2">  
            <CardHeader>
                <div className="flex">
                    <CardTitle>
                        <h1 className='text-lg sm:text-xl font-semibold text-[#003967]'
                        >
                            Últimas retiradas
                        </h1>
                    </CardTitle>
                </div>
            </CardHeader>
            
            <CardContent>
                <article className="felx items-center gap-2 border-b py-2 w-full">
                    <div>
                        <span className="text-lg">Fulano da Silva</span>
                    </div>
                </article>

                <article className="felx items-center gap-2 border-b py-2 w-full">
                    <div>
                        <span className="text-lg">Beltrano Sousa</span>
                    </div>
                </article>

                <article className="felx items-center gap-2 border-b py-2 w-full">
                    <div>
                        <span className="text-lg">Cicrano Silva</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}