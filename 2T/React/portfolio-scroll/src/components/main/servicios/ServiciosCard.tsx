import type { IServicios } from "@/model/interfaces/IServicios";
import { ServicioCard } from "./ServicioCard";

interface Props {
    servicios: IServicios[];
}

export const ServiciosCard = ({ servicios }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {servicios.map((servicio) => (
                <ServicioCard key={servicio.id} servicio={servicio} />
            ))}
        </div>
    );
};