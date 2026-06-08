import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/model/utils/supabase";
import type { ICursos } from "@/model/interfaces/ICursos";

export const CursoDetalle = () => {
    const { id } = useParams(); // id de la url, tipo string
    const [curso, setCurso] = useState<ICursos | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurso = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('cursos')
                .select('*')
                .eq('curso_id', id)
                .single();
                
            if (error) {
                console.error("Error obteniendo curso:", error);
            } else {
                setCurso(data as ICursos);
            }
            setLoading(false);
        };
        
        if (id) {
            getCurso();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="p-6 max-w-4xl mx-auto flex justify-center items-center h-64">
                <p className="text-xl text-slate-400">Cargando curso...</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto text-slate-200">
            <h1 className="text-3xl font-bold mb-6 text-white">Detalle del curso</h1>
            {
                curso ? (
                    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col">
                        {curso.imagenes ? (
                            <div className="w-full h-64 md:h-[400px] relative overflow-hidden bg-slate-950 border-b border-slate-800">
                                <img 
                                    src={curso.imagenes} 
                                    alt={curso.titulo} 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60";
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-64 md:h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-800">
                                <span className="text-slate-500 text-lg">Sin imagen</span>
                            </div>
                        )}
                        <div className="p-8 flex flex-col justify-between flex-grow">
                            <div>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-550/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                                    {curso.categoria}
                                </span>
                                <h2 className="text-3xl font-bold text-white mt-4 mb-6">{curso.titulo}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6">
                                    <div className="flex justify-between items-center text-base bg-slate-950/40 p-4 rounded-lg border border-slate-850">
                                        <span className="text-slate-400 font-medium">Academia</span>
                                        <span className="text-slate-200 font-semibold">{curso.academia}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-base bg-slate-950/40 p-4 rounded-lg border border-slate-850">
                                        <span className="text-slate-400 font-medium">Precio</span>
                                        <span className="text-emerald-400 font-bold text-xl">{curso.precio} €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end border-t border-slate-800/80 pt-6">
                                <Link to="/cursos" className="order-2 sm:order-1 text-center text-sm text-slate-400 hover:text-white transition-colors py-3 px-6 rounded-lg border border-slate-800 hover:bg-slate-800/40">
                                    Volver a cursos
                                </Link>
                                <button className="order-1 sm:order-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg shadow-indigo-600/20">
                                    Inscribirse en el curso
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-900 border border-red-900 p-6 rounded-xl text-center">
                        <p className="text-xl text-red-400">Curso no encontrado</p>
                    </div>
                )
            }
        </div>
    );
};
