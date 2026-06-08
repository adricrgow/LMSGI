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

export const insertTitulo = async (titulo: Omit<ITitulos, 'id' | 'created_at'>): Promise<ITitulos | null> => {
    const { data, error } = await supabase
      .from('titulos')
      .insert([
        {
          title: titulo.title,
          href: titulo.href,
          description: titulo.description,
          date: titulo.date,
          datetime: titulo.datetime,
          category: titulo.category,
          author: titulo.author
        }
      ])
      .select()
      .single();

    if (error) {
        console.error("Error insertando titulo:", error);
        return null;
    }
    return data as ITitulos;
}
