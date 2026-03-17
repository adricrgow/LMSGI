
//array JS de objetoS js
const posts = [
  {
    id: 1,
    title: 'Diseo de una pagina web con React y Tailwind a la Artesa',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: '01/06/2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: '22/06/2022',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
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
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Diseo de una pagina web con React y Tailwind a la Artesa',
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
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const Trabajos = () => {

    return (
        <section id="trabajos" className="min-h-screen w-full bg-gray-900 text-white py-24">
               <div className="w-full bg-slate-900 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="w-full">
                    <div className="w-full mb-8">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Mis Trabajos</h2>
                    <p className="mt-2 text-lg text-slate-300">Experiencia profesional y proyectos destacados</p>
                    </div>
                    <div className="w-full mt-10 grid grid-cols-1 gap-6 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex h-full flex-col justify-between rounded-xl border border-white/20 bg-slate-950 p-6 shadow-xl shadow-black/25">
                          <div className="flex items-center gap-x-4 text-xs text-slate-400">
                              <time dateTime={post.datetime} className="">{post.date}</time>
                              <a
                              href={post.category.href}
                              className="rounded-full bg-gray-800 px-3 py-1.5 font-medium text-slate-200"
                              >
                              {post.category.title}
                              </a>
                          </div>
                          <div className="group relative grow mt-4">
                              <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400">
                              <a href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                              </a>
                              </h3>
                              <p className="mt-4 text-sm leading-relaxed text-slate-300">{post.description}</p>
                          </div>
                          <div className="mt-6 flex items-center gap-x-3 border-t border-gray-700 pt-4">
                              <img alt="" src={post.author.imageUrl} className="h-11 w-11 rounded-full object-cover" />
                              <div>
                              <p className="font-semibold text-white">
                                  <a href={post.author.href}>{post.author.name}</a>
                              </p>
                              <p className="text-slate-400">{post.author.role}</p>
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

export default Trabajos;