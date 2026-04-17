

import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";



export const NavBar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700 hover:text-blue-500";

    return (
        <div className="flex items-center space-x-2 text-sm">
            <NavLink to="/" className={linkClass}>
                <Button variant="ghost">Inicio</Button>
            </NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-separator"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l0 .01" /><path d="M7 12l10 0" /><path d="M21 12l0 .01" /></svg>

            <NavLink to="/trabajos" className={linkClass}>
                <Button variant="ghost">Trabajos</Button>
            </NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-separator"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l0 .01" /><path d="M7 12l10 0" /><path d="M21 12l0 .01" /></svg>
            <NavLink to="/contacto" className={linkClass}>
                <Button variant="ghost">Contacto</Button>
            </NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-separator"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l0 .01" /><path d="M7 12l10 0" /><path d="M21 12l0 .01" /></svg>
            <NavLink to="/servicios" className={linkClass}>
                <Button variant="ghost">Servicios</Button>
            </NavLink>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-separator"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l0 .01" /><path d="M7 12l10 0" /><path d="M21 12l0 .01" /></svg>
            <NavLink to="/Cursos" className={linkClass}>
                <Button variant="ghost">Cursos</Button>
            </NavLink>
        </div>
    )
}