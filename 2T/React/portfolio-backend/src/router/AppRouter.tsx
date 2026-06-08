import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import BackendLayout from "@/layouts/BackendLayout"
import AdminCursos from "@/pages/admin/cursos/home"
import AdminTrabajos from "@/pages/admin/Trabajos/home"
import AdminTitulos from "@/pages/admin/Titulos/home"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir la raíz al panel de administración */}
        <Route path="/" element={<Navigate to="/admin/cursos" replace />} />
        
        {/* Rutas privadas para el backend */}
        <Route path="/admin" element={<BackendLayout />}>
          <Route index element={<Navigate to="/admin/cursos" replace />} />
          <Route path="cursos" element={<AdminCursos />} />
          <Route path="trabajos" element={<AdminTrabajos />} />
          <Route path="titulos" element={<AdminTitulos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

