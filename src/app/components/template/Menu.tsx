import { IconHome, IconUser, IconUsers } from "@tabler/icons-react"
import Link from "next/link"
import { ElementType } from "react"

interface MenuItemProps {
    icon: ElementType
    texto: string;
    url: string
}

function MenuItem(props: MenuItemProps){
    return(
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
            <props.icon className="text-white " size={25} stroke={1} />
            <span>{props.texto}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <aside className="w-44 bg-zinc-900 h-screen">
            <nav className="flex flex-col pt-3">
                <MenuItem icon={IconHome} url="/" texto="Home" />
                <MenuItem icon={IconUser} url="/usuarios" texto="Home" />
            </nav>
        </aside>
    )
}