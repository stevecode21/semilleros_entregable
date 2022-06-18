import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Opciones } from "./pages/Opciones";
import { Student } from "./pages/Student";
import { Tutor } from "./pages/Tutor";
import { Semillero } from "./pages/Semillero";
import { Activities } from "./pages/Activities";

function App() {
  const location = useLocation();
  return (
    <div className="h-screen relative backgroundimage">
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-4 dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Universidad EAN - Grupo 4
          </span>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu"></div>
        </div>
      </nav>

      {location.pathname !== "/" && (
        <Link
          to="/"
          className="absolute top-5 left-5 bg-white p-4 rounded-md text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
          </svg>
        </Link>
      )}
      <div className="h-auto flex flex-col align-center  space-y-20">
        <Routes>
          <Route path="/" element={<Opciones />} />
          <Route path="student" element={<Student />} />
          <Route path="tutor" element={<Tutor />} />
          <Route path="semillero" element={<Semillero />} />
          <Route path="actividades" element={<Activities />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
