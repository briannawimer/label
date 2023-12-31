import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/tutorial" className="link">Interactive Tutorial</Link>
      </li>
      <li>
        <Link to="/int-usability" className="link">Interactive Usability</Link>
      </li>
      <li>
        <Link to="/stat-usability" className="link">Static Usability</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;