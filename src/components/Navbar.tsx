import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useNOAAData } from '../hooks/useNOAAData';

const Navbar = () => {
  const { regions } = useNOAAData();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          {regions ? Object.values(regions).sort((a, b) => a.region.localeCompare(b.region)).map((region) => (
            <NavLink to={`/region/${region.slug}`} key={region.slug} className="navbar-link">
              {region.region}
            </NavLink>
          )) : <></>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 