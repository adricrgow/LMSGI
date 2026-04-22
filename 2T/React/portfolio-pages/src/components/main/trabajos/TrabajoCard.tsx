import type { ITrabajos } from "@/model/interfaces/ITrabajos";

interface Props {
    trabajo: ITrabajos;
}

export const TrabajoCard = ({ trabajo }: Props) => {
    return (
        <article className="flex h-full flex-col justify-between rounded-xl border border-white/20 bg-slate-950 p-6 shadow-xl shadow-black/25 transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center gap-x-4 text-xs text-slate-400">
                <time dateTime={trabajo.datetime} className="">{trabajo.date}</time>
                <a
                    href={trabajo.category?.href || '#'}
                    className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-slate-200 hover:bg-gray-700 transition-colors"
                >
                    {trabajo.category?.title}
                </a>
            </div>
            <div className="group relative grow mt-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    <a href={trabajo.href || '#'}>
                        <span className="absolute inset-0" />
                        {trabajo.title}
                    </a>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{trabajo.description}</p>
            </div>
            <div className="mt-6 flex items-center gap-x-3 border-t border-gray-700 pt-4">
                <img alt="" src={trabajo.author?.imageUrl} className="h-11 w-11 rounded-full object-cover" />
                <div>
                    <p className="font-semibold text-white">
                        <a href={trabajo.author?.href || '#'} className="relative z-10 hover:text-indigo-300">
                            {trabajo.author?.name}
                        </a>
                    </p>
                    <p className="text-slate-400">{trabajo.author?.role}</p>
                </div>
            </div>
        </article>
    );
};
