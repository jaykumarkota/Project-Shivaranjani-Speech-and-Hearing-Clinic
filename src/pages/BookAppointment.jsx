import Seo from "../components/Seo";
import FormSection from "../components/FormSection";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function BookAppointment() {
  const title =
    "Book Speech Therapy, Hearing Test and Implant Appointment in Hyderabad";
  const description =
    "Book an appointment at Shivaranjani Speech & Hearing Clinic in Hyderabad for hearing tests, hearing aids, speech therapy, cochlear implant support, auditory training, and speech-language evaluations.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/services/book"
        keywords={pageKeywords.appointment}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/services/book",
            title,
            description,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book Appointment", path: "/services/book" },
          ]),
        ]}
      />
      <FormSection headingLevel="h1" />
    </>
  );
}

export default BookAppointment;
