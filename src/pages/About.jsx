import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>ABOUT - WOW SOLUTION 360</title>
        <link rel="canonical" href={`${window.location.origin}/about`} />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="head-title">
            <h1>About</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            We specialize in the design and installation of residential,
            business, auto glass and windows.
          </p>
          <div className="row">
            <div className="feed">
              <p>
                <b>Our History</b>
                <br />
                <span>
                  Founded in 2010, our company has been serving the Irving,
                  Texas for over {new Date().getFullYear() - 2010} years. We started as a small family business
                  and have grown to become a leader in the glass installation
                  and repair industry.
                </span>
              </p>
              <p>
                <b>Our Mission</b>
                <br /> Our mission is to provide the highest quality glass
                installation and repair services to our customers. We strive to
                deliver exceptional service, from the initial consultation to
                the completion of the project.
              </p>
              <p>
                <b>Our Team</b>
                <br /> Our team consists of highly trained and dedicated
                professionals who take pride in their work. Each member of our
                team is committed to customer satisfaction and strives to exceed
                their expectations on every project.
              </p>
              <p>
                <b>Our Values</b>
                <br /> We believe in honesty, integrity, and hard work. These
                values form the foundation of everything we do and help us
                ensure that every customer receives the best possible service.
              </p>
              <p>
                <b>Our Commitment</b>
                <br /> We are committed to excellence in all aspects of our
                business. From material selection to project completion, we
                strive to ensure that every customer is completely satisfied
                with our work.
              </p>
            </div>
            <div className="brand">
              <img
                src="/images/profile.jpg"
                alt="Photography of profile"
                title="Photography of profile"
                loading="lazy"
                width={480}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
