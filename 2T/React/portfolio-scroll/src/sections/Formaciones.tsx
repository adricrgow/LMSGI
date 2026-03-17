
const titulos = [
    {
        id: 1,
        title: 'Las ESO',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                  'https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw',
              },
    },
    {
        id: 2,
        title: 'Grado Medio Sistemas Microinformáticos y Redes',
        href: '#',
        description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { title: 'Sales', href: '#' },
        author: {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            href: '#',
            imageUrl:
                'https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw',
        },
    },
    {
        id: 3,
        title: 'Grado Superior DAW',
        href: '#',
        description:
            'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { title: 'Business', href: '#' },
        author: {
            name: 'Tom Cook',
            role: 'Director of Product',
            href: '#',
            imageUrl:
                'https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw',
        },
    },
    {
        id: 4,
        title: 'B2 Inglés',
        href: '#',
        description:
            'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { title: 'Business', href: '#' },
        author: {
            name: 'Tom Cook',
            role: 'Director of Product',
            href: '#',
            imageUrl:
                'https://imgs.search.brave.com/SgBnQ9mx-NoU1paAFsfeQ4r9xaQ2RmizHnVxM1IHvZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzhj/Lzk0LzhiOGM5NGVl/NWYwYjdiMTE1MGQy/OTQ0NjBjZmRiYjhk/LmpwZw',
        },
    },
]


const Formaciones = () => {
    return (
        <section id="formaciones" className="w-full bg-gray-900 text-white py-24">
            <div className="w-full px-4 py-24 sm:px-6 lg:px-8">
                <div className="w-full">
                    <div className="w-full border-4 border-purple-500 rounded-lg p-3">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-red-950 sm:text-5xl">
                            Titulaciones Académicas
                        </h2>
                        <p className="mt-2 text-lg/8 text-white-950">
                            Titulaciones Académicas y Certificaciones Profesionales 
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {titulos.map((titulo) => (
                            <article key={titulo.id} 
                                            className="flex w-full flex-col items-start justify-between rounded-md border-2 border-gray-600 p-4 bg-slate-950 hover:bg-slate-900"
                                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={titulo.datetime} className="text-gray-400">
                                        {titulo.date}
                                    </time>
                                    <a
                                        href={titulo.category.href}
                                        className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                                    >
                                        {titulo.category.title}
                                    </a>
                                </div>
                                <div className="group relative grow">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                                        <a href={titulo.href}>
                                            <span className="absolute inset-0" />
                                            {titulo.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{titulo.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                    <img alt="" src={titulo.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-white">
                                            <a href={titulo.author.href}>
                                                <span className="absolute inset-0" />
                                                {titulo.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-400">{titulo.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Formaciones;