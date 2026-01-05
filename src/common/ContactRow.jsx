import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactRow(props) {
  return (
    <div className="contact-row">
      <div className="contact-row-icon">
        <span className="icon">
          <FontAwesomeIcon icon={props.icon} size="lg" />
        </span>
      </div>
      <div className="contact-row-data">
        <span className="title">{props.title}</span>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {props.text}
        </a>
      </div>
    </div>
  );
}
export default ContactRow;
