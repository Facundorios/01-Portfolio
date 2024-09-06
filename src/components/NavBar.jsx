export default function NavBar() {
  const text =
    "px-9 py-2 rounded hover:bg-gray-900 text-slate-400 easy-in-out transition duration-500";

  return (
    <nav className="flex justify-between items-center bg-slate-700">
      <div>
        <h1 className="text-2xl font-bold text-slate-300 text-center">
          Portfolio
        </h1>
      </div>
      <div>
        <a href="/about" className={text}>
          Sobre mí
        </a>
        <a href="/skill" className={text}>
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
