import type { ITrabajos } from "@/model/interfaces/ITrabajos";
import { supabase } from "@/model/utils/supabase";

export const getTrabajos = async (): Promise<ITrabajos[]> => {
    const { data, error } = await supabase
      .from('trabajos')
      .select('*')
    if (error) {
        console.error(error);
        return [];
    }
    return data as ITrabajos[];
}
