"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
    icon: React.ReactNode;
    title: string;
    path: string;
}

export const SidebarItem = ({ icon, title, path }: Props) => {
    const pathName = usePathname()
    return (
        <li>
            <Link href={path}
                className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group ${pathName === path ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""}`}>
                {icon}
                <span className="group-hover:text-gray-700">{title}</span>
            </Link>
        </li>
    )
}
