import type { ICursos } from "@/model/interfaces/ICursos";
import { CursoCard } from "./CursoCard";
import { NavLink } from "react-router-dom";

interface Props {
    cursos: ICursos[];
}

export const CursosCard = ({ cursos }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {cursos.map((curso) => (
                <NavLink key={curso.curso_id} to={`/cursos/${curso.curso_id}`} className="block">
                    <CursoCard curso={curso} />
                </NavLink>
            ))}
        </div>
    );
};
