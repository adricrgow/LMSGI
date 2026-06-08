import { useEffect, useState } from "react"
import { NewTituloForm } from "@/components/admin/titulos/newTituloForm"
import { getTitulos } from "@/model/api/main/apiTitulos"
import type { ITitulos } from "@/model/interfaces/ITitulos"
import { GraduationCap, Library, Award } from "lucide-react"

export const AdminTitulos = () => {
  const [titulos, setTitulos] = useState<ITitulos[]>([])
  const [loading, setLoading] = useState(true)

  const obtenerTitulos = async () => {
    setLoading(true)
    const data = await getTitulos()
    if (data) {
      setTitulos(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    obtenerTitulos()
  }, [])

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-slate-950 min-h-screen text-white">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-indigo-500" />
            Panel de Titulaciones Académicas
          </h1>
          <p className="text-slate-400 mt-1">
            Administra tus certificados, títulos oficiales y estudios en Supabase.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Formulario (ocupa 1/3) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="sticky top-6">
            <NewTituloForm onSuccess={obtenerTitulos} />
          </div>
        </div>

        {/* Columna Derecha: Listado actual (ocupa 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Library className="h-5 w-5 text-indigo-400" />
              Titulaciones Existentes ({titulos.length})
            </h2>

            {loading ? (
              <div className="flex justify-center items-center h-48">
                <span className="text-slate-400">Cargando titulaciones...</span>
              </div>
            ) : titulos.length > 0 ? (
              <div className="space-y-4">
                {titulos.map((titulo) => (
                  <div 
                    key={titulo.id} 
                    className="p-5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700/85 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {titulo.category?.title || "Estudios"}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {titulo.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {titulo.title}
                      </h3>
                      <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                        {titulo.description}
                      </p>
                      
                      {/* Badge / Info del Autor */}
                      {titulo.author && (
                        <div className="flex items-center gap-2 pt-2 text-xs text-slate-450">
                          <img 
                            src={titulo.author.imageUrl} 
                            alt={titulo.author.name}
                            className="w-5 h-5 rounded-full object-cover border border-slate-800"
                            onError={(e) => {
                              e.currentTarget.src = "https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw";
                            }}
                          />
                          <span className="font-semibold text-slate-300">{titulo.author.name}</span>
                          <span className="text-slate-500">•</span>
                          <span>{titulo.author.role}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 items-end justify-between self-stretch">
                      <a 
                        href={titulo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors border border-slate-850 px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-900"
                      >
                        Enlace Institución
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-slate-800 rounded-lg">
                <Award className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">No hay titulaciones registradas en Supabase.</p>
                <p className="text-xs text-slate-500 mt-1">¡Utiliza el formulario para añadir tu primer título!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTitulos
