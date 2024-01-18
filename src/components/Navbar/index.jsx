import { NavLink, Outlet} from 'react-router-dom';
import './nav.css';
let activeStyle = {
  textDecoration: 'underline',
};

function Navbar() {
  return (
    <>
      <nav>
        <h1>Connor Hayes</h1>
        <ul className="nav-links">
          <div className='nav-list'>
            <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Projects</NavLink>
            <NavLink to='/About' style={({ isActive }) => (isActive ? activeStyle : undefined)}>About Me</NavLink>
            <NavLink to='/Education' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Education</NavLink>
            <NavLink to='/Skills' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Skills</NavLink>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
