import { Usuario } from "@/core/model/Usuario"
import InputText from "../shared/inputText";

interface FormularioUsuarioProps{
    usuario: Usuario;
}
export default function FormularioUsuario(props: FormularioUsuarioProps){
    return(
        <div>
            <InputText label="nome" value={props.usuario.nome} />           
        </div>
    )
}