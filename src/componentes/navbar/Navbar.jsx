import { FaUser, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ setSeccionActual }) => {
  const menuItems = [
    { name: 'Info', id: 'info', icon: <FaUser /> },
    { name: 'Proyectos', id: 'proyectos', icon: <FaCode /> },
    { name: 'Habilidades', id: 'habilidades', icon: <FaTools /> },
    { name: 'Contacto', id: 'contacto', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="navbar-vertical">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item-container">
            <button 
              className="nav-button" 
              onClick={() => setSeccionActual(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;