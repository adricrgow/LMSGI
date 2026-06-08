import { useEffect, useState } from "react";
import { getContacto } from "@/model/api/main/apiContacto";
import type { IContacto } from "@/model/interfaces/IContacto";
import {
    Mail, MapPin, Phone, Clock, Instagram, Linkedin,
    Twitter, Github, ExternalLink, Headphones
} from "lucide-react";

const SocialLink = ({
    href, icon: Icon, label, color
}: {
    href?: string;
    icon: React.ElementType;
    label: string;
    color: string;
}) => {
    if (!href) return null;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-300`}
        >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color} transition-all`}>
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{label}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 ml-auto transition-colors" />
        </a>
    );
};

const InfoCard = ({
    icon: Icon, label, value, iconColor
}: {
    icon: React.ElementType;
    label: string;
    value?: string;
    iconColor: string;
}) => {
    if (!value) return null;
    return (
        <div className="flex gap-4 p-5 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 transition-all duration-300">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{label}</span>
                <span className="text-sm text-slate-200 font-medium break-words">{value}</span>
            </div>
        </div>
    );
};

export const Contacto = () => {
    const [contacto, setContacto] = useState<IContacto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacto = async () => {
            setLoading(true);
            const data = await getContacto();
            setContacto(data);
            setLoading(false);
        };
        fetchContacto();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                    <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Cargando contacto...</p>
                </div>
            </div>
        );
    }

    if (!contacto) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center bg-slate-900 border border-red-900/50 p-8 rounded-2xl">
                    <p className="text-red-400 text-lg font-semibold">No se encontró información de contacto</p>
                    <p className="text-slate-500 text-sm mt-2">Comprueba que la tabla "contactos" tiene datos en Supabase.</p>
                </div>
            </div>
        );
    }

    const hasSocialLinks = contacto.instagram_url || contacto.linkedin_url || contacto.twitter_url || contacto.github_url;

    return (
        <section className="w-full max-w-5xl mx-auto py-10 px-4 relative">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-indigo-600/8 rounded-full blur-[90px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] bg-emerald-600/8 rounded-full blur-[80px] pointer-events-none -z-10" />

            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700 text-indigo-400 mb-5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Información de Contacto</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                    ¿Hablamos?
                </h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                    Estoy disponible para proyectos freelance, colaboraciones y consultas profesionales.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                {/* Left column – Info cards + Social links */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    {/* Info Cards */}
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur flex flex-col gap-3">
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-indigo-400" /> Datos de contacto
                        </h2>
                        <InfoCard icon={Mail}  label="Email principal"    value={contacto.email}            iconColor="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400" />
                        <InfoCard icon={Headphones} label="Soporte"       value={contacto.soporte_email}    iconColor="bg-purple-500/10 border border-purple-500/20 text-purple-400" />
                        <InfoCard icon={Phone} label="Teléfono"           value={contacto.telefono}          iconColor="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" />
                        <InfoCard icon={MapPin} label="Dirección"         value={contacto.direccion}         iconColor="bg-amber-500/10 border border-amber-500/20 text-amber-400" />
                        <InfoCard icon={Clock} label="Horario de atención" value={contacto.horario_atencion} iconColor="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400" />
                    </div>

                    {/* Social Links */}
                    {hasSocialLinks && (
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur flex flex-col gap-3">
                            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4 text-indigo-400" /> Redes sociales
                            </h2>
                            <SocialLink href={contacto.instagram_url} icon={Instagram} label="Instagram"  color="bg-pink-500/10 border border-pink-500/20 text-pink-400" />
                            <SocialLink href={contacto.linkedin_url}  icon={Linkedin}  label="LinkedIn"   color="bg-blue-500/10 border border-blue-500/20 text-blue-400" />
                            <SocialLink href={contacto.twitter_url}   icon={Twitter}   label="Twitter / X" color="bg-slate-500/10 border border-slate-500/30 text-slate-300" />
                            <SocialLink href={contacto.github_url}    icon={Github}    label="GitHub"     color="bg-slate-500/10 border border-slate-500/30 text-slate-300" />
                        </div>
                    )}
                </div>

                {/* Right column – Maps embed + CTA email */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Google Maps */}
                    {contacto.google_maps_embed_url ? (
                        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl flex-1 min-h-[340px]">
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800 bg-slate-950/50">
                                <MapPin className="w-4 h-4 text-amber-400" />
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ubicación</span>
                            </div>
                            <iframe
                                src={contacto.google_maps_embed_url}
                                className="w-full h-[300px] md:h-[360px]"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación en Google Maps"
                            />
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-center min-h-[260px]">
                            <div className="text-center text-slate-600">
                                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Sin ubicación configurada</p>
                            </div>
                        </div>
                    )}

                    {/* CTA card */}
                    <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 via-slate-900/80 to-slate-900/60 p-7 backdrop-blur flex flex-col sm:flex-row items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-7 h-7 text-indigo-400" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-bold text-white mb-1">¿Tienes un proyecto en mente?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">Escríbeme directamente y te respondo lo antes posible.</p>
                        </div>
                        <a
                            href={`mailto:${contacto.email}`}
                            className="sm:ml-auto flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Enviar email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}