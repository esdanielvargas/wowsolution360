import { Link } from "react-router-dom";

export default function ServiceCard({ image, title, caption, path }) {
  return (
    <div className="service-row">
      <div className="service-row-image">
        <img
          src={image}
          alt={title}
          title={title}
          loading="eager"
          width={480}
          height={270}
        />
      </div>
      <div className="service-row-data">
        <h2>{title}</h2>
        <p>{caption}</p>
        {path && (
          <Link to="/contact" className="button action-button">
            Hire Service
          </Link>
        )}
      </div>
    </div>
  );
}
