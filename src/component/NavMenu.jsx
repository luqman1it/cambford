import { NavLink } from "react-router-dom";

export default function NavMenu({ navLinks, onLinkClick }) {
  return (
    <nav className="site-nav" role="navigation" aria-label="Main navigation">
      <ul className="site-nav-mobile-link">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `site-nav__link${isActive ? " active" : ""}`
              }
              onClick={onLinkClick}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
