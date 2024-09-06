export default function NavBar() {
  const text =
    "px-9 py-2 rounded hover:bg-gray-900 text-slate-400 easy-in-out transition ";

  return (
    <nav className="flex justify-between items-center bg-slate-700">
      <div>
        <h1 className="text-2xl font-bold text-slate-300">Portfolio</h1>
      </div>
      <div>
        <a href="/" className={text}>
          Inicio
        </a>
        <a href="#" className={text}>
          Habilidades
        </a>
        <a href="#" className={text}>
          Proyectos
        </a>
        <a href="/contactame" className={text}>
          Contactame
        </a>
      </div>
    </nav>
  );
}
