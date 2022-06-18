import React, { useState, useEffect } from "react";

export const Activities = () => {
  const [semilleros, setSemilleros] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("semilleros"));
    if (storage && storage.semilleros) setSemilleros(storage.semilleros || []);
  }, []);

  return (
    <div className="w-full h-screen flex align-center justify-center">
      <div className="grid grid-cols-4 gap-x-6 m-auto">
        {semilleros.map((item, index) => {
          return (
            <div
              className="rounded-md w-40 p-8 h-70 text-center mx-14 my-10 bg-blue-400 col-span-1"
              key={index}
            >
              {/* name,
        mainGoal,
        specificGoals,
        students: selectedStudents,
        researchGroup: researchGroupSelected,
        tutors: selectedTutors, */}
              <p className="text-white">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
