import { useEffect, useState } from "react"
import { NewCursoForm } from "@/components/admin/cursos/newCursoForm"
import { getCursos } from "@/model/api/main/apiCursos"
import type { ICursos } from "@/model/interfaces/ICursos"
import { BookOpen, GraduationCap, Library } from "lucide-react"

export const AdminCursos = () => {
  const [cursos, setCursos] = useState<ICursos[]>([])
  const [loading, setLoading] = useState(true)

  const obtenerCursos = async () => {
    setLoading(true)
    const data = await getCursos()
    if (data) {
      setCursos(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    obtenerCursos()
  }, [])

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-slate-950 min-h-screen text-white">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-indigo-500" />
            Panel de Cursos
          </h1>
          <p className="text-slate-400 mt-1">
            Administra tus cursos y certificaciones en Supabase.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Formulario (ocupa 1/3 en pantallas grandes) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="sticky top-6">
            <NewCursoForm onSuccess={obtenerCursos} />
          </div>
        </div>

        {/* Columna Derecha: Listado actual (ocupa 2/3 en pantallas grandes) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Library className="h-5 w-5 text-indigo-400" />
              Cursos Existentes ({cursos.length})
            </h2>

            {loading ? (
              <div className="flex justify-center items-center h-48">
                <span className="text-slate-400">Cargando cursos...</span>
              </div>
            ) : cursos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cursos.map((curso) => (
                  <div 
                    key={curso.curso_id} 
                    className="flex flex-col justify-between p-4 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700/85 transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {curso.categoria}
                        </span>
                        <span className="text-emerald-400 font-bold text-sm">
                          {curso.precio} €
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 line-clamp-2">
                        {curso.titulo}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Academia: <span className="text-slate-350 font-medium">{curso.academia}</span>
                      </p>
                    </div>

                    {curso.imagenes && (
                      <div className="mt-3 h-20 w-full rounded overflow-hidden bg-slate-900/40 border border-slate-850">
                        <img 
                          src={curso.imagenes} 
                          alt={curso.titulo} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-slate-800 rounded-lg">
                <BookOpen className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">No hay cursos registrados en Supabase.</p>
                <p className="text-xs text-slate-500 mt-1">¡Utiliza el formulario para añadir el primero!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCursos