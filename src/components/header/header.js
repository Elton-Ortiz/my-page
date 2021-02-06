import { Link } from 'react-router-dom';
import './header.css'

function Header() {
 
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/quemsou">Quem Sou</Link>
            </li>
            <li>
              <Link to="/conhecimentos">Domínios</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;