
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, BookOpen, GraduationCap, Mail, Terminal } from "lucide-react";

export const Home = () => {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col items-center relative">
            {/* Glowing background circles for modern tech look */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-emerald-600/10 rounded-full blur-[60px] pointer-events-none -z-10" />

            {/* Hero Section */}
            <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                    Hola, soy <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Adrián Contreras</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-350 font-medium mb-4">
                    Desarrollador Full Stack & Diseñador de Experiencias Digitales
                </p>

                <p className="text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
                    Me apasiona crear aplicaciones web modernas, rápidas y totalmente integradas. Combino la lógica del backend mediante bases de datos en la nube con interfaces fluidas e intuitivas.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link 
                        to="/trabajos" 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-lg shadow-indigo-600/35 hover:-translate-y-0.5 flex items-center gap-2 group"
                    >
                        Ver mis Trabajos
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                        to="/contacto" 
                        className="bg-slate-850 hover:bg-slate-800 text-white border border-slate-750 font-semibold py-3 px-8 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4 text-slate-400" />
                        Contactar
                    </Link>
                </div>
            </div>

            {/* Portfolio Sections Grid */}
            <div className="w-full mb-20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-400" /> Qué encontrarás en mi web
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Section: Trabajos */}
                    <Link 
                        to="/trabajos" 
                        className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 backdrop-blur flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">Mis Trabajos</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Explora mis proyectos destacados, soluciones full-stack y de diseño interactivo. Aquí demuestro mi experiencia técnica real.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                            Ver trabajos <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* Section: Servicios */}
                    <Link 
                        to="/servicios" 
                        className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 backdrop-blur flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Servicios</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Ofrezco servicios profesionales adaptados a tus necesidades: desarrollo a medida, optimización, integraciones de bases de datos y diseño adaptativo.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                            Explorar servicios <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* Section: Cursos */}
                    <Link 
                        to="/cursos" 
                        className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 backdrop-blur flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400 group-hover:bg-amber-500/20 transition-all">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Mis Cursos</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Formación continua y autoaprendizaje. Accede a la lista completa de cursos y certificaciones que he completado para mantenerme al día.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                            Ver cursos <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* Section: Titulos */}
                    <Link 
                        to="/titulos" 
                        className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Títulos y Estudios</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Resumen de mi formación académica oficial y títulos oficiales cursados durante mi trayectoria en el sector.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                            Ver estudios <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Quick Skills Tag Cloud */}
            <div className="text-center w-full max-w-3xl border-t border-slate-800/80 pt-12">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-4 font-mono">
                    Tecnologías y herramientas clave
                </span>
                <div className="flex flex-wrap justify-center gap-2.5">
                    {["React", "TypeScript", "Vite", "Supabase", "Node.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "SQL"].map((skill) => (
                        <span 
                            key={skill} 
                            className="text-sm font-medium px-4 py-2 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};