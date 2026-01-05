import { Link } from "react-router-dom";

function ServicesItem(props) {
  return (
    <div className="service-row" key={props.id}>
      <div className="service-row-image">
        <img
          src={props.image}
          alt={props.title}
          title={props.title}
          loading="lazy"
          width={480}
          height={270}
        />
      </div>
      <div className="service-row-data">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        {props.path && (
          <Link to="/contact" className="button action-button">
            Hire Service
          </Link>
        )}
      </div>
    </div>
  );
}
export default ServicesItem;
