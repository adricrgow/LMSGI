import type { ICursos } from "@/model/interfaces/ICursos";

interface Props {
    curso: ICursos;
}

export const CursoCard = ({ curso }: Props) => {
    return (
        <article className="card overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-600 cursor-pointer h-full flex flex-col">
            {curso.imagenes ? (
                <div className="h-44 w-full overflow-hidden border-b border-slate-700/50 bg-slate-950 relative">
                    <img 
                        src={curso.imagenes} 
                        alt={curso.titulo} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60";
                        }}
                    />
                </div>
            ) : (
                <div className="h-44 w-full bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700/50 flex items-center justify-center">
                    <span className="text-slate-500 text-sm">Sin imagen</span>
                </div>
            )}
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-1 block">
                        {curso.categoria}
                    </span>
                    <h2 className="text-lg font-bold text-white line-clamp-2 mb-3 min-h-[3.5rem] flex items-start">
                        {curso.titulo}
                    </h2>
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/80">
                    <span className="text-sm text-slate-300 flex justify-between">
                        <span className="text-slate-400">Academia:</span>
                        <span className="font-medium text-white">{curso.academia}</span>
                    </span>
                    <span className="text-sm text-slate-300 flex justify-between items-center">
                        <span className="text-slate-400">Precio:</span>
                        <span className="font-bold text-emerald-400 text-base">{curso.precio} €</span>
                    </span>
                </div>
            </div>
        </article>
    );
};
