// este componente crea el frontend de la aplicación

import Header from "../components/main/Header";
import Qsomos2 from "../sections/Qsomos";
import Trabajos from "../sections/Trabajos";

// La parte publica de la aplicación
function MainLayout(){
    return(
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <Header/>
            <main>
                <Qsomos2/>
                <Trabajos/>
            </main>
        </div>
    )
}

export default MainLayout;