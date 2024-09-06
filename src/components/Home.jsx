export default function Home() {
  return (
    <div className="bg-slate-600 flex-grow-0 h-auto">
      <h1 className="text-3xl font-bold">Me llamo Facundo Ríos!</h1>
      <div className="flex flex-row items-start">
        <img
          src="src/images/me.jpg"
          className="w-48 mr-4 "
          alt="Facundo Ríos"
        />
        <p className="text-lg">
          ¡Bienvenid@! Soy un joven desarrollador de 19 años de Formosa,
          Argentina. Aquí encontrarás una variedad de información acerca de mí:
          Proyectos en los que he estado trabajando, principalmente utilizando
          el stack MERN (MongoDB, Express.js, React.js, Node.js), Información
          personal y de contacto.
        </p>
      </div>
    </div>
  );
}
