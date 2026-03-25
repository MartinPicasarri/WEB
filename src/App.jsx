import React, { useState } from 'react';
import Navbar from './componentes/navbar/Navbar';
import Info from './componentes/info/Info';
import Project from './componentes/projects/Projects';
import Skill from './componentes/skill/Skill';
import Contact from './componentes/contact/Contact';
import Footer from './componentes/footer/Footer';
import './App.css';

function App() {
  const [seccionActual, setSeccionActual] = useState('info');

  return (
    <div className="app-layout">
      <Navbar setSeccionActual={setSeccionActual} />

      <main className="main-content">
        {seccionActual === 'info' && (
          <Info setSeccionActual={setSeccionActual} />
        )}

        {seccionActual === 'proyectos' && (
          <Project setSeccionActual={setSeccionActual} />
        )}

        {seccionActual === 'habilidades' && (
          <Skill setSeccionActual={setSeccionActual} />
        )}

        {seccionActual === 'contacto' && (
          <Contact setSeccionActual={setSeccionActual} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;