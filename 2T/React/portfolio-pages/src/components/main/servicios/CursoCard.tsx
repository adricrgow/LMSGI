import type { ICursos } from "@/model/interfaces/ICursos";

interface Props {
    curso: ICursos;
}

export const CursoCard = ({ curso }: Props) => {
    return (
        <article className="card overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-lg p-4 transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <h2 className="text-xl font-bold mb-1 text-white">{curso.titulo}</h2>
            <p className="text-sm text-slate-400 mb-4">{curso.categoria}</p>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-slate-300">
                    <strong className="text-indigo-400">Academia:</strong> {curso.academia}
                </span>
                <span className="text-sm text-slate-300">
                    <strong className="text-indigo-400">Precio:</strong> {curso.precio} €
                </span>
            </div>
        </article>
    );
};
