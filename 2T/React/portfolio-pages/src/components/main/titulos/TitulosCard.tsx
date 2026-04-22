import type { ITitulos } from "@/model/interfaces/ITitulos";
import { TituloCard } from "./TituloCard";

interface Props {
    titulos: ITitulos[];
}

export const TitulosCard = ({ titulos }: Props) => {
    return (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {titulos.map((titulo) => (
                <TituloCard key={titulo.id} titulo={titulo} />
            ))}
        </div>
    );
};
