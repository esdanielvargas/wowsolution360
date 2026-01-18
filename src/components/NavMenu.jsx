import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" rel="home" className="nav-link" onClick={props.click}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            rel="services"
            className="nav-link"
            onClick={props.click}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            rel="contact"
            className="nav-link"
            onClick={props.click}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            rel="about"
            className="nav-link"
            onClick={props.click}
          >
            About
          </Link>
        </li>
        {props.phone && (
          <li className="nav-item">
            <a
              href="tel:+1 972-679-8245"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              title="Call Us"
            >
              Call Us
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </a>
          </li>
        )}
        {props.app && (
          <li className="nav-item">
            <a
              href="http://admin.wowsolution360.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              title="Go to dashboard"
            >
              Dashboard
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
