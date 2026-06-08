import type { IContacto } from "@/model/interfaces/IContacto";
import { supabase } from "@/model/utils/supabase";

export const getContacto = async (): Promise<IContacto | null> => {
    const { data, error } = await supabase
      .from('contactos')
      .select('*')
      .limit(1)
      .single()
    if (error) {
        console.error(error);
        return null;
    }
    return data as IContacto;
}
