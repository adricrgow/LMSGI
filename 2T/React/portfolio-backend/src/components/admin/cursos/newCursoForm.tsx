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
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { insertCurso } from "@/model/api/main/apiCursos"
import { toast } from "sonner"

interface NewCursoFormProps extends React.ComponentProps<"div"> {
  onSuccess?: () => void;
}

export function NewCursoForm({
  className,
  onSuccess,
  ...props
}: NewCursoFormProps) {
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [academia, setAcademia] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagenes, setImagenes] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const parsedPrecio = parseFloat(precio)
    if (isNaN(parsedPrecio)) {
      toast.error("El precio debe ser un número válido.")
      return
    }

    setLoading(true)
    const toastId = toast.loading("Guardando nuevo curso...")

    try {
      const result = await insertCurso({
        titulo,
        categoria,
        academia,
        precio: parsedPrecio,
        imagenes: imagenes || undefined
      })

      if (result) {
        toast.success("¡Curso creado con éxito!", { id: toastId })
        // Limpiar formulario
        setTitulo("")
        setCategoria("")
        setAcademia("")
        setPrecio("")
        setImagenes("")
        
        // Ejecutar callback de éxito si existe
        if (onSuccess) {
          onSuccess()
        }
      } else {
        toast.error("No se pudo guardar el curso en la base de datos.", { id: toastId })
      }
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error inesperado al insertar el curso.", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl">
        <CardHeader className="border-b border-slate-800/80 pb-4">
          <h2 className="text-xl font-bold text-white">Insertar Nuevo Curso</h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid p-6 md:grid-cols-2 gap-4">
            <FieldGroup>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="titulo" className="text-sm font-medium text-slate-350">Titulo</FieldLabel>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Titulo del curso"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  disabled={loading}
                  required
                />
              </Field>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="categoria" className="text-sm font-medium text-slate-350">Categoria</FieldLabel>
                <Input 
                  id="categoria" 
                  type="text" 
                  placeholder="Categoria del curso" 
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  disabled={loading}
                  required 
                />
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="academia" className="text-sm font-medium text-slate-350">Academia</FieldLabel>
                <Input
                  id="academia"
                  type="text"
                  placeholder="Academia del curso"
                  value={academia}
                  onChange={(e) => setAcademia(e.target.value)}
                  disabled={loading}
                  required
                />
              </Field>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="precio" className="text-sm font-medium text-slate-350">Precio (€)</FieldLabel>
                <Input 
                  id="precio" 
                  type="number" 
                  step="0.01" 
                  placeholder="Precio del curso" 
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  disabled={loading}
                  required 
                />
              </Field>
            </FieldGroup>
            <div className="md:col-span-2 mt-2">
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="imagenes" className="text-sm font-medium text-slate-350">URL de la Imagen (Opcional)</FieldLabel>
                <Input 
                  id="imagenes" 
                  type="url" 
                  placeholder="https://ejemplo.com/imagen.png" 
                  value={imagenes}
                  onChange={(e) => setImagenes(e.target.value)}
                  disabled={loading}
                />
              </Field>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-2 border-t border-slate-800/80">
            <input
              type="submit"
              value={loading ? "Guardando..." : "Insertar Curso"}
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-indigo-650/20"
            />
          </CardFooter>
        </form>
      </Card>
      <FieldDescription className="px-6 text-center text-slate-400">
        <p>Complete el formulario para insertar un nuevo curso en la base de datos.</p>
      </FieldDescription>
    </div>
  )
}

