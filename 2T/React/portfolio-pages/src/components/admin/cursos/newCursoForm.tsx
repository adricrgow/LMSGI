import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function NewCursoForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <h1>Insertar Nuevo Curso</h1>
          
        </CardHeader>
        <form>
          <CardContent className="grid p-3 md:grid-cols-2">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Titulo</FieldLabel>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Titulo del curso"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="categoria">Categoria</FieldLabel>
                </div>
                <Input id="categoria" type="text" placeholder="Categoria del curso" required />
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="academia">Academia</FieldLabel>
                <Input
                  id="academia"
                  type="text"
                  placeholder="Academia del curso"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="precio">Precio</FieldLabel>
                </div>
                <Input id="precio" type="text" placeholder="Precio del curso" required />
              </Field>
            </FieldGroup>
          </CardContent>

          <CardFooter>
            <Field>
              <input
                type="submit"
                value="Insertar Curso"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </Field>
          </CardFooter>
        </form>
      </Card>
      <FieldDescription className="px-6 text-center">
        <p>Complete the form to insert a new course.</p>
      </FieldDescription>
    </div>
  )
}
