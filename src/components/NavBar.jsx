import { NavLink } from 'react-router-dom';
export const NavBar = () => {
  // const navigate = useNavigate();

  return(
      <header className="main-header"> 
        <nav className="nav main-nav"> 
          <ul> 
            <li><NavLink to='/home' >Inicio</NavLink></li>
            <li><NavLink to='/todoapp' >TodoApp</NavLink></li>
            <li><NavLink to='/fetchapp' >Fetch</NavLink></li>
          </ul>
        </nav>
      </header>
  );

}