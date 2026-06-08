import { useEffect, useState } from "react";
import { getTrabajos } from "@/model/api/main/apiTrabajos";
import type { ITrabajos } from "@/model/interfaces/ITrabajos";
import { TrabajosCard } from "@/components/main/trabajos/TrabajosCard";

const Trabajos = () => {
    const [trabajos, setTrabajos] = useState<ITrabajos[]>([]);
    const [loading, setLoading] = useState(true);

    const obtenerTrabajos = async () => {
        setLoading(true);
        const data = await getTrabajos();
        if (data) {
            setTrabajos(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        obtenerTrabajos();
    }, []);

    return (
        <section id="trabajos" className="min-h-screen w-full bg-gray-900 text-white py-24">
            <div className="w-full bg-slate-900 px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl shadow-2xl">
                <div className="w-full">
                    <div className="w-full mb-8">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Mis Trabajos
                        </h2>
                        <p className="mt-4 text-lg text-slate-300">
                            Experiencia profesional y proyectos destacados
                        </p>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-64 mt-10 border-t border-gray-700 pt-10">
                            <p className="text-xl text-slate-400">Cargando trabajos...</p>
                        </div>
                    ) : trabajos.length > 0 ? (
                        <TrabajosCard trabajos={trabajos} />
                    ) : (
                        <p className="text-slate-400 p-6 mt-10 text-center border-t border-gray-700 pt-10">No hay trabajos disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Trabajos;