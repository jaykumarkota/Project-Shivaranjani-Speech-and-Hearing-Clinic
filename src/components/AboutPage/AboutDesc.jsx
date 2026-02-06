import "../../styles/components/AboutPage/AboutDesc.css";

function AboutDesc() {
  return (
    <section className="about-section container section" aria-labelledby="clinic-about">
      <h2 className="about-title">ABOUT THE CLINIC</h2>
      <div className="about-grid">
        <div className="about-grid-left">
          <p className="about-desc">
            Shavaranjani Clinic is a newly established healthcare center committed to providing reliable and compassionate medical care.
            The clinic focuses on patient comfort, safety, and ethical medical practices.
            Every consultation is handled with personal attention and clear communication.
            <br />
            <br />
            The clinic follows evidence-based treatment methods to ensure accurate diagnosis.
            A clean, calm, and hygienic environment is maintained for all patients.
            Our goal is to build long-term trust through honest and responsible healthcare.
          </p>

          <div className="our-vision">
            <h3 className="our-vision-title">Our Vision</h3>
            <p className="our-vision-desc">
              Our vision at Shivaranjani Clinic is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
        <div className="about-grid-right">
          <img
            src="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg"
            alt="Dr Shivaranjani Clinic"
            className="about-grid-right-img"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutDesc;
