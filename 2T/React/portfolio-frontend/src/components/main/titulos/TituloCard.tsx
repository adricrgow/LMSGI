import type { ITitulos } from "@/model/interfaces/ITitulos";

interface Props {
    titulo: ITitulos;
}

export const TituloCard = ({ titulo }: Props) => {
    return (
        <article className="flex w-full flex-col items-start justify-between rounded-md border-2 border-gray-600 p-4 bg-slate-950 hover:bg-slate-900 transition-colors">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={titulo.datetime} className="text-gray-400">
                    {titulo.date}
                </time>
                <a
                    href={titulo.category?.href || '#'}
                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                >
                    {titulo.category?.title}
                </a>
            </div>
            <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300 transition-colors">
                    <a href={titulo.href || '#'}>
                        <span className="absolute inset-0" />
                        {titulo.title}
                    </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{titulo.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={titulo.author?.imageUrl} className="size-10 rounded-full bg-gray-800 object-cover" />
                <div className="text-sm/6">
                    <p className="font-semibold text-white">
                        <a href={titulo.author?.href || '#'}>
                            <span className="absolute inset-0" />
                            {titulo.author?.name}
                        </a>
                    </p>
                    <p className="text-gray-400">{titulo.author?.role}</p>
                </div>
            </div>
        </article>
    );
};
