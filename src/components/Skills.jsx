import React from "react";

import "../css/images.css";

import {
  databases,
  languages,
  gitStats,
  frameworks,
  tools,
} from "../data/skills.data.js";

export default function Skills() {
  return (
    <div className="bg-slate-800 h-auto pl-5 pr-5">
      <h1 className="text-5xl font-mono text-center text-slate-300 shadow-slate-800">
        Mis habilidades
      </h1>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Bases de datos
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
        {databases.map((database) => {
          return (
            <div className="card bg-slate-700 flex flex-col items-center card">
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
        Lenguajes de programación
      </h2>

      <div className="grid grid-cols-4 gap-5 mt-3 mb-3">
        {languages.map((language) => {
          return (
            <div className="bg-slate-600 flex flex-col items-center card">
              <a href={language.documentation} target="_blank">
                <img
                  src={language.imageUrl}
                  className="mt-5"
                  width={75}
                  alt={language.name}
                />
              </a>
              <h1 className="text-2xl text-gray-200 font-mono">
                {language.name}
              </h1>
            </div>
          );
        })}
      </div>
      <h2 className="text-2xl font-mono text-center text-slate-300">
        Framework/Biblotecas
      </h2>

      <div className="grid grid-cols-5 gap-5 mt-3 mb-3">
        {frameworks.map((framework) => {
          return (
            <div className="bg-slate-500 flex flex-col items-center card">
              <a href={framework.documentation} target="_blank">
                <img src={framework.imageUrl} alt={framework.name} width={75} />
              </a>
              <h1 className="text-2xl text-gray-200 font-mono">
                {framework.name}
              </h1>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Herramientas
      </h2>
      <div className="grid grid-cols-6 gap-5 mt-3 mb-3">
        {tools.map((tool) => {
          return (
            <div className="bg-slate-400 flex flex-col items-center card">
              <a href={tool.documentation} target="_blank">
                <img src={tool.imageUrl} alt={tool.name} width={75} />
              </a>
              <h1 className="text-sm text-gray-200 font-mono">{tool.name}</h1>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-mono text-center text-slate-300">
        Estadísticas de GitHub
      </h2>

      <div className="grid grid-cols-3 mt-3 mb-3">
        {gitStats.map((gitStat) => {
          return (
            <div className="flex flex-col items-center ">
              <a href={gitStat.imageUrl} target="_blank">
                <img
                  src={gitStat.imageUrl}
                  className="card"
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
