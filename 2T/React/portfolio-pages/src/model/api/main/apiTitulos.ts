import type { ITitulos } from "@/model/interfaces/ITitulos";
import { supabase } from "@/model/utils/supabase";

export const getTitulos = async (): Promise<ITitulos[]> => {
    const { data, error } = await supabase
      .from('titulos')
      .select('*')
    if (error) {
        console.error(error);
        return [];
    }
    return data as ITitulos[];
}
