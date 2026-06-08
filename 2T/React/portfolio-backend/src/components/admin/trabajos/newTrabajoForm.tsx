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
import { insertTrabajo } from "@/model/api/main/apiTrabajos"
import { toast } from "sonner"

interface NewTrabajoFormProps extends React.ComponentProps<"div"> {
  onSuccess?: () => void;
}

export function NewTrabajoForm({
  className,
  onSuccess,
  ...props
}: NewTrabajoFormProps) {
  // Datos principales
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [href, setHref] = useState("#")
  const [date, setDate] = useState("")
  
  // Categoría
  const [categoryTitle, setCategoryTitle] = useState("")
  const [categoryHref, setCategoryHref] = useState("#")

  // Autor (con valores por defecto realistas)
  const [authorName, setAuthorName] = useState("Adrián Contreras")
  const [authorRole, setAuthorRole] = useState("Desarrollador Full Stack")
  const [authorImageUrl, setAuthorImageUrl] = useState("https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
  const [authorHref, setAuthorHref] = useState("#")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading("Guardando nuevo trabajo...")

    // Formatear datetime a partir de la fecha actual o la proporcionada
    const now = new Date()
    const datetime = now.toISOString()

    try {
      const result = await insertTrabajo({
        title,
        href,
        description,
        date: date || now.toLocaleDateString("es-ES", { year: "numeric", month: "long" }),
        datetime,
        category: {
          title: categoryTitle || "General",
          href: categoryHref || "#"
        },
        author: {
          name: authorName || "Adrián Contreras",
          role: authorRole || "Desarrollador",
          imageUrl: authorImageUrl || "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          href: authorHref || "#"
        }
      })

      if (result) {
        toast.success("¡Trabajo creado con éxito!", { id: toastId })
        // Limpiar campos no estáticos
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
        toast.error("No se pudo guardar el trabajo en la base de datos.", { id: toastId })
      }
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error inesperado al insertar el trabajo.", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl">
        <CardHeader className="border-b border-slate-800/80 pb-4">
          <h2 className="text-xl font-bold text-white">Insertar Nuevo Trabajo</h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid p-6 md:grid-cols-2 gap-6">
            
            {/* Sección 1: Información General del Trabajo */}
            <div className="flex flex-col gap-4 md:col-span-2">
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Información Principal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-title" className="text-sm font-medium text-slate-350">Título del Trabajo</FieldLabel>
                  <Input
                    id="trabajo-title"
                    type="text"
                    placeholder="Ej: E-Commerce Platform"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-date" className="text-sm font-medium text-slate-350">Fecha de Realización</FieldLabel>
                  <Input
                    id="trabajo-date"
                    type="text"
                    placeholder="Ej: Enero 2026, 01/06/2020"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-href" className="text-sm font-medium text-slate-350">Enlace del Proyecto / URL</FieldLabel>
                  <Input
                    id="trabajo-href"
                    type="text"
                    placeholder="Ej: https://github.com/... o #"
                    value={href}
                    onChange={(e) => setHref(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-category-title" className="text-sm font-medium text-slate-350">Categoría (Tecnología / Sector)</FieldLabel>
                  <Input
                    id="trabajo-category-title"
                    type="text"
                    placeholder="Ej: React / Frontend, Marketing"
                    value={categoryTitle}
                    onChange={(e) => setCategoryTitle(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>

              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="trabajo-description" className="text-sm font-medium text-slate-350">Descripción Detallada</FieldLabel>
                <textarea
                  id="trabajo-description"
                  placeholder="Describe las tecnologías usadas, retos resueltos, etc."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  required
                  className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
                />
              </Field>
            </div>

            {/* Sección 2: Información del Autor (Con defaults cargados) */}
            <div className="flex flex-col gap-4 md:col-span-2 border-t border-slate-800/80 pt-6">
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Detalles del Autor (Creador)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-author-name" className="text-sm font-medium text-slate-350">Nombre del Autor</FieldLabel>
                  <Input
                    id="trabajo-author-name"
                    type="text"
                    placeholder="Nombre"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-author-role" className="text-sm font-medium text-slate-350">Rol / Puesto del Autor</FieldLabel>
                  <Input
                    id="trabajo-author-role"
                    type="text"
                    placeholder="Ej: CTO / Co-Founder"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-author-image" className="text-sm font-medium text-slate-350">URL de la Imagen de Perfil</FieldLabel>
                  <Input
                    id="trabajo-author-image"
                    type="url"
                    placeholder="Enlace a la foto del autor"
                    value={authorImageUrl}
                    onChange={(e) => setAuthorImageUrl(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel htmlFor="trabajo-author-href" className="text-sm font-medium text-slate-350">Enlace de Perfil (Opcional)</FieldLabel>
                  <Input
                    id="trabajo-author-href"
                    type="text"
                    placeholder="Ej: # o perfil de LinkedIn"
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
              value={loading ? "Guardando Trabajo..." : "Insertar Trabajo"}
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-indigo-650/20"
            />
          </CardFooter>
        </form>
      </Card>
      <FieldDescription className="px-6 text-center text-slate-400">
        <p>El trabajo se guardará en Supabase y se mostrará inmediatamente en la sección de Trabajos públicos.</p>
      </FieldDescription>
    </div>
  )
}
