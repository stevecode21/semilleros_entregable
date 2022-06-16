import React from "react";
import { Link } from "react-router-dom";
export const Opciones = () => {
  const cards = [
    {
      page: "/student",
      title: "Crear estudiante",
    },
    {
      page: "/tutor",
      title: "Crear Tutor",
    },
    {
      page: "/semillero",
      title: "Crear Semillero",
    },
    {
      page: "/actividades",
      title: "Gestionar plan de Actividades",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl">
          Elige la acción que deseas realizar
        </h1>
      </div>
      <div className="flex flex-row justify-between w-full">
        {cards.map((card, index) => {
          return (
            <Link
              to={card.page}
              key={index}
              className="rounded-md w-1/3 p-8 h-72 text-center m-20 bg-blue-400"
            >
              <p className="text-white">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
