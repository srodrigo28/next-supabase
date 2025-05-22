import { Usuario } from "@/core/model/Usuario"
import usuariosData from "../../data/constants/usuarios"
import Image from "next/image"
interface LinhaUsuarioProps{
    usuario: Usuario
}

function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex p-3 bg-zinc-900 px-5 rounded-lg hover:border cursor-pointer">
            <Image
                src={props.usuario.foto} 
                width={80}
                height={80}
                className="rounded-full mr-2"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-3xl text-zinc-400">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-500">{props.usuario.email}</span>
            </div>
        </div>
    )
}

export default function ListaUsuario(){
    return(
        <div className="flex flex-col gap-5 rounded-md">
            {usuariosData.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} />
            })}
        </div>
    )
}