import { Helmet } from "react-helmet";
import { ServiceCard, ServiceCardLoad } from "../components";
import services from "../data/services.json";

function Services() {
  return (
    <>
      <Helmet>
        <title>SERVICES - WOW SOLUTION 360</title>
        <link rel="canonical" href={`${window.location.origin}/services`} />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="head-title">
            <h1 hidden>Wow Solution 360 Services</h1>
            <span className="title">Services</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="column">
            {services?.length === 0 ? (
              <>
                <ServiceCardLoad />
                <ServiceCardLoad />
                <ServiceCardLoad />
                <ServiceCardLoad />
              </>
            ) : (
              services.map((service) => (
                <ServiceCard key={service?.id} {...service} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
