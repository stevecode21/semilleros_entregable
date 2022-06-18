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
    <div className="h-screen relative">
      <div className="absolute top-5 left-5 bg-green-700 px-10 rounded-md">
        {location.pathname !== "/" && (
          <Link to="/" className="text-white">
            Volver al home
          </Link>
        )}
      </div>
      <div className="h-full flex flex-col align-center justify-center space-y-20">
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
