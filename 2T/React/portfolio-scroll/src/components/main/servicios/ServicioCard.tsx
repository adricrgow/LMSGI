import type { IServicios } from "@/model/interfaces/IServicios";
import Servicios from "@/sections/Servicios";

interface Props{
    servicio: IServicios[];
}

export const ServiciosCard = ({servicios}: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                servicios.map((servicios) => (
                    <ServiciosCard
                    Key={Servicio.id}
                    servicio={servicios}
                    />
                ))
            }
        </div>
    )
}