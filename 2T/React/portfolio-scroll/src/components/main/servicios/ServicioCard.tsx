import type { IServicios } from "@/model/interfaces/IServicios";

interface Props {
    servicio: IServicios;
}

export const ServicioCard = ({ servicio }: Props) => {
    return (
        <article className="card overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-lg">
            {servicio.imagen && (
                <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="h-44 w-full object-cover"
                />
            )}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-1 text-white">{servicio.titulo}</h2>
                <p className="text-sm text-slate-400 mb-2">{servicio.categoria}</p>
                <p className="text-sm text-slate-200 mb-3">{servicio.descripcion}</p>
                {servicio.tecnologias?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {servicio.tecnologias.map((tech) => (
                            <span key={tech} className="rounded-full bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
};