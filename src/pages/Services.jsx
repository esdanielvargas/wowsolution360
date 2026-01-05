import { Helmet } from "react-helmet";
import { db } from "../firebase/config";
import { useServices } from "../firebase/fbQueries";
import ServicesItemLoad from "../common/ServicesItemLoad";
import ServicesItem from "../common/ServicesItem";

function Services() {
  const services = useServices(db);

  return (
    <>
      <Helmet>
        <title>SERVICES - WOW SOLUTION 360</title>
        <link rel="canonical" href={`${window.location.origin}/services`} />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="head-title">
            <h1>Services</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="column">
            {services.length === 0 ? (
              <>
                <ServicesItemLoad />
                <ServicesItemLoad />
                <ServicesItemLoad />
                <ServicesItemLoad />
              </>
            ) : (
              services.map((service) => (
                <ServicesItem
                  key={service.id}
                  title={service.title}
                  image={service.image}
                  desc={service.desc}
                  path={service.path}
                  show_service={service.show_service}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
