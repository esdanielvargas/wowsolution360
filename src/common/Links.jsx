import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="footer-links">
      <ul className="">
        <li className="">
          <b>Explore</b>
        </li>
        <li className="">
          <Link to="">Home</Link>
        </li>
        <li className="">
          <Link to=""></Link>
        </li>
        <li className="">
          <Link to=""></Link>
        </li>
        <li className="">
          <Link to=""></Link>
        </li>
      </ul>
      <ul>
        <li>
          <b>Socials</b>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li>
          <b>Policies</b>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
export default Links;
