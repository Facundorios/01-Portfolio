export default function NavBar() {
  const text =
    "px-9 py-5 rounded hover:bg-gray-900 text-slate-400 easy-in-out transition duration-500 t-4 mb-4";

  return (
    <nav className="flex justify-between items-center bg-slate-700 mt-4 mb-4 space-x-9">
      <div>
        <h1 className="text-2xl font-bold text-slate-300 text-center ml-5 mr-5">
          Facundo Ríos
        </h1>
      </div>
      <div>
        <a href="/about" className={text}>
          Sobre mí
        </a>
        <a href="/skills" className={text}>
          Habilidades
        </a>
        <a href="/projects" className={text}>
          Proyectos
        </a>
        <a href="/contact" className={text}>
          Contactame
        </a>
      </div>
    </nav>
  );
}
