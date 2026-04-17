import type { ICursos } from "@/model/interfaces/ICursos";
import { supabase } from "@/model/utils/supabase";

export const getCursos = async (): Promise<ICursos[]> => {
    const { data, error } = await supabase
      .from('cursos')
      .select()
    if (error) {
        console.error(error);
        return [];
    }
    return data as ICursos[];
}