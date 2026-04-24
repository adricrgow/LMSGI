import { useEffect, useState } from "react";
import { getTitulos } from "@/model/api/main/apiTitulos";
import type { ITitulos } from "@/model/interfaces/ITitulos";
import { TitulosCard } from "@/components/main/titulos/TitulosCard";

const Titulos = () => {
    const [titulos, setTitulos] = useState<ITitulos[]>([]);
    const [loading, setLoading] = useState(true);

    const obtenerTitulos = async () => {
        setLoading(true);
        const data = await getTitulos();
        if (data) {
            setTitulos(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        obtenerTitulos();
    }, []);

    return (
        <section id="formaciones" className="w-full bg-gray-900 text-white py-24 min-h-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="w-full">
                    <div className="w-full border-4 border-purple-500 rounded-lg p-6 bg-slate-900 shadow-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Titulaciones Académicas
                        </h2>
                        <p className="mt-4 text-lg text-slate-300">
                            Titulaciones Académicas y Certificaciones Profesionales 
                        </p>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-64 mt-10">
                            <p className="text-xl text-slate-400">Cargando titulaciones...</p>
                        </div>
                    ) : titulos.length > 0 ? (
                        <TitulosCard titulos={titulos} />
                    ) : (
                        <p className="text-slate-400 p-6 mt-10 text-center">No hay titulaciones disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Titulos;