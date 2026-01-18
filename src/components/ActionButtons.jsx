import { faBars, faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionButtons(props) {
  return (
    <>
      <a
        href="tel:+1 972-679-8245"
        target="_blank"
        rel="noopener noreferrer"
        id="btnAction"
        title="Call Us"
        className="button action-button"
      >
        <FontAwesomeIcon icon={faPhone} />
        Call US
      </a>
      <button
        type="button"
        title="Menu"
        className="button icon-button"
        id="btnMenu"
        onClick={props.handleMenu}
      >
        <FontAwesomeIcon icon={!props.menu ? faBars : faClose} />
      </button>
    </>
  );
}
