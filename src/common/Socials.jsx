import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Socials() {
  return (
    <div className="footer-socials">
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.instagram.com/wowsolution360"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.facebook.com/wowsolution360"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.twitter.com/wowsolution360"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.tiktok.com/@wowsolution360"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Socials;
