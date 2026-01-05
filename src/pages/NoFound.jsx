import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NoFound() {
  return (
    <>
      <Helmet>
        <title>ERROR 404 - WOW SOLUTION 360</title>
      </Helmet>
      <section className="section">
        <div className="container">
          <div className="no-found">
            <span className="icon-no-found">404</span>
            <span className="title-no-found">No Found</span>
            <p className="text-no-found">
              The page you are looking for <br /> does not exist or has been
              modified
            </p>
            <Link to="/" className="button action-button">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default NoFound;
