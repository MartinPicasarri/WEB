import { BsArrowDown } from 'react-icons/bs';
import './Info.css';

function Info({ setSeccionActual }) {
    return (
        <div className='info-container'>
            <div className='info-card'>
                {/*<div className="info-img-section">
                    <img 
                        src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1747425494/Placeholder-_-Glossary_hir78d.svg" 
                        alt="Martin Picasarri" 
                    />
                </div>*/}

                <div className="info-text-section">
                    <div className="info-profile">
                        <h1 className="info-name">Martin Picasarri</h1>
                        <h2 className="info-role">Frontend Developer</h2>
                    </div>
                    
                    <button 
                        className="info-button" 
                        onClick={() => setSeccionActual('proyectos')}
                    >
                        <BsArrowDown className="info-button-icon" />
                        <span>Siguiente</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Info;