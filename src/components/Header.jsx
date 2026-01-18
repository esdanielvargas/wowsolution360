import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ActionButtons from "./ActionButtons";

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex">
          <NavMenu />
          <ActionButtons menu={props.menu} handleMenu={props.handleMenu} />
        </div>
      </div>
    </header>
  );
}
