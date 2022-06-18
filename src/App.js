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
      <div className="h-full flex flex-col align-center  space-y-20">
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
