import type { ITrabajos } from "@/model/interfaces/ITrabajos";
import { TrabajoCard } from "./TrabajoCard";

interface Props {
    trabajos: ITrabajos[];
}

export const TrabajosCard = ({ trabajos }: Props) => {
    return (
        <div className="w-full mt-10 grid grid-cols-1 gap-6 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3">
            {trabajos.map((trabajo) => (
                <TrabajoCard key={trabajo.id} trabajo={trabajo} />
            ))}
        </div>
    );
};
