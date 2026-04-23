import { useParams } from "react-router-dom";
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
                    <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-indigo-400 mb-4">{curso.titulo}</h2>
                        <div className="space-y-4">
                            <p className="text-lg">
                                <strong className="text-white">Categoría:</strong> <span className="text-slate-300">{curso.categoria}</span>
                            </p>
                            <p className="text-lg">
                                <strong className="text-white">Academia:</strong> <span className="text-slate-300">{curso.academia}</span>
                            </p>
                            <p className="text-lg">
                                <strong className="text-white">Precio:</strong> <span className="text-emerald-400 font-semibold">{curso.precio} €</span>
                            </p>
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
