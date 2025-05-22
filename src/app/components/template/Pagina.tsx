import { ReactNode } from "react"
import Menu from "./Menu";

export interface PaginaProps{
    children: ReactNode;
}

export default function Pagina( props: PaginaProps ){
    return(
        <div className="flex">
            <Menu />
            <main className="p-7 flex-1">
                {props.children}
            </main>
        </div>
    )
}