import Copyright from "./Copyright";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <Socials />
          <hr />
          <Copyright />
        </div>
    </footer>
  )
}
export default Footer;