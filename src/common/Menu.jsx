import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  return (
    <div className={!props.menu ? "menu" : "menu show"}>
      {props.menu && (
        <>
          <div className="menu-header">
            <button
              type="button"
              title="Menu"
              className="button icon-button"
              onClick={props.handleMenu}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="menu-content">
            <NavMenu click={props.handleMenu} phone={true} app={false} />
          </div>
        </>
      )}
    </div>
  );
}
export default Menu;
