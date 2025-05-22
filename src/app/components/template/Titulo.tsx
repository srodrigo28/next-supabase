import { ElementType } from "react";

interface TituloProps{
    principal: string;
    segundario: string;
    icone: ElementType;
}

export default function Titulo(props : TituloProps){
    return(
        <div className="flex gap-1 mb-5">
            <props.icone size={52} />
            <div className="flex flex-col">
                <h1 className="text-2xl text-zinc-400">{props.principal}</h1>
                <h2 className="text-zinc-500">{props.segundario}</h2>
            </div>
        </div>
    )
}