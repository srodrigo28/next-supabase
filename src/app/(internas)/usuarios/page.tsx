import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { IconUser } from "@tabler/icons-react";

export default function Usuario(){
    return(
        <Pagina>
            <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de Usuários" />
            <ListaUsuario />
        </Pagina>
    )
}