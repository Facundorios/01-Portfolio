import React from "react";

import { databases, languages, gitStats } from "../data/skills.data.js";

export default function Skills() {
  return (
    <div className="bg-slate-800 h-auto">
      <h1 className="text-5xl font-mono text-center text-slate-300 shadow-slate-800">
        Mis habilidades
      </h1>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Lenguajes de programación
      </h2>

      <div className="grid grid-cols-5 gap-10">
        {languages.map((language) => {
          return (
            <div className="bg-slate-700 flex flex-col items-center">
              <a href={language.documentation} target="_blank">
                <img
                  src={language.imageUrl}
                  className="mt-5"
                  width={75}
                  alt={language.name}
                />
              </a>
              <h1 className="text-sm text-gray-200 font-mono">
                {language.name}
              </h1>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Bases de datos
      </h2>
      <div className="grid grid-cols-5 gap-5">
        {databases.map((database) => {
          return (
            <div className="bg-slate-600 flex flex-col items-center">
              <a href={database.documentation} target="_blank">
                <img src={database.imageUrl} alt={database.name} width={75} />
              </a>
              <h1 className="text-2xl text-gray-200 font-mono">
                {database.name}
              </h1>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Estadísticas de GitHub
      </h2>

      <div className="grid grid-cols-3 ">
        {gitStats.map((gitStat) => {
          return (
            <div className="flex flex-col items-center ">
              <a href={gitStat.imageUrl} target="_blank">
                <img
                  src={gitStat.imageUrl}
                  className="shadow-xl dark:shadow-gray-300"
                  alt={gitStat.name}
                  width={400}
                  height={400}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
