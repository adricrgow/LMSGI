import data from "@/model/data/servicios.json";
import { ServiciosCard } from "@/components/main/servicios/ServiciosCard";

const Servicios = () => {
    return (
        <section id="servicios" className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl font-bold mb-12 bg-red-500 w-full">
                Servicios ofrecidos
            </h1>
            <ServiciosCard servicios={data} />
        </section>
    );
};

export default Servicios;