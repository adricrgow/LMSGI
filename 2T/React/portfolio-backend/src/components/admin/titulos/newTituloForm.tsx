import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { insertTitulo } from "@/model/api/main/apiTitulos"
import { toast } from "sonner"

interface NewTituloFormProps extends React.ComponentProps<"div"> {
  onSuccess?: () => void;
}

export function NewTituloForm({
  className,
  onSuccess,
  ...props
}: NewTituloFormProps) {
  // Datos principales
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [href, setHref] = useState("#")
  const [date, setDate] = useState("")
  
  // Categoría
  const [categoryTitle, setCategoryTitle] = useState("")
  const [categoryHref, setCategoryHref] = useState("#")

  // Autor / Estudiante (con defaults inteligentes)
  const [authorName, setAuthorName] = useState("Adrián Contreras")
  const [authorRole, setAuthorRole] = useState("Estudiante")
  const [authorImageUrl, setAuthorImageUrl] = useState("https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw")
  const [authorHref, setAuthorHref] = useState("#")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading("Guardando nueva titulación...")

    const now = new Date()
    const datetime = now.toISOString()

    try {
      const result = await insertTitulo({
        title,
        href,
        description,
        date: date || now.toLocaleDateString("es-ES", { year: "numeric", month: "short" }),
        datetime,
        category: {
          title: categoryTitle || "Estudios",
          href: categoryHref || "#"
        },
        author: {
          name: authorName || "Adrián Contreras",
          role: authorRole || "Graduado",
          imageUrl: authorImageUrl || "https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw",
          href: authorHref || "#"
        }
      })

      if (result) {
        toast.success("¡Titulación creada con éxito!", { id: toastId })
        setTitle("")
        setDescription("")
        setHref("#")
        setDate("")
        setCategoryTitle("")
        setCategoryHref("#")
        
        if (onSuccess) {
          onSuccess()
        }
      } else {
        toast.error("No se pudo guardar la titulación en la base de datos.", { id: toastId })
      }
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error inesperado al insertar la titulación.", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl">
        <CardHeader className="border-b border-slate-800/80 pb-4">
          <h2 className="text-xl font-bold text-white">Insertar Nueva Titulación Académica</h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid p-6 md:grid-cols-2 gap-6">
            
            {/* Sección 1: Información de la Formación */}
            <div className="flex flex-col gap-4 md:col-span-2">
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Datos Académicos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-title" className="text-sm font-medium text-slate-350">Título / Nombre del Estudio</FieldLabel>
                  <Input
                    id="titulo-title"
                    type="text"
                    placeholder="Ej: Graduado en ESO, C.F.G.S. Desarrollo Web"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-date" className="text-sm font-medium text-slate-350">Fecha / Periodo</FieldLabel>
                  <Input
                    id="titulo-date"
                    type="text"
                    placeholder="Ej: 2024 - 2026 o Mar 16, 2020"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-href" className="text-sm font-medium text-slate-350">URL / Enlace de la Institución u Oficial</FieldLabel>
                  <Input
                    id="titulo-href"
                    type="text"
                    placeholder="Ej: https://... o #"
                    value={href}
                    onChange={(e) => setHref(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-category-title" className="text-sm font-medium text-slate-350">Categoría (Nivel Educativo / Tipo)</FieldLabel>
                  <Input
                    id="titulo-category-title"
                    type="text"
                    placeholder="Ej: Educación Secundaria, Formación Profesional"
                    value={categoryTitle}
                    onChange={(e) => setCategoryTitle(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>

              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="titulo-description" className="text-sm font-medium text-slate-350">Breve Descripción / Asignaturas Clave</FieldLabel>
                <textarea
                  id="titulo-description"
                  placeholder="Describe los contenidos principales, especialidades o tu experiencia..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  required
                  className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
                />
              </Field>
            </div>

            {/* Sección 2: Perfil del Alumno */}
            <div className="flex flex-col gap-4 md:col-span-2 border-t border-slate-800/80 pt-6">
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Detalles del Alumno / Estado</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-author-name" className="text-sm font-medium text-slate-350">Nombre del Alumno</FieldLabel>
                  <Input
                    id="titulo-author-name"
                    type="text"
                    placeholder="Nombre"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-author-role" className="text-sm font-medium text-slate-350">Rol / Estado Académico</FieldLabel>
                  <Input
                    id="titulo-author-role"
                    type="text"
                    placeholder="Ej: Estudiante, Graduado, Técnico Superior"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-author-image" className="text-sm font-medium text-slate-350">URL de la Imagen de Perfil</FieldLabel>
                  <Input
                    id="titulo-author-image"
                    type="url"
                    placeholder="Enlace a la foto del alumno"
                    value={authorImageUrl}
                    onChange={(e) => setAuthorImageUrl(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="titulo-author-href" className="text-sm font-medium text-slate-350">Enlace de Perfil (Opcional)</FieldLabel>
                  <Input
                    id="titulo-author-href"
                    type="text"
                    placeholder="Ej: # o LinkedIn"
                    value={authorHref}
                    onChange={(e) => setAuthorHref(e.target.value)}
                    disabled={loading}
                  />
                </Field>
              </div>
            </div>

          </CardContent>

          <CardFooter className="p-6 pt-2 border-t border-slate-800/80">
            <input
              type="submit"
              value={loading ? "Guardando..." : "Insertar Titulación"}
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-indigo-650/20"
            />
          </CardFooter>
        </form>
      </Card>
      <FieldDescription className="px-6 text-center text-slate-400">
        <p>El título académico se guardará en Supabase y se mostrará de inmediato en la sección de Formación.</p>
      </FieldDescription>
    </div>
  )
}
