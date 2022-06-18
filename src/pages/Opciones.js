import React from "react";
import { Link } from "react-router-dom";
export const Opciones = () => {
  const cards = [
    {
      page: "/student",
      title: "Crear estudiante",
      description:
        "Aquí podrás crear estudiantes pertenecientes a la universidad",
    },
    {
      page: "/tutor",
      title: "Crear Tutor",
      description: "Aquí podrás crear tutores pertenecientes a la universidad",
    },
    {
      page: "/semillero",
      title: "Crear Semillero",
      description:
        "Aquí podrás crear tus semilleros favoritos asociando grupos de investigacion",
    },
    {
      page: "/actividades",
      title: "Gestionar plan de Actividades",
      description:
        "Aquí podrás crear y gestionar tus planes de actividades (en construcción)",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl my-10">
          Elige la acción que deseas realizar
        </h1>
      </div>
      <div className="grid grid-cols-2 w-full gap-y-10">
        {cards.map((card, index) => {
          return (
            <div key={index} className="col-span-1 h-42 m-auto">
              <div className="h-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* <Link to={card.page}> */}
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
                {/* </Link> */}
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {card.description}
                  </p>
                  <Link
                    to={card.page}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Empezar
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
