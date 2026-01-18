import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { materials, services } from "../data";
import {
  Carousel,
  MaterialCard,
  ServiceCard,
  ServiceCardLoad,
} from "../components";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>WOW SOLUTION 360</title>
      </Helmet>

      <Carousel />

      <section className="section" style={{ display: "none" }}>
        <div className="container">
          <h1 style={{ margin: "40px 0 0" }}>
            We specialize in Design & Install of Auto, Home & Business Glass
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {materials.map((material) => (
              <MaterialCard key={material?.id} {...material} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-caption">
            <h2>Services</h2>
            <span className="line"></span>
            <p>Services Transforming Spaces With Glass.</p>
          </div>
          <div className="column">
            {services?.length === 0 ? (
              <>
                <ServiceCardLoad />
                <ServiceCardLoad />
              </>
            ) : (
              services
                .slice(0, 2)
                .map((service) => (
                  <ServiceCard key={service?.id} {...service} />
                ))
            )}
          </div>
          <div className="row-action">
            <Link
              to="/services"
              rel="services"
              className="button primary-button"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
