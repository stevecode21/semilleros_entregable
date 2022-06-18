/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";

export const Semillero = () => {
  const [students, setStudents] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [name, setName] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [specificGoals, setSpecificGoals] = useState("");
  const [message, setMessage] = useState("");

  const researchGroups = [
    "Entrepreneurship Group",
    "Grupo de gerencia en las grandes, pequeñas y medianas empresas -G3Pymes",
    "Entorno Económico de las organizaciones",
    "Dirección & gestión de proyectos.",
    "Grupo de investigación y desarrollo",
    "Gestión Ambiental",
    "Ciencias Básicas",
    "GIS (Grupo de Investigación en Salud)",
    "INDEVOS",
    "Lingüística y comunicación Organizacional",
    "Política y Sostenibilidad",
    "Ambientes de Aprendizaje",
  ];

  const [checkedState, setCheckedState] = useState([]);
  const [checkedTutorState, setCheckedTutorState] = useState([]);
  const [researchGroupSelected, setResearchGroupSelected] = useState(
    "Entrepreneurship Group"
  );

  const handleOnChange = (position, name) => {
    const updatedCheckedState = checkedState.map((item, index) => ({
      checked: index === position ? !item.checked : item.checked,
      name,
    }));

    setCheckedState(updatedCheckedState);
  };
  const handleTutorsOnChange = (position, name) => {
    const updatedCheckedState = checkedTutorState.map((item, index) => ({
      checked: index === position ? !item.checked : item.checked,
      name,
    }));

    setCheckedTutorState(updatedCheckedState);
  };

  function handleResearchGroupOnChange(name) {
    console.log(
      "🚀 ~ file: Semillero.js ~ line 48 ~ handleResearchGroupOnChange ~ name",
      name
    );
    setResearchGroupSelected(name);
  }

  useEffect(() => {
    initCheckedData();
  }, []);

  function initCheckedData() {
    console.log("Asdsads");
    const storage = JSON.parse(localStorage.getItem("student"));
    if (storage && storage.students) {
      setStudents(storage.students);
      const formated = storage.students.map((item) => {
        return { checked: false, name: item.name };
      });
      setCheckedState(formated);
    }

    const tutorsStorage = JSON.parse(localStorage.getItem("tutors"));
    if (tutorsStorage && tutorsStorage.tutors) {
      setTutors(tutorsStorage.tutors);
      const formatedTutors = tutorsStorage.tutors.map((item) => {
        return { checked: false, name: item.name };
      });
      setCheckedTutorState(formatedTutors);
    }
  }

  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeMainGoal(e) {
    setMainGoal(e.target.value);
  }
  function onChangeSpecificGoals(e) {
    setSpecificGoals(e.target.value);
  }

  function createSemillero(e) {
    e.preventDefault();

    const selectedStudents = checkedState.filter((i) => i.checked === true);
    const selectedTutors = checkedTutorState.filter((i) => i.checked === true);

    if (
      name &&
      mainGoal &&
      specificGoals &&
      selectedStudents.length >= 2 &&
      selectedTutors.length >= 1 &&
      researchGroupSelected
    ) {
      const storage = JSON.parse(localStorage.getItem("semilleros"));

      let semilleros =
        storage && storage.semilleros && storage.semilleros.length
          ? storage.semilleros
          : [];

      semilleros.push({
        name,
        mainGoal,
        specificGoals,
        students: selectedStudents,
        researchGroup: researchGroupSelected,
        tutors: selectedTutors,
      });
      const data = {
        semilleros: semilleros,
      };
      localStorage.setItem("semilleros", JSON.stringify(data));
      setMessage("Datos guardados!");

      setName("");
      setMainGoal("");
      setSpecificGoals("");

      setTimeout(() => {
        setMessage("");
        location.reload();
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
        <div className="block p-6 rounded-lg shadow-lg bg-white w-full h-full flex flex-col align-center justify-center">
          <h1 className="text-center text-3xl my-6">Crear Semillero</h1>
          <p className="text-center my-4 text-2xl text-green-300 font-bold">
            {message && message}
          </p>
          <form onSubmit={createSemillero}>
            <div className="w-full">
              <div className="form-group mb-6">
                <div>
                  <h1 className="text-center text-normal my-2">
                    Selecciona minimo 2 estudiantes
                  </h1>
                  <div className="grid grid-cols-4 mb-4 gap-x-6">
                    {students &&
                      students.map((s, index) => {
                        return (
                          <div className="col-span-1" key={index}>
                            <input
                              id={`custom-checkbox-${index}`}
                              type="checkbox"
                              value=""
                              onChange={() => handleOnChange(index, s.name)}
                              className="inline-flex w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-checkbox"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {s.name}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div>
                  <h1 className="text-center text-normal my-2">
                    Selecciona minimo 1 tutor
                  </h1>
                  <div className="grid grid-cols-4 mb-4 gap-x-6">
                    {tutors &&
                      tutors.map((s, index) => {
                        return (
                          <div
                            className="col-span-1 flex justify-center align-center"
                            key={index}
                          >
                            <input
                              id={`custom-checkbox-${index}`}
                              type="checkbox"
                              value=""
                              onChange={() =>
                                handleTutorsOnChange(index, s.name)
                              }
                              className="flex justify-center align-center w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-checkbox"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {s.name}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div>
                  <h1 className="text-center text-normal my-2">
                    Selecciona el grupo de investigacion
                  </h1>
                  <select
                    className="
                    my-4
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
                    onChange={(e) =>
                      handleResearchGroupOnChange(e.target.value)
                    }
                  >
                    {researchGroups &&
                      researchGroups.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <input
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
                  placeholder="Nombre del semillero"
                  onChange={onChangeName}
                  value={name}
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <input
                value={mainGoal}
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
                id="exampleInput125"
                placeholder="Objetivo principal"
                onChange={onChangeMainGoal}
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                value={specificGoals}
                onChange={onChangeSpecificGoals}
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
                placeholder="Enumera aqui tus objetivos especificos"
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
