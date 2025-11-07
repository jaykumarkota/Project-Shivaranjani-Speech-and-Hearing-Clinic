import "../styles/pages/SpeechServices.css";
import React from "react";
import { Link } from "react-router-dom";

// const services = [
//   //   {
//   //     title: "Speech Services",
//   //     description:
//   //       "We provide expert care for speech, language, and communication improvement. Personalized programs enhance clarity, confidence, and overall communication skills.",
//   //     // image: speechTherapy,
//   //   },
//   //   {
//   //     title: "Speech Evaluation",
//   //     description:
//   //       "A complete assessment to identify speech and language problems in children or adults. It helps plan the right therapy for better communication.",
//   //     // image: speechEval,
//   //   },
//   //   {
//   //     title: "Auditory Verbal Therapy (CI / ABT)",
//   //     description:
//   //       "Specialized therapy for individuals with Cochlear Implants or Hearing Aids. It helps develop listening and speaking skills using natural hearing techniques.",
//   //     // image: auditory,
//   //   },
//   //   {
//   //     title: "ABA & CBT",
//   //     description:
//   //       "Applied Behavior Analysis (ABA) and Cognitive Behavioral Therapy (CBT) help improve learning, behavior, and emotional well-being, especially for children with autism.",
//   //     // image: aba,
//   //   },
//   //   // {
//   //   //   title: "Speech Therapy",
//   //   //   description:
//   //   //     "Helps individuals improve pronunciation, fluency, and voice clarity through structured sessions that strengthen speech muscles and confidence.",
//   //   //   // image: speechTherapy,
//   //   // },
//   //   // {
//   //   //   title: "Behavioural Therapy",
//   //   //   description:
//   //   //     "Therapy that helps manage emotions and develop positive behaviors. Supports children and adults in improving focus, relationships, and daily functioning.",
//   //   //   // image: behavioural,
//   //   // },
//   //   // {
//   //   //   title: "Occupational Therapy",
//   //   //   description:
//   //   //     "Focuses on improving motor skills, coordination, and sensory development to help individuals perform daily activities independently.",
//   //   //   // image: occupational,
//   //   // },
//   //   // {
//   //   //   title: "Swallowing Therapy",
//   //   //   description:
//   //   //     "Designed for individuals who face difficulty swallowing. It strengthens throat and mouth muscles for safer and more comfortable eating.",
//   //   //   // image: swallowing,
//   //   // },
//   //   // {
//   //   //   title: "Stuttering Therapy",
//   //   //   description:
//   //   //     "Helps people who stutter speak smoothly and confidently through fluency techniques, breathing control, and relaxation exercises.",
//   //   //   // image: stuttering,
//   //   // },
//   //   // {
//   //   //   title: "Voice Therapy",
//   //   //   description:
//   //   //     "Improves vocal strength, tone, and clarity for individuals with voice strain or hoarseness, ensuring healthy and effective voice use.",
//   //   //   // image: voice,
//   //   // },
//   //   // {
//   //   //   title: "Special Education",
//   //   //   description:
//   //   //     "Personalized learning support for children with learning or developmental challenges, focusing on academic and social skill development.",
//   //   //   // image: specialEdu,
//   //   // },
//   //   // {
//   //   //   title: "Pre-Employment Assessment",
//   //   //   description:
//   //   //     "Evaluates communication and behavioral skills to help individuals prepare confidently for workplace environments.",
//   //   //   // image: preEmployment,
//   //   // },
//   //   // {
//   //   //   title: "Pre & Post Implant Counselling",
//   //   //   description:
//   //   //     "Provides emotional and educational support before and after cochlear implant surgery for smooth adjustment and family understanding.",
//   //   //   // image: counselling,
//   //   // },
//   //   // {
//   //   //   title: "Post-Stroke Management & Counselling",
//   //   //   description:
//   //   //     "Supports recovery after a stroke through speech, swallowing, and behavioral therapy to regain confidence and independence.",
//   //   //   // image: postStroke,
//   //   // },
// ];
// export const services = [
//   {
//     title: "Speech Evaluation",
//     description:
//       "A complete assessment to identify speech, language, and communication difficulties in children and adults. It helps design the right therapy plan for clear and confident communication.",
//     extra: "Available at Shivaranjani Speech & Hearing Clinic in Hyderabad.",
//   },
//   {
//     title: "Auditory Verbal Therapy (CI / ABT)",
//     description:
//       "Specialized therapy for individuals with Cochlear Implants or Hearing Aids. It focuses on improving listening and spoken language skills through natural hearing and speech techniques.",
//     extra:
//       "Helps children and adults develop speech without relying on lip reading.",
//   },
//   {
//     title: "ABA & CBT",
//     description:
//       "Applied Behavior Analysis (ABA) and Cognitive Behavioral Therapy (CBT) help manage behavioral and emotional challenges. These therapies are especially useful for children with autism or ADHD.",
//     extra: "We focus on positive behavior development and emotional growth.",
//   },
//   // {
//   //   title: "Speech Therapy",
//   //   description:
//   //     "Our speech therapy helps improve pronunciation, fluency, and voice clarity. Through structured sessions, we strengthen speech muscles and build confidence in everyday communication.",
//   //   extra: "Ideal for speech delays, articulation issues, and voice problems."
//   // },
//   // {
//   //   title: "Behavioural Therapy",
//   //   description:
//   //     "Behavioural therapy helps individuals manage emotions and develop positive behavior patterns. It supports both children and adults in improving focus, confidence, and relationships.",
//   //   extra: "We provide a calm, supportive environment for better results."
//   // },
//   // {
//   //   title: "Occupational Therapy",
//   //   description:
//   //     "Occupational therapy focuses on improving daily living and motor skills for independence. It benefits children with developmental delays and adults recovering from injury or illness.",
//   //   extra: "Enhances coordination, balance, and sensory development."
//   // },
//   // {
//   //   title: "Swallowing Therapy",
//   //   description:
//   //     "Helps people with swallowing difficulties (Dysphagia) eat and drink safely. The therapy strengthens throat and mouth muscles for smoother, more comfortable swallowing.",
//   //   extra: "Highly recommended for post-stroke or neurological patients."
//   // },
//   // {
//   //   title: "Stuttering Therapy",
//   //   description:
//   //     "Aims to improve speech fluency and reduce stammering. It uses breathing, rhythm, and relaxation techniques to build natural, confident speech.",
//   //   extra: "Effective for both children and adults with stuttering issues."
//   // },
//   // {
//   //   title: "Voice Therapy",
//   //   description:
//   //     "Voice therapy strengthens and restores vocal quality for people with voice strain, hoarseness, or vocal fatigue.",
//   //   extra: "Our experts help you achieve a clear, strong, and healthy voice."
//   // },
//   // {
//   //   title: "Special Education",
//   //   description:
//   //     "Personalized education programs for children with learning or developmental challenges. It helps improve academic, social, and communication skills through tailored teaching methods.",
//   //   extra: "Every child learns differently — we help them learn their way."
//   // },
//   // {
//   //   title: "Pre-Employment Assessment",
//   //   description:
//   //     "Evaluates communication, behavior, and cognitive skills to prepare individuals for job placements.",
//   //   extra: "We help build confidence and readiness for workplace success."
//   // },
//   // {
//   //   title: "Pre & Post Implant Counselling",
//   //   description:
//   //     "Provides emotional support and practical guidance before and after cochlear implant surgery.",
//   //   extra:
//   //     "We help families understand the process and adapt smoothly to new hearing experiences."
//   // },
//   // {
//   //   title: "Post-Stroke Management & Counselling",
//   //   description:
//   //     "Supports recovery after a stroke through speech, swallowing, and behavioral therapy.",
//   //   extra:
//   //     "Our compassionate approach helps patients regain independence and confidence."
//   // }
// ];
export const speechServiceContents = [
  // {
  //   title: "Speech Services",
  //   description:
  //     "At Shivaranjani Speech & Hearing Clinic we offer a full range of speech and hearing services for children and adults, delivered by licensed speech-language pathologists and allied therapists. Care begins with a focused intake and screening, followed by standardised assessments when needed, so we can build a therapy plan based on measurable goals.",
  //   extra:
  //     "Treatment is goal-directed and may include direct therapy, family training, home practice programmes and periodic progress reviews. Most plans are collaborative — we work with families, teachers, audiologists and medical teams to support real-life communication in school, work and home settings. Our approach emphasises functional outcomes: clearer speech, stronger language skills, and improved confidence.",
  //   metaDescription:
  //     "Comprehensive speech and hearing services in Hyderabad for children and adults, including evaluations, therapy, and personalised communication programs.",
  //   keywords:
  //     "speech services, hearing services, speech therapy, language assessment, Hyderabad clinic, communication improvement",
  // },
  {
    title: "Speech Evaluation",
    description:
      "A speech evaluation is the first clinical step — a structured process that identifies exactly which areas (articulation, language comprehension, expression, voice, fluency or swallowing) need support. The evaluation usually combines a clinical interview, observation, standardized tests, hearing checks (when needed), and functional tasks so the clinician sees how the person communicates in everyday situations.",
    extra:
      "After scoring and analysis the therapist explains findings in plain language, recommends a tailored treatment plan, and sets short- and long-term goals with measurable outcomes. Families receive a written report, therapy frequency recommendations, and simple home exercises to start immediately. This diagnostic process guides everything that follows and helps track progress over time.",
    metaDescription:
      "Professional speech evaluation in Hyderabad to identify communication difficulties and design tailored therapy plans for children and adults.",
    keywords:
      "speech evaluation, language assessment, speech screening, Hyderabad clinic, communication diagnosis",
  },
  {
    title: "Auditory Verbal Therapy (CI / ABT)",
    description:
      "Auditory-Verbal Therapy (AVT/ABT) is a family-focused habilitation approach for children and adults using cochlear implants or hearing aids; the emphasis is on listening and spoken language rather than visual cues. Treatment begins with detailed hearing and communication assessments, device orientation and mapping (audiology), then moves into weekly AVT sessions where therapists coach caregivers to create everyday listening opportunities and teach strategies to maximise spoken-language learning.",
    extra:
      "Early start and consistent family involvement are important for best outcomes; therapy targets sound awareness, speech sounds, vocabulary, sentence building and spontaneous conversation. Progress is measured by language milestones and functional listening abilities, and goals are adjusted at regular audiology and therapy follow-ups.",
    metaDescription:
      "Auditory Verbal Therapy (AVT) for cochlear implant and hearing aid users in Hyderabad, focusing on improving listening and spoken language skills.",
    keywords:
      "auditory verbal therapy, AVT, cochlear implant therapy, hearing aid therapy, language development",
  },
  {
    title: "ABA & CBT",
    description:
      "Applied Behavior Analysis (ABA) and Cognitive Behavioural Therapy (CBT) are evidence-based practices that address behavior, learning and emotional health from complementary angles. ABA is highly structured and data-driven: clinicians conduct a behavioural assessment, set very specific skill and behaviour goals, use repeated teaching and positive reinforcement, and continuously measure outcomes to shape learning (common in autism support).",
    extra:
      "CBT is a short-term talking therapy used to identify and change unhelpful thoughts and behaviour patterns; it’s especially effective for anxiety, low mood and behaviour that interferes with learning or social participation. In our centre, ABA focuses on skill acquisition and behaviour support plans while CBT helps older children and adults develop coping skills, emotional regulation, and problem solving — both delivered by trained specialists and coordinated with families and schools.",
    metaDescription:
      "ABA and CBT therapy services in Hyderabad for children and adults, focusing on behavioural management, emotional regulation, and skill development.",
    keywords:
      "ABA therapy, CBT therapy, behaviour therapy, emotional regulation, autism support, Hyderabad clinic",
  },
  {
    title: "Speech Therapy",
    description:
      "Speech therapy addresses how a person forms sounds, organizes language, and uses their voice to communicate clearly. After evaluation the therapist uses targeted drills, motor-planning exercises, phonological therapy, and functional conversation practice to teach correct sound production and improve intelligibility.",
    extra:
      "Therapy sessions include repetition, graded difficulty, feedback, and carry-over activities to practise skills in real life (homework and caregiver coaching are essential). Progress is tracked with measurement tools and periodic re-assessment so plans can be tightened or broadened (for example, adding social communication goals or AAC when needed). Sessions can be clinic-based, school-based or delivered by telepractice depending on client needs and convenience.",
    metaDescription:
      "Expert speech therapy in Hyderabad to improve pronunciation, fluency, and communication clarity for children and adults.",
    keywords:
      "speech therapy, pronunciation improvement, fluency therapy, Hyderabad clinic, language therapy",
  },
  {
    title: "Behavioural Therapy",
    description:
      "Behavioural therapy at the clinic focuses on teaching practical coping skills and positive behaviour strategies that improve daily functioning and relationships. We begin with a behaviour assessment to identify triggers, functions of behaviour, and skill gaps, then co-create a behaviour support plan with caregivers and teachers that uses clear routines, reinforcement, and graded coaching.",
    extra:
      "Therapy teaches alternative skills (communication, self-calming, problem solving) and reduces harmful or disruptive behaviours using consistent, humane techniques. Regular data collection and team meetings ensure the plan is updated as the child or adult learns new skills and generalizes them across settings. The overall goal is safer, calmer daily life and stronger social participation.",
    metaDescription:
      "Professional behavioural therapy services in Hyderabad for children and adults to manage emotions, improve focus, and develop positive behaviors.",
    keywords:
      "behavioural therapy, behaviour management, emotional regulation, Hyderabad clinic, coping skills",
  },
  {
    title: "Occupational Therapy",
    description:
      "Occupational therapy (OT) helps people do the meaningful daily activities they care about — eating, dressing, schoolwork, play, or work tasks — by improving fine motor skills, coordination, sensory processing and adaptive strategies. A typical OT plan starts with a functional assessment (observation and standardised tests), followed by graded activities, therapeutic exercises, adaptive equipment trials and environmental modifications.",
    extra:
      "For children OT often includes play-based tasks, handwriting practice and sensory-integration strategies; for adults OT focuses on workplace tasks, energy conservation, and home adaptions after injury or illness. Therapy is goal-driven, practical and highly individualised, with clear outcome measures to show functional gains.",
    metaDescription:
      "Occupational therapy in Hyderabad for children and adults to improve motor skills, daily living independence, and functional abilities.",
    keywords:
      "occupational therapy, OT services, daily living skills, motor skill development, Hyderabad clinic",
  },
  {
    title: "Swallowing Therapy",
    description:
      "Swallowing therapy (dysphagia management) begins with a careful screening to identify risk signs (coughing, wet voice, difficulty with certain textures), followed by a comprehensive assessment that may include bedside exams, instrumental studies (if indicated), and nutritional review.",
    extra:
      "Treatment commonly includes swallowing exercises to strengthen oral and pharyngeal muscles, compensatory strategies (posture changes, bolus size/texture modification), safe feeding techniques, and caregiver training to reduce aspiration risk and maintain nutrition. Therapy is closely coordinated with medical, nutrition and nursing teams; plans are monitored and adjusted to balance swallowing safety with quality of life.",
    metaDescription:
      "Swallowing therapy (dysphagia management) in Hyderabad for safe eating and drinking, improving oral and pharyngeal muscle function.",
    keywords:
      "swallowing therapy, dysphagia treatment, swallowing exercises, Hyderabad clinic, safe eating therapy",
  },
  {
    title: "Stuttering Therapy",
    description:
      "Stuttering therapy helps people reduce disfluent moments and speak more confidently using evidence-based fluency techniques and anxiety management. The therapy path usually includes a detailed fluency assessment, target setting (reducing tension, increasing fluency, expanding communication), and practice of breathing, pacing, gentle onsets and desensitisation to feared speaking situations.",
    extra:
      "For children the approach often combines parent coaching and early intervention strategies; for adolescents and adults therapy adds cognitive work (addressing avoidance and negative self-beliefs) and practical strategies for real-world speaking (public speaking, phone calls). Progress is measured by fluency rates, reduced struggle, and improved participation in everyday conversations.",
    metaDescription:
      "Stuttering therapy in Hyderabad for children and adults to improve fluency, confidence, and communication skills.",
    keywords:
      "stuttering therapy, fluency therapy, speech improvement, Hyderabad clinic, communication skills",
  },
  {
    title: "Voice Therapy",
    description:
      "Voice therapy treats hoarseness, vocal strain, or weakness by teaching healthy voice use and directly retraining the voice muscles and breathing patterns. After a voice evaluation (often with ENT collaboration and sometimes laryngoscopy when required), the SLP prescribes tailored voice exercises (vocal hygiene, resonance and breath support, vocal function exercises) and behavioural changes to reduce misuse (e.g., throat clearing, shouting).",
    extra:
      "Therapy can speed recovery after vocal fold injury or be part of pre/post-surgical rehabilitation; typical programmes include weekly sessions plus home practice, and outcomes are monitored through acoustic measures and patient-reported voice quality.",
    metaDescription:
      "Voice therapy in Hyderabad for individuals with hoarseness, vocal strain or weakness to restore healthy voice and communication.",
    keywords:
      "voice therapy, vocal rehabilitation, voice exercises, Hyderabad clinic, speech clarity",
  },
  {
    title: "Special Education",
    description:
      "Special education services create individualized learning plans (IEPs) or tailored programmes that adapt teaching methods, curriculum goals and the learning environment for children with developmental or learning differences. The process starts with an educational assessment and multidisciplinary input (therapists, teachers, family), then sets measurable academic and functional goals, classroom accommodations, and related services such as speech therapy or OT.",
    extra:
      "We work with schools and families to implement the plan, monitor progress regularly, and revise objectives every term or year so the child keeps moving forward academically and socially. The aim is meaningful participation in school and steady skill development.",
    metaDescription:
      "Special education services in Hyderabad with individualized learning plans, academic support, and tailored teaching for children with developmental differences.",
    keywords:
      "special education, individualized learning, IEP, Hyderabad clinic, academic support",
  },
  {
    title: "Pre-Employment Assessment",
    description:
      "Pre-employment assessment evaluates communication, cognitive and behavioural skills relevant to a specific job — it’s a practical, occupationally focused assessment to identify strengths, limitations and reasonable accommodations. Components may include communication tasks, cognitive screening, vocational interest inventories, work-sample tasks and interview simulations.",
    extra:
      "Results produce a clear report with recommended supports, training needs and workplace adaptations. For people returning after illness or with developmental differences we align assessments to realistic job demands and provide job coaching plans so the candidate is prepared and confident. Results help employers and candidates match the right role and plan successful workplace integration.",
    metaDescription:
      "Pre-employment assessment in Hyderabad to evaluate communication, cognitive, and behavioral skills for successful workplace placement.",
    keywords:
      "pre-employment assessment, job readiness, workplace skills, Hyderabad clinic, cognitive assessment",
  },
  {
    title: "Pre & Post Implant Counselling",
    description:
      "Counselling before and after cochlear implantation prepares families for realistic outcomes and supports the rehabilitation journey: pre-implant counselling covers candidacy, the surgical pathway, expected timeline and realistic hearing goals, while post-implant counselling explains processor care, listening practice, and rehabilitation expectations.",
    extra:
      "After activation, a coordinated plan of audiology tuning and speech-language therapy (listening and language training) is scheduled, with regular reviews to revise goals and train caregivers in daily listening techniques. Counselling also addresses emotional adjustment, school planning and community supports so families feel informed and supported at every step.",
    metaDescription:
      "Pre and post cochlear implant counselling in Hyderabad to guide families and support hearing rehabilitation effectively.",
    keywords:
      "cochlear implant counselling, pre implant counselling, post implant support, hearing rehabilitation, Hyderabad clinic",
  },
  {
    title: "Post-Stroke Management & Counselling",
    description:
      "Post-stroke rehabilitation is a multidisciplinary programme that addresses speech and language (aphasia), swallowing safety, cognitive-communication problems and emotional adjustment. Treatment begins with a comprehensive rehab assessment and an individualised plan that combines speech therapy for language and swallowing, occupational therapy for daily living, physical therapy for mobility, and psychological counselling for mood and coping.",
    extra:
      "Therapy focuses on relearning lost skills, teaching compensatory strategies (e.g., communication partners training, alternative communication when needed), and setting functional goals that matter to the person — returning home, dressing, eating safely and reconnecting with family and work. Regular team reviews ensure the plan adapts as recovery progresses.",
    metaDescription:
      "Post-stroke management and counselling in Hyderabad to support recovery of speech, swallowing, cognition, and emotional wellbeing.",
    keywords:
      "post-stroke therapy, stroke rehabilitation, speech recovery, occupational therapy, Hyderabad clinic",
  },
];

function SpeechServices() {
  return (
    <section
      className="speech-services container"
      aria-labelledby="speech-services-heading"
      role="region"
    >
      <h2 className="speech-services-title">Our Speech Services</h2>
      <p
        className="speech-services-subtitle"
        aria-label="Introduction to speech and hearing services"
      >
        Explore our specialized therapies and programs designed to enhance
        speech, hearing, and communication at Shivaranjani Speech & Hearing
        Clinic.
      </p>
      <div className="services-grid" role="list">
        {speechServiceContents.map((service, index) => {
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

export default SpeechServices;
