import { useEffect, useState } from "react"
import { NewTrabajoForm } from "@/components/admin/trabajos/newTrabajoForm"
import { getTrabajos } from "@/model/api/main/apiTrabajos"
import type { ITrabajos } from "@/model/interfaces/ITrabajos"
import { Briefcase, ListCollapse, Code } from "lucide-react"

export const AdminTrabajos = () => {
  const [trabajos, setTrabajos] = useState<ITrabajos[]>([])
  const [loading, setLoading] = useState(true)

  const obtenerTrabajos = async () => {
    setLoading(true)
    const data = await getTrabajos()
    if (data) {
      setTrabajos(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    obtenerTrabajos()
  }, [])

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-slate-950 min-h-screen text-white">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-indigo-500" />
            Panel de Trabajos y Proyectos
          </h1>
          <p className="text-slate-400 mt-1">
            Administra tus proyectos profesionales y de portafolio en Supabase.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Formulario (ocupa 1/3) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="sticky top-6">
            <NewTrabajoForm onSuccess={obtenerTrabajos} />
          </div>
        </div>

        {/* Columna Derecha: Listado actual (ocupa 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ListCollapse className="h-5 w-5 text-indigo-400" />
              Proyectos Existentes ({trabajos.length})
            </h2>

            {loading ? (
              <div className="flex justify-center items-center h-48">
                <span className="text-slate-400">Cargando proyectos...</span>
              </div>
            ) : trabajos.length > 0 ? (
              <div className="space-y-4">
                {trabajos.map((trabajo) => (
                  <div 
                    key={trabajo.id} 
                    className="p-5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700/85 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {trabajo.category?.title || "Proyecto"}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {trabajo.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {trabajo.title}
                      </h3>
                      <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                        {trabajo.description}
                      </p>
                      
                      {/* Badge / Info del Autor */}
                      {trabajo.author && (
                        <div className="flex items-center gap-2 pt-2 text-xs text-slate-450">
                          <img 
                            src={trabajo.author.imageUrl} 
                            alt={trabajo.author.name}
                            className="w-5 h-5 rounded-full object-cover border border-slate-800"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
                            }}
                          />
                          <span className="font-semibold text-slate-300">{trabajo.author.name}</span>
                          <span className="text-slate-500">•</span>
                          <span>{trabajo.author.role}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 items-end justify-between self-stretch">
                      <a 
                        href={trabajo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors border border-slate-850 px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-900"
                      >
                        Enlace
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-slate-800 rounded-lg">
                <Code className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">No hay proyectos registrados en Supabase.</p>
                <p className="text-xs text-slate-500 mt-1">¡Utiliza el formulario para añadir tu primer trabajo!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTrabajos
