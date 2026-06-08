import { Home } from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import  Trabajos  from "../pages/admin/Trabajos/Trabajos"
import { Contacto } from "../pages/admin/Contacto/Contacto"
import Servicios from "../pages/admin/servicios/Servicios"
import { ServicioDetalle } from "@/components/main/servicios/ServicioDetalle"
import Cursos from "@/pages/admin/cursos/Cursos"
import Titulos from "@/pages/admin/Titulos/Titulos"
import { CursoDetalle } from "@/components/main/Cursos/CursoDetalle"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:id" element={<ServicioDetalle />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<CursoDetalle />} />
          <Route path="/titulos" element={<Titulos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

