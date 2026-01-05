import { Helmet } from "react-helmet";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Carousel from "../common/Carousel";
import ItemBox from "../common/ItemBox";
import ServicesItem from "../common/ServicesItem";
import ServicesItemLoad from "../common/ServicesItemLoad";

function Home() {
  const items = [
    {
      image: "/images/tempered-glass.png",
      title: "Tempered Glass",
      desc: "High impact resistance.",
    },
    {
      image: "/images/laminated-glass.png",
      title: "Laminated Glass",
      desc: "Enhances safety, soundprooft.",
    },
    {
      image: "/images/insulated-glass.png",
      title: "Insulated Glass",
      desc: "Energy efficient, noice reduction.",
    },
    {
      image: "/images/low-e-glass.png",
      title: "Low-E Glass",
      desc: "Reflects thermal radiation.",
    },
  ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    const servicesRef = collection(db, "services");

    getDocs(servicesRef)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setServices(data);
      })

      .catch((error) => {
        console.log("Error al obtener los datos: ", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>WOW SOLUTION 360</title>
      </Helmet>

      <Carousel />

      <section className="section" style={{ display: "none" }}>
        <div className="container">
          <h1 style={{ margin: "40px 0 0" }}>
            We specialize in the design and installation of residential, business, auto glass and windows.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {items.map((item) => (
              <ItemBox
                image={item.image}
                title={item.title}
                desc={item.desc}
                path={item.path}
              />
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
            {services.length === 0 ? (
              <>
                <ServicesItemLoad />
                <ServicesItemLoad />
              </>
            ) : (
              services
                .slice(0, 2)
                .map((service) => (
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
export default Home;
