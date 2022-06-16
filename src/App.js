import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Opciones } from './pages/Opciones';
import { Student } from './pages/Student';
import { Tutor } from './pages/Tutor';
import { Semillero } from './pages/Semillero';


function App() {

  return (
    <div className='h-screen relative'>

      <div className='absolute top-5 left-5 bg-green-700 px-10 rounded-md'>
      <Link to="/" className='text-white'>Volver al home</Link>
      </div>
    <div className="h-full flex flex-col align-center justify-center space-y-20">
      <Routes>
        <Route path="/" element={<Opciones/> } />
        <Route path="student" element={<Student />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="semillero" element={<Semillero />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
