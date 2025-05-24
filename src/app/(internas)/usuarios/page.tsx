'use client'

import FormularioUsuario from "@/app/components/template/FormularioUsuario";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function UsuarioPage(){
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)

    useEffect( () => {
        Backend.usuarios.obter().then(setUsuarios)
    }, [])

    function salvar(){
        // salvar no banco de dados
        Backend.usuarios.salvar
    }
    return(
        <Pagina>
            <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de Usuários" />
            {usuario ? (
                <FormularioUsuario 
                    usuario={usuario} 
                    onchange={setUsuario} 
                    onSave={salvar}
                    onCancel={() => setUsuario(null) }
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button className="bg-blue-600 px-5 py-2 rounded-md flex items-center gap-1 mb-3" 
                            onClick={ () => setUsuario({}) }> 
                            <IconPlus />
                            <span>Novo</span> 
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios}  onClick={setUsuario} />
                </>
            )}
        </Pagina>
    )
}