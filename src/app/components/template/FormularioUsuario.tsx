import { Usuario } from "@/core/model/Usuario"
import InputText from "../shared/InputText";

interface FormularioUsuarioProps{
    usuario: Partial<Usuario>;
    onchange: ( usuario: Partial<Usuario> ) => void;
    onSave: () => void
    onCancel: () => void
}
export default function FormularioUsuario(props: FormularioUsuarioProps){
    return(
        <div className="flex flex-col gap-3 mb-3">
            <InputText 
                label="Nome"  
                type="text" 
                value={props.usuario.nome} 
                onChange={ e => props.onchange?.( {...props.usuario, nome: e.target.value  } )}
            />           
            <InputText 
                label="E-mail" 
                type="email" 
                value={props.usuario.email} 
                onChange={ e => props.onchange?.( {...props.usuario, email: e.target.value  } )}
            />           
            <InputText 
                label="Senha" 
                type="password" 
                value={props.usuario.senha} 
                onChange={ e => props.onchange?.( {...props.usuario, senha : e.target.value  } )}
            />  

            <div className="flex gap-2"> 
            <button className="bg-blue-600 px-3 py-2 rounded-md" onClick={props.onSave}>Salvar</button>         
            <button className="bg-red-500 px-3 py-2 rounded-md" onClick={props.onCancel}>Cancelar</button>   
            </div>
        </div>
    )
}