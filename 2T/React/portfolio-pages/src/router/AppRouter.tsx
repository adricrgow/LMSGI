import { Home } from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { Trabajos } from "../pages/Trabajos"
import { Contacto } from "../pages/Contacto"
import Servicios from "../pages/servicios/Servicios"
import { ServicioDetalle } from "@/components/main/servicios/ServicioDetalle"
import Cursos from "@/pages/cursos/Cursos"


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
          <Route path="/Cursos" element={<Cursos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
