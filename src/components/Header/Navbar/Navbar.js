import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="active">
          <a>Home</a>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>Demos</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
      </ul>
    </nav>
  );
};
