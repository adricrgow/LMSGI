import type { IServicios } from "@/model/interfaces/IServicios";

// Define las propiedades de entrad del componente ServiciosCard
interface Props{
    servicios: IServicios[];
}

export const ServiciosCard = ({servicios}: Props) => {
    // responsabilidad:mostrad en una listado de cards  la informacion de los servicios que se le pasan por props
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                servicios.map((servicio) => (
                    <div key={servicio.id} className="card">
                        <h2>{servicio.titulo}</h2>
                    </div>
                ))
            }
        </div>
    )
}