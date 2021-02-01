const { Link } = require("react-router-dom");

function Header() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/quemsou">Quem Sou</Link>
            </li>
            <li>
              <Link to="/conhecimentos">Conhecimentos</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;