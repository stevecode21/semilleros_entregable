import React from "react";

export const Tutor = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex-1">
        <img
          src="https://www.questionpro.com/blog/wp-content/uploads/2018/08/Encuestas-estudiantes-768x512.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full h-full flex flex-col align-center justify-center">
          <h1 className="text-center text-3xl my-10">Crear Tutor</h1>
          <form>
            <div class="w-full">
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="Nombre Completo"
                />
              </div>
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Correo"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Facultad"
              />
            </div>

            <button
              type="submit"
              class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};