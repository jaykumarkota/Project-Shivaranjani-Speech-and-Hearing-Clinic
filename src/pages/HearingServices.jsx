import "../styles/pages/HearingServices.css";
import React from "react";
import { Link } from "react-router-dom";

export const hearingServiceContents = [
  {
    title: "Audiological Testing",
    description:
      "Audiological testing is the foundation of hearing health — it measures how well you hear different sounds, tones, and speech. The process involves multiple calibrated tests that identify the type and degree of hearing loss, ensuring accurate diagnosis and suitable recommendations.",
    extra:
      "Tests are performed in a controlled sound environment using advanced audiometers. Based on the results, the audiologist may recommend medical evaluation, hearing aid fitting, or rehabilitative therapy. Early testing helps prevent further complications and supports effective hearing care.",
    metaDescription:
      "Audiological testing in Hyderabad to accurately assess hearing levels and detect hearing loss early using advanced equipment.",
    keywords:
      "audiological testing, hearing test, audiometry, hearing evaluation, Hyderabad audiologist",
  },
  {
    title: "Pure Tone Audiometry (PTA)",
    description:
      "Pure Tone Audiometry (PTA) is the standard hearing test that measures the faintest tones a person can hear across various frequencies. It helps determine the degree and type of hearing loss by testing each ear separately using headphones or bone conductors.",
    extra:
      "The audiologist plots results on an audiogram, showing thresholds across frequencies. PTA is essential for diagnosing conductive, sensorineural, or mixed hearing loss and guides the next steps in treatment or rehabilitation.",
    metaDescription:
      "Pure Tone Audiometry (PTA) test in Hyderabad to measure hearing thresholds and identify hearing loss accurately.",
    keywords:
      "pure tone audiometry, PTA test, hearing threshold test, hearing loss detection, Hyderabad clinic",
  },
  {
    title: "Impedance Audiometry & Acoustic Reflex Test",
    description:
      "Impedance audiometry evaluates middle ear function by measuring eardrum movement and pressure changes. The acoustic reflex test checks how the ear muscles respond to loud sounds, helping diagnose middle ear and neural pathway disorders.",
    extra:
      "These painless tests are crucial in identifying ear infections, fluid in the middle ear, eustachian tube issues, and neural pathologies. The results provide valuable insights before medical or surgical intervention.",
    metaDescription:
      "Impedance audiometry and acoustic reflex testing in Hyderabad to assess middle ear function and detect ear-related conditions.",
    keywords:
      "impedance audiometry, acoustic reflex test, tympanometry, middle ear test, Hyderabad audiology",
  },
  {
    title: "Tinnitus Assessment & Retraining Therapy (TRT)",
    description:
      "Tinnitus Assessment and Retraining Therapy (TRT) helps individuals experiencing ringing or buzzing sounds in their ears. The assessment identifies potential causes, hearing involvement, and the psychological impact of tinnitus.",
    extra:
      "TRT combines counselling, sound therapy, and relaxation techniques to help the brain habituate to tinnitus sounds and reduce distress. Each plan is personalised and closely monitored by the audiologist.",
    metaDescription:
      "Tinnitus assessment and retraining therapy in Hyderabad for managing ear ringing and improving sound tolerance.",
    keywords:
      "tinnitus therapy, tinnitus retraining, tinnitus assessment, ringing in ears, Hyderabad clinic",
  },
  {
    title: "Speech Audiometry",
    description:
      "Speech audiometry tests how well a person can recognize and understand speech at different volumes and clarity levels. It complements pure tone testing to assess real-world communication abilities.",
    extra:
      "The audiologist presents words and sentences at varying intensities, measuring speech recognition threshold (SRT) and word discrimination scores. Results help in selecting suitable hearing aids and rehabilitation strategies.",
    metaDescription:
      "Speech audiometry in Hyderabad to evaluate speech understanding ability and aid selection of hearing devices.",
    keywords:
      "speech audiometry, SRT test, word recognition, speech understanding test, Hyderabad audiology",
  },
  {
    title: "Otoacoustic Emissions (OAE)",
    description:
      "Otoacoustic Emissions (OAE) testing evaluates the function of the outer hair cells in the cochlea by detecting echo-like sounds they produce. It is commonly used in newborn hearing screening and for people unable to respond to traditional tests.",
    extra:
      "This quick, non-invasive test provides valuable insight into cochlear health and helps identify early signs of hearing impairment. It’s essential for infant and special population screenings.",
    metaDescription:
      "OAE test in Hyderabad for newborn and adult hearing screening to assess cochlear (inner ear) function.",
    keywords:
      "OAE test, otoacoustic emissions, newborn hearing test, cochlear function test, Hyderabad clinic",
  },
  {
    title: "Special Tests (SISI / TDT / ABLB)",
    description:
      "Special hearing tests such as SISI (Short Increment Sensitivity Index), TDT (Tone Decay Test), and ABLB (Alternate Binaural Loudness Balance) help differentiate between cochlear and retrocochlear pathologies.",
    extra:
      "These advanced tests assess auditory nerve performance and help in diagnosing complex hearing conditions such as neural lesions or auditory fatigue. They are often performed when standard audiometry results are inconclusive.",
    metaDescription:
      "Specialized hearing tests SISI, TDT, and ABLB in Hyderabad to detect cochlear and nerve-related hearing disorders.",
    keywords:
      "SISI test, TDT test, ABLB test, cochlear test, auditory nerve function, Hyderabad audiology",
  },
  {
    title: "Aided Audiometry / VROA / BOA",
    description:
      "Aided audiometry evaluates hearing with amplification devices like hearing aids or implants, while VROA (Visual Reinforcement Orientation Audiometry) and BOA (Behavioral Observation Audiometry) are behavioral tests for infants and young children.",
    extra:
      "These tests determine hearing aid benefit, set device gain targets, and confirm developmental progress in children. They are gentle, engaging, and designed for pediatric hearing evaluation.",
    metaDescription:
      "Aided audiometry, VROA, and BOA tests in Hyderabad to assess aided hearing response in children and adults.",
    keywords:
      "aided audiometry, VROA, BOA, pediatric hearing test, hearing aid evaluation, Hyderabad audiology",
  },
  {
    title: "Eustachian Tube Function Test",
    description:
      "The Eustachian Tube Function Test checks how well the tube connecting the middle ear and throat equalizes pressure. Dysfunction can cause ear fullness, pain, or hearing fluctuation.",
    extra:
      "This test uses pressure variations to observe tube response and helps diagnose blockages, allergies, or sinus-related problems affecting ear pressure regulation.",
    metaDescription:
      "Eustachian tube function testing in Hyderabad to evaluate pressure equalization and middle ear health.",
    keywords:
      "eustachian tube test, middle ear pressure, ear blockage, ear popping, Hyderabad clinic",
  },
  {
    title: "BERA / ABR (Brainstem Evoked Response Audiometry)",
    description:
      "BERA or ABR testing evaluates the auditory nerve’s response to sound signals sent to the brainstem. It is an objective and accurate test used for infants, unconscious patients, or those with neurological concerns.",
    extra:
      "Small electrodes record electrical responses, revealing how sound travels through the ear and nerve pathways. It is critical for diagnosing neural hearing loss, auditory neuropathy, and confirming hearing thresholds.",
    metaDescription:
      "BERA/ABR test in Hyderabad for evaluating auditory nerve and brainstem responses to sound stimuli.",
    keywords:
      "BERA test, ABR test, auditory brainstem response, hearing nerve test, Hyderabad audiology",
  },
  {
    title: "CAPD (Central Auditory Processing Disorder Assessment)",
    description:
      "CAPD testing measures how the brain processes auditory information when hearing is normal but understanding is difficult, especially in noisy settings or with complex speech.",
    extra:
      "It includes dichotic listening, temporal processing, and speech-in-noise tasks. Results help in planning auditory training programs and classroom accommodations for children and adults with listening difficulties.",
    metaDescription:
      "CAPD assessment in Hyderabad to identify auditory processing difficulties and improve listening skills.",
    keywords:
      "CAPD test, auditory processing, listening difficulty, speech-in-noise test, Hyderabad clinic",
  },
  {
    title: "VEMP (Vestibular Evoked Myogenic Potentials)",
    description:
      "VEMP testing evaluates the function of the saccule and vestibular (balance) system through muscle responses to sound stimulation. It helps detect vestibular nerve or inner ear balance disorders.",
    extra:
      "Electrodes measure reflexes from neck or eye muscles in response to sound, providing insights into balance pathway integrity. It complements other vestibular evaluations like caloric or rotary chair tests.",
    metaDescription:
      "VEMP test in Hyderabad to assess balance-related inner ear function and detect vestibular nerve disorders.",
    keywords:
      "VEMP test, vestibular assessment, balance test, saccule function, Hyderabad clinic",
  },
  {
    title: "EcochG (Electrocochleography)",
    description:
      "Electrocochleography (EcochG) records electrical potentials from the inner ear and auditory nerve in response to sound. It helps diagnose Meniere’s disease, cochlear hydrops, and auditory neuropathy.",
    extra:
      "Using an electrode near the eardrum or inside the ear canal, this test measures cochlear and neural responses to sound. It provides detailed diagnostic data for inner ear fluid disorders and neural timing issues.",
    metaDescription:
      "Electrocochleography (EcochG) in Hyderabad for diagnosing Meniere’s disease and inner ear electrical response disorders.",
    keywords:
      "EcochG test, electrocochleography, Meniere’s diagnosis, cochlear hydrops, Hyderabad audiology",
  },
  {
    title: "Hearing Aid Services",
    description:
      "Hearing aid services at Shivaranjani Clinic include selection, trial, fitting, and follow-up for digital, rechargeable, and Bluetooth-enabled devices. Our audiologists ensure the right technology matches each person’s hearing loss, lifestyle, and budget.",
    extra:
      "Every fitting session includes real-ear measurements, user counselling, and device programming for comfort and clarity. We provide ongoing support for maintenance, battery replacement, and troubleshooting to ensure optimal performance.",
    metaDescription:
      "Hearing aid fitting and trial services in Hyderabad with advanced digital and Bluetooth hearing aids tailored to your needs.",
    keywords:
      "hearing aid services, hearing aid fitting, digital hearing aids, Bluetooth hearing aids, Hyderabad clinic",
  },
  {
    title: "Hearing Aid Trial & Fitting",
    description:
      "The hearing aid trial and fitting process allows clients to experience how modern devices improve sound clarity and comfort. Audiologists fine-tune the settings based on individual audiograms and real-ear measurements.",
    extra:
      "We provide multiple model trials, counselling on use and maintenance, and fine adjustments to achieve the best listening experience. Clients are guided through care instructions and follow-up appointments for smooth adaptation.",
    metaDescription:
      "Hearing aid trial and fitting in Hyderabad to ensure personalized comfort and improved sound quality for every user.",
    keywords:
      "hearing aid trial, hearing aid fitting, hearing aid adjustment, ear device fitting, Hyderabad audiologist",
  },
  {
    title: "Bluetooth & Rechargeable Hearing Aids",
    description:
      "Our Bluetooth and rechargeable hearing aids combine cutting-edge technology with convenience — enabling wireless streaming from smartphones and TVs, and eliminating the need for frequent battery changes.",
    extra:
      "We offer a range of models from top manufacturers with features like noise reduction, directional microphones, and AI-based sound processing. Each device is programmed and verified for optimal hearing performance and lifestyle comfort.",
    metaDescription:
      "Bluetooth and rechargeable hearing aids in Hyderabad offering smart connectivity, comfort, and superior sound quality.",
    keywords:
      "Bluetooth hearing aids, rechargeable hearing aids, smart hearing aids, digital hearing aids, Hyderabad clinic",
  },
];


function HearingServices() {
  return (
    <section
      className="hearing-services container"
      aria-labelledby="hearing-services-heading"
      role="region"
    >
      <h2 className="hearing-services-title">Our Hearing Services</h2>
      <p
        className="hearing-services-subtitle"
        aria-label="Introduction to hearing and hearing services"
      >
        Explore our specialized therapies and programs designed to enhance
        speech, hearing, and communication at Shivaranjani Speech & Hearing
        Clinic.
      </p>
      <div className="services-grid" role="list">
        {hearingServiceContents.map((service, index) => {
          return (
            <React.Fragment key={service.title}>
              <h3 className="service-title-small">{service.title}</h3>
              <div
                className={`service-card img-cont-${index + 1}`}
                role="img"
                aria-label={`${service.title} illustration`}
              >
                <img
                  src="https://bridgesspeechcenter.ae/wp-content/uploads/2023/10/speech-therapy-2048x1367.jpg"
                  alt={`${service.title} - visual representation`}
                  className="service-image"
                />
              </div>
              <div
                className={`service-content service-cont-${index + 1}`}
                aria-describedby={`service-desc-${index}`}
              >
                <h3 className="service-title-large">{service.title}</h3>
                <div className="service-description">
                  <p className="service-desc1">{service.description}</p>
                  <p className="service-desc2">{service.extra}</p>
                  <Link
                    className="service-book-btn btn"
                    to="/services/book"
                    aria-label={`Book appointment for ${service.title}`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default HearingServices;
