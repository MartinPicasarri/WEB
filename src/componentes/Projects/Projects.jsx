import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import "./Projects.css";

const projectDetails = {
  1: {
    title: "ONE-PAGE",
    content: <p>Esta pagina esta dedicada a Lazo de Amor, busca brindar informacion sobre el agua de kefir y vender la misma </p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1750343585/Website_About_Agua_De_Kefir_avxwbs.png",
    link: "https://lazode-amor-89zf.vercel.app/"
  },
  2: {
    title: "ECOMMERCE",
    content: <p>Este proyecto es una simulación de una hamburguesería online donde los usuarios pueden explorar el menú, agregar productos al carrito y realizar un pedido.</p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1750344170/Big_Burguer_Online_Registration_Form_ikxjhu.png",
    link: "https://hamburgueseria-muga-7oc5tupuf-martinpicasarris-projects.vercel.app/index.html"
  },
  3: {
    title: "WEBSITE",
    content: <p>Presenta información sobre Ágora, tienda de ropa inventada, permite al usuario registrarse/iniciar sesion y pedir ropa de manera online</p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1759931148/Captura_de_pantalla_2025-10-08_104426_hefpyo.png",
    link: "https://agora-quyl.vercel.app/"
  },
};

const Project = ({ setSeccionActual }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    if (inView) {
      [1, 2, 3].forEach((index, i) => {
        setTimeout(() => {
          setAnimatedCards((prev) => ({ ...prev, [index]: true }));
        }, i * 300); 
      });
    }
  }, [inView]);

  return (
    <Element name="projects" className="projects-section">
      <div className="nav-button-container top">
        <button className="nav-step-button" onClick={() => setSeccionActual('info')}>
          <BsArrowUp className="nav-step-icon" />
          <span>Anterior</span>
        </button>
      </div>

      <div ref={ref} className="projects-wrapper">
        <h2 className="projects-title">MIS PROYECTOS</h2>
        <div className="container-card">
          {[1, 2, 3].map((index) => (
            <div
              className={`project-card ${animatedCards[index] ? 'animate' : ''}`}
              key={index}
            >
              <figure className="card-figure">
                <img
                  src={projectDetails[index].imageUrl}
                  alt={`Imagen del proyecto ${projectDetails[index].title}`}
                />
              </figure>
              <div className="contenido-card">
                <h3>{projectDetails[index].title}</h3>
                {projectDetails[index].content} {/* Vuelve a renderizar el objeto <p> */}
                <a
                  href={projectDetails[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="nav-button-container bottom">
        <button className="nav-step-button" onClick={() => setSeccionActual('habilidades')}>
          <BsArrowDown className="nav-step-icon" />
          <span>Siguiente</span>
        </button>
      </div>
    </Element>
  );
};

export default Project;