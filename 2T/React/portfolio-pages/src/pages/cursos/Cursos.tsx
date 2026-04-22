import type { ICursos } from "@/model/interfaces/ICursos"
import { supabase } from "@/model/utils/supabase"
import { useEffect, useState } from "react"
import { CursosCard } from "@/components/main/servicios/CursosCard"
const getCursos = async () => {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')

  console.log(data)
  if (error) {
    console.error(error)
    return null
  }
  
  return data
}

export const Cursos = () => {

  const [cursos, setCursos] = useState<any[]>([])

  const obtenerCursos = async () => {
    const data = await getCursos()
    if (data) {
      setCursos(data)
    }
  }

  useEffect(() => {
    obtenerCursos()
  }, [])

  return (
    cursos.length > 0
      ? (
        <CursosCard cursos={cursos} />
      )
      : <p className="text-slate-400 p-6">No hay cursos disponibles.</p>
  )

}



export default Cursos
