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
    
    // Mapeamos de forma segura 'categoría' de Supabase al campo 'categoria' de la interfaz ICursos
    return (data || []).map((curso: any) => ({
        ...curso,
        categoria: curso.categoria || curso.categoría
    })) as ICursos[];
}

export const insertCurso = async (curso: Omit<ICursos, 'curso_id'>): Promise<ICursos | null> => {
    // Mapeamos de vuelta de 'categoria' a 'categoría' con acento para Supabase
    const { data, error } = await supabase
      .from('cursos')
      .insert([
        {
          titulo: curso.titulo,
          academia: curso.academia,
          precio: curso.precio,
          imagenes: curso.imagenes,
          categoría: curso.categoria
        }
      ])
      .select()
      .single();

    if (error) {
        console.error("Error insertando curso:", error);
        return null;
    }
    
    // Devolvemos el registro insertado mapeando 'categoría' a 'categoria'
    return {
        ...data,
        categoria: data.categoria || data.categoría
    } as ICursos;
}