

import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive            ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700 hover:text-blue-500";
    return (
        <nav className="justify-center max-w-4xl mx-auto flex gap-4 py-4">
            <NavLink to="/" className={linkClass}>
                Inicio
            </NavLink>
            <NavLink to="/trabajos" className={linkClass}>
                Trabajos
            </NavLink>
            <NavLink to="/contacto" className={linkClass}>
                Contacto
            </NavLink>
        </nav>

    )
}