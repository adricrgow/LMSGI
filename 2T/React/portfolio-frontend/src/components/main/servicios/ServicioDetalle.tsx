import { useParams } from "react-router-dom";
import dataServicios from "@/model/data/servicios.json";
import type { IServicios } from "@/model/interfaces/IServicios";

export const ServicioDetalle = () => {
    const { id } = useParams(); // id obtenemos de la url y de tipo string
    const servicio: IServicios | undefined = dataServicios.find((serv) => serv.id === Number(id));

    return (
        <div className="p-6 max-w-4xl mx-auto text-slate-200">
            <h1 className="text-3xl font-bold mb-6 text-white">Detalle del servicio {id}</h1>
            {
                servicio ? (
                    <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-lg">
                        {servicio.imagen && (
                            <img
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                className="h-64 w-full object-cover rounded-lg mb-6"
                            />
                        )}
                        <p className="mb-4 text-lg"><strong className="text-white">Nombre:</strong> {servicio.titulo}</p>
                        <p className="mb-4 text-lg leading-relaxed"><strong className="text-white">Descripción:</strong> {servicio.descripcion}</p>
                        <p className="mb-4 text-lg"><strong className="text-white">Categoría:</strong> {servicio.categoria}</p>

                        {servicio.tecnologias?.length > 0 && (
                            <div className="mt-6 flex items-center flex-wrap gap-2">
                                <strong className="text-white">Tecnologías:</strong>
                                {servicio.tecnologias.map((tech) => (
                                    <span key={tech} className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-xl text-slate-400">Servicio no encontrado</p>
                )
            }
        </div>
    );
};
