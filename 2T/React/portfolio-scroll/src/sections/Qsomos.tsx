// forma tradicional de definir los componentes en React

// function Qsomos() {
//     return ()
// }

// export default Qsomos;

//idem anterior pero con funcion + exportada directamente

// export default function Qsomos1() {
//     return ()
// }

//idem anterior pero con funcion flecha
const Qsomos2 = () => {
    return (
        <section id="qsomos"className="main-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Quienes somos</h1>
        </section>
    )
}
export default Qsomos2;