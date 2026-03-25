import React from 'react';
import { Element } from 'react-scroll'; 
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import './Skill.css'; 

const Skill = ({ setSeccionActual }) => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git/GitHub',
    'Sass/SCSS',
    'Responsive Design',
  ];

  return (
    <Element name="skill" className="skill-section"> 
      <div className="nav-button-container">
        <button className="nav-step-button" onClick={() => setSeccionActual('proyectos')}>
          <BsArrowUp /> <span>Anterior</span>
        </button>
      </div>

      <h1>MIS HABILIDADES</h1>
      <h2 className="skill-subtitle">Desarrollador Front-End</h2>
      
      <div className="skills-container">
        {frontEndSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <p className="skills-description">
        Soy un desarrollador Front-End con experiencia en la creación de interfaces de usuario atractivas y responsivas. Domino las tecnologías clave para construir experiencias web modernas.
      </p>

      <div className="nav-button-container" style={{ marginTop: '40px' }}>
        <button className="nav-step-button" onClick={() => setSeccionActual('contacto')}>
          <BsArrowDown /> <span>Siguiente</span>
        </button>
      </div>
    </Element>
  );
};

export default Skill;