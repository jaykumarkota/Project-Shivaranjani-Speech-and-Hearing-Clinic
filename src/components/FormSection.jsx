import AppointmentForm from './AppointmentForm';
import '../styles/components/FormSection.css'

function FormSection() {

  return (
    <section className="form-section container section">
      <div className="form-left">
        <h2 className="form-title">
          Get a quick consultation by filling the form
        </h2>
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