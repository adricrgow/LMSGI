// este componente crea el frontend de la aplicación

import Header from "../components/main/Header";
import Qsomos2 from "../sections/Qsomos";
import Trabajos from "../sections/Trabajos";
import Formaciones from "../sections/Formaciones";
import Servicios from "../sections/Servicios";

// La parte publica de la aplicación
function MainLayout(){
    return(
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <Header/>
            <main>
                <Qsomos2/>
                <Trabajos/>
                <Formaciones/>
                <Servicios/>
            </main>
        </div>
    );
}

export default MainLayout;