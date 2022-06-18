import React, { useState } from "react";

export const Student = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");
  const [message, setMessage] = useState("");

  function createStudent(e) {
    e.preventDefault();
    if (name && email && career) {
      const storage = JSON.parse(localStorage.getItem("student"));
      console.log(
        "🚀 ~ file: Student.js ~ line 12 ~ createStudent ~ storage",
        storage
      );

      let students =
        storage && storage.students && storage.students.length
          ? storage.students
          : [];

      students.push({ name, email, career });

      const data = {
        students: students,
      };

      localStorage.setItem("student", JSON.stringify(data));
      setMessage("Datos guardados!");
      setName("");
      setEmail("");
      setCareer("");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex-1">
        <img
          src="https://www.questionpro.com/blog/wp-content/uploads/2018/08/Encuestas-estudiantes-768x512.jpg"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="block p-6 bg-white w-full h-full flex flex-col align-center justify-center">
          <h1 className="text-center text-3xl my-10">Crear estudiante</h1>
          <p className="text-center my-4 text-2xl text-green-300 font-bold">
            {message && message}
          </p>
          <form onSubmit={createStudent}>
            <div className="w-full">
              <div className="form-group mb-6">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control
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
            <div className="form-group mb-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control block
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
            <div className="form-group mb-6">
              <input
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                type="text"
                className="form-control block
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
                placeholder="Carrera"
              />
            </div>

            <button
              type="submit"
              className="
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
