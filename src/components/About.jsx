import React from "react";

export default function About() {
  return (
    <div className="bg-slate-600 w-full h-dvh">
      <h1 className="text-3xl font-bold text-center">Bienvenido! ;)</h1>
      <div className="flex flex-row items-start">
        <img
          src="src/images/me.jpg"
          className="w-45 h-96 shadow-xl dark:shadow-gray-800 rounded-lg pl- ml-6 "
          alt="Facundo Ríos"
        />
        <div className="pl-5 pr-10">
          <p className="font-mono">
            Soy un desarrollador de 19 años de Formosa, Argentina. Este es un
            porfolio hecho por mí, el cual contiene: Proyectos en los que he
            estado trabajando, principalmente utilizando el stack MERN (MongoDB,
            Express.js, React.js, Node.js), Información personal y de contacto.
          </p>
          <p className="font-mono">
            Actualmente estoy estudiando la Tec. Sup. en Desarrollo de Software
            Multiplataforma, en el Instituto Politécnico Formosa.
          </p>
          <p className="font-mono">
            Estoy disponible para oportunidades de trabajo, pasantías y
            proyectos interesantes.
          </p>
        </div>
      </div>
    </div>
  );
}
