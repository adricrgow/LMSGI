import { Home } from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import  Trabajos  from "../pages/Trabajos/Trabajos"
import { Contacto } from "../pages/Contacto/Contacto"
import Servicios from "../pages/servicios/Servicios"
import { ServicioDetalle } from "@/components/main/servicios/ServicioDetalle"
import Cursos from "@/pages/cursos/Cursos"
import Titulos from "@/pages/Titulos/Titulos"
import BackendLayout from "@/layouts/BackendLayout"
import { CursoDetalle } from "@/components/main/Cursos/CursoDetalle"



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas privadas para el backend */}
        <Route path="/admin" element={<BackendLayout />} />

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
