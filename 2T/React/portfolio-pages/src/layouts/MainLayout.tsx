import { NavBar } from '../components/main/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-900 text-white">
      <header className="w-full bg-slate-950/80 backdrop-blur z-50">
        <NavBar />
      </header>
      <main className="flex-1 min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="w-full bg-slate-950/80 backdrop-blur z-50 p-6 text-center mt-auto">
        Este es el pie de página de mi portfolio
      </footer>
    </div>
  )
}
