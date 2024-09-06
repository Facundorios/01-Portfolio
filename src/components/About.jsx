import React from "react";

export default function About() {
  return (
    <div className="bg-slate-600 flex-grow-0 h-auto">
      <h1 className="text-3xl font-bold text-center">Me llamo Facundo Ríos!</h1>
      <div className="flex flex-row items-start">
        <img
          src="src/images/me.jpg"
          className="w-45 h-96   shadow-xl dark:shadow-gray-800"
          alt="Facundo Ríos"
        />
        <div>
          <p className="font-mono">
            ¡Bienvenid@! Soy un joven desarrollador de 19 años de Formosa,
            Argentina. Aquí encontrarás una variedad de información acerca de
            mí: Proyectos en los que he estado trabajando, principalmente
            utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js),
            Información personal y de contacto.
          </p>
          <p>
            Actualmente estoy estudiando la Tec. Sup. en Desarrollo de Software
            Multiplataforma, en el Instituto Politécnico Formosa.
          </p>
          <p>
            Estoy disponible para oportunidades de trabajo, pasantías y
            proyectos interesantes.
          </p>
        </div>
      </div>
    </div>
  );
}
