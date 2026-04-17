import type { ICursos } from "@/model/interfaces/ICursos"
import { supabase } from "@/model/utils/supabase"
import { useEffect, useState } from "react"

const getCursos = async () => {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      
      console.log(data)
      if (error) {
        console.error(error)
        return
      }

}

export const Cursos = () => {

const [cursos, setCursos] = useState([])
// cursos = []
// cursos.push(cursos)

const obtenerCursos = async () => {
  const data = await getCursos()
  setCursos(data)

  useEffect(() => {
    obtenerCursos()
  }, [])

  return ((
    cursos.length > 0
    ? (
      <CursosCard cursos={cursos} />
    )
    : <p>No hay cursos disponibles.</p>
    
  ))
}

}



export default Cursos