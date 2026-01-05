import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import ContactRow from "../common/ContactRow";

function Contact() {
  return (
    <>
      <Helmet>
        <title>CONTACT - WOW SOLUTION 360</title>
        <link rel="canonical" href={`${window.location.origin}/contact`} />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="head-title">
            <h1>Contact</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-content">
            <p>For more information, you can contact us through:</p>
            <ContactRow
              icon={faPhone}
              title="Phone"
              text="+1 972-679-8245"
              link="tel:+19726798245"
            />
            <ContactRow
              icon={faEnvelope}
              title="Email"
              text="wowsolution360@aol.com"
              link="mailto:wowsolution360@aol.com"
            />
            <ContactRow
              icon={faLocationDot}
              title="Address"
              text="10839 Harry Hines Blvd, Dallas, TX 75220, EE. UU."
              // link="https://maps.app.goo.gl/vscTRzJYHrXmieSE7"
              link="https://maps.app.goo.gl/B2nEgAnsTDKuTdF36"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.1213634527714!2d-96.88444525411734!3d32.87621516978255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9d70e7b42fad%3A0xf9fe35def558ff4c!2s10839%20Harry%20Hines%20Blvd%2C%20Dallas%2C%20TX%2075220%2C%20EE.%20UU.!5e0!3m2!1ses!2ssv!4v1756475794133!5m2!1ses!2ssv"
              width="100%"
              height="450"
              style={{ border: 0 }}
              title="Google Maps"
              allowfullscreen=""
              loading="lazy"
              className="iframe"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
