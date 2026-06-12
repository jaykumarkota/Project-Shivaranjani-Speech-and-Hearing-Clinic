import AppointmentForm from './AppointmentForm';
import '../styles/components/FormSection.css'

function FormSection({ headingLevel = "h2" }) {
  const HeadingTag = headingLevel;

  return (
    <section className="form-section container section">
      <div className="form-left">
        <HeadingTag className="form-title">
          Get a quick consultation by filling the form
        </HeadingTag>
        <p className="form-desc">At Shivaranjani Speech and Hearing Clinic, we support individuals facing speech and hearing challenges with dedicated care and personalized therapy. Over the years, we have helped many people improve their communication and continue to work towards making a positive difference in their lives.</p>
      </div>
      <div className="form-right">
        <span className="form-cont">
          <AppointmentForm />
        </span>
      </div>
    </section>
  )
}
export default FormSection;
