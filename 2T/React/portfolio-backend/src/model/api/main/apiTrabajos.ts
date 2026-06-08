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

export const insertTrabajo = async (trabajo: Omit<ITrabajos, 'id' | 'created_at'>): Promise<ITrabajos | null> => {
    const { data, error } = await supabase
      .from('trabajos')
      .insert([
        {
          title: trabajo.title,
          href: trabajo.href,
          description: trabajo.description,
          date: trabajo.date,
          datetime: trabajo.datetime,
          category: trabajo.category,
          author: trabajo.author
        }
      ])
      .select()
      .single();

    if (error) {
        console.error("Error insertando trabajo:", error);
        return null;
    }
    return data as ITrabajos;
}
