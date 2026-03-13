import { ServiciosCard } from '@/components/main/servicios/ServiciosCard';
import dataServicios from '../data/servicios.json';
const Servicios =() => {
    return(
        
       <section id="servicios"className="min-h-screen flex-direction column items-center justify-center">
            <h1 className="text-4xl font-bold">
                Mis Servicios
            </h1>

            <ServiciosCard servicios={dataServicios} />
        
            {/* <ul>
                    {
                        dataServicios.map( (servicios) =>(
                            <li 
                            key={servicios.id} 
                            className="text-2xl font-medium">
                                {servicios.titulo}
                                
                                </li>
                        ))
                    

                    //     dataServicios.map((servicio) =>{
                    //     return(
                    //         <li>{servicio.titulo}</li>
                    //     )
                    // })
                }
                </ul> */}
                
        </section>
    )
}

export default Servicios;
