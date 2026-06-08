import type { IServicios } from "@/model/interfaces/IServicios";
import { ServicioCard } from "./ServicioCard";
import { NavLink } from "react-router-dom";

interface Props {
    servicios: IServicios[];
}

export const ServiciosCard = ({ servicios }: Props) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {servicios.map((servicio) => (
                <NavLink key={servicio.id} to={`/servicios/${servicio.id}`}>
                    <ServicioCard servicio={servicio} />
                </NavLink>
            ))}
        </div>
    );
};