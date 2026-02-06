import "../../styles/components/AboutPage/AboutDocter.css"

function AboutDocter() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <div className="about-header-content">
          <div className="about-badge">OUR TEAM</div>
          <h1 className="about-main-title">Meet Dr. Shivaranjani</h1>
          <p className="about-subtitle">
            Specialized Hearing & Speech Care — Personalized, Evidence-Based
          </p>
          <p className="about-header-desc">
            Dr. Shiavaranjani brings expertise in audiology and speech-language pathology,
            delivering comprehensive diagnostic testing, device support, and therapy programs
            for patients of all ages. Committed to quick assessments and long-term rehabilitation.
          </p>
        </div>
      </div>

      <div className="about-content-wrapper">
        {/* Education Section */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-icon-wrapper">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <h2 className="about-section-title">Educational Qualifications</h2>
              <p className="about-section-subtitle">Academic excellence in audiology and speech pathology</p>
            </div>
          </div>

          <div className="about-timeline">
            <div className="about-timeline-item">
              <div className="about-timeline-line"></div>
              <div className="about-timeline-dot"></div>
              <div className="about-education-card">
                <div className="about-card-top">
                  <div>
                    <h3 className="about-degree-title">Doctor of Audiology (Au.D.)</h3>
                    <p className="about-institution">University of Health Sciences, Boston</p>
                  </div>
                  <span className="about-year-badge">2016 - 2020</span>
                </div>
                <p className="about-card-desc">
                  Specialized in pediatric audiology, cochlear implants, and vestibular assessment.
                  Completed clinical rotations at leading hospitals and research in hearing aid technology.
                </p>
                <div className="about-tag-group">
                  <span className="about-tag-blue">Clinical Excellence Award</span>
                  <span className="about-tag-blue">GPA: 3.92/4.0</span>
                  <span className="about-tag-blue">Research Fellow</span>
                </div>
              </div>
            </div>

            <div className="about-timeline-item">
              <div className="about-timeline-dot"></div>
              <div className="about-education-card">
                <div className="about-card-top">
                  <div>
                    <h3 className="about-degree-title">Master of Science in Speech-Language Pathology</h3>
                    <p className="about-institution">National Institute of Speech & Hearing, Mumbai</p>
                  </div>
                  <span className="about-year-badge">2014 - 2016</span>
                </div>
                <p className="about-card-desc">
                  Focused on communication disorders, voice therapy, and fluency disorders.
                  Thesis on early intervention strategies for children with speech delays.
                </p>
                <div className="about-tag-group">
                  <span className="about-tag-blue">Merit Scholarship</span>
                  <span className="about-tag-blue">GPA: 3.85/4.0</span>
                  <span className="about-tag-blue">Clinical Training</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-icon-wrapper">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <h2 className="about-section-title">Professional Experience</h2>
              <p className="about-section-subtitle">12+ years of clinical practice and patient care</p>
            </div>
          </div>

          <div className="about-experience-grid">
            <div className="about-exp-card">
              <div className="about-exp-number">01</div>
              <div className="about-exp-content">
                <h3 className="about-exp-title">Lead Audiologist & Speech Pathologist</h3>
                <p className="about-exp-company">Shivaranjani Speech & Hearing Clinic, Hyderabad</p>
                <p className="about-exp-duration">2020 - Present (4 years)</p>
                <p className="about-exp-desc">
                  Founded and managing comprehensive speech and hearing clinic providing diagnostic services,
                  hearing aid fittings, cochlear implant programming, and speech therapy. Treating 500+ patients
                  annually with specialized programs for children and adults.
                </p>
                <div className="about-exp-highlights">
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>500+ successful patient outcomes</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Pediatric & geriatric specialization</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Advanced hearing aid technology</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-exp-card">
              <div className="about-exp-number">02</div>
              <div className="about-exp-content">
                <h3 className="about-exp-title">Senior Audiologist</h3>
                <p className="about-exp-company">Apollo Hospitals, Hyderabad</p>
                <p className="about-exp-duration">2017 - 2020 (3 years)</p>
                <p className="about-exp-desc">
                  Conducted comprehensive audiological evaluations, newborn hearing screenings, and vestibular
                  assessments. Managed hearing aid dispensing program and provided cochlear implant mapping services
                  for post-surgical patients.
                </p>
                <div className="about-exp-highlights">
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>1000+ hearing assessments</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Cochlear implant programming</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Vestibular testing expertise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-exp-card">
              <div className="about-exp-number">03</div>
              <div className="about-exp-content">
                <h3 className="about-exp-title">Speech-Language Pathologist</h3>
                <p className="about-exp-company">CARE Hospitals, Banjara Hills</p>
                <p className="about-exp-duration">2015 - 2017 (2 years)</p>
                <p className="about-exp-desc">
                  Provided assessment and therapy for communication disorders including articulation, language delays,
                  stuttering, and voice disorders. Developed individualized treatment plans and worked with
                  multidisciplinary teams for holistic patient care.
                </p>
                <div className="about-exp-highlights">
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Speech therapy for all ages</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Voice & fluency disorders</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Swallowing disorder management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-exp-card">
              <div className="about-exp-number">04</div>
              <div className="about-exp-content">
                <h3 className="about-exp-title">Clinical Intern - Audiology & SLP</h3>
                <p className="about-exp-company">All India Institute of Speech & Hearing, Mysore</p>
                <p className="about-exp-duration">2014 - 2015 (1 year)</p>
                <p className="about-exp-desc">
                  Completed intensive clinical training in diagnostic audiology, hearing aid selection,
                  and speech-language assessment. Gained hands-on experience with pediatric cases and
                  assistive listening devices.
                </p>
                <div className="about-exp-highlights">
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Comprehensive clinical training</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>200+ supervised clinical hours</span>
                  </div>
                  <div className="about-highlight-item">
                    <span className="about-highlight-icon">✓</span>
                    <span>Pediatric assessment focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-icon-wrapper">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h2 className="about-section-title">Professional Certifications</h2>
              <p className="about-section-subtitle">Specialized credentials and continuing education</p>
            </div>
          </div>

          <div className="about-cert-grid">
            {[
              { name: 'Certificate of Clinical Competence in Audiology (CCC-A)', org: 'American Speech-Language-Hearing Association', year: '2021' },
              { name: 'Certificate of Clinical Competence in SLP (CCC-SLP)', org: 'ASHA', year: '2020' },
              { name: 'Pediatric Audiology Specialist Certification', org: 'Indian Speech & Hearing Association', year: '2020' },
              { name: 'Cochlear Implant Programming Certification', org: 'Cochlear Ltd.', year: '2019' },
              { name: 'Vestibular Assessment & Rehabilitation', org: 'American Institute of Balance', year: '2019' },
              { name: 'Advanced Hearing Aid Technology Course', org: 'Phonak Academy', year: '2018' },
              { name: 'Dysphagia Management Certification', org: 'ISHA', year: '2017' },
              { name: 'Registered Audiologist & Speech Pathologist', org: 'Rehabilitation Council of India', year: '2016' }
            ].map((cert, idx) => (
              <div key={idx} className="about-cert-card">
                <div className="about-cert-badge">
                  <svg className="about-cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15l-2 5L7 17l-5 1 3-5-3-5 5 1 3-3 2 5 2-5 3 3 5-1-3 5 3 5-5-1-3 3z" />
                  </svg>
                </div>
                <h3 className="about-cert-name">{cert.name}</h3>
                <p className="about-cert-org">{cert.org}</p>
                <span className="about-cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations Section */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-icon-wrapper">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <h2 className="about-section-title">Special Interests & Specializations</h2>
              <p className="about-section-subtitle">Areas of clinical expertise and research focus</p>
            </div>
          </div>

          <div className="about-special-grid">
            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="about-special-title">Pediatric Audiology</h3>
              <p className="about-special-desc">
                Specialized in early hearing detection, newborn screening, pediatric hearing aid fittings,
                and cochlear implant candidacy evaluation for children.
              </p>
            </div>

            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <h3 className="about-special-title">Speech Disorders</h3>
              <p className="about-special-desc">
                Assessment and treatment of articulation disorders, phonological processes, childhood apraxia
                of speech, and developmental language delays.
              </p>
            </div>

            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m8-7h-6m-6 0H2" />
                </svg>
              </div>
              <h3 className="about-special-title">Tinnitus Management</h3>
              <p className="about-special-desc">
                Comprehensive evaluation and treatment programs for tinnitus including sound therapy,
                counseling, and hearing aid solutions with tinnitus masking features.
              </p>
            </div>

            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="about-special-title">Hearing Aid Technology</h3>
              <p className="about-special-desc">
                Expert in latest digital hearing aid technology, fitting protocols, real ear measurements,
                and troubleshooting advanced features.
              </p>
            </div>

            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="about-special-title">Voice Therapy</h3>
              <p className="about-special-desc">
                Treatment for voice disorders including vocal nodules, polyps, functional dysphonia,
                and voice rehabilitation for professional voice users.
              </p>
            </div>

            <div className="about-special-card">
              <div className="about-special-icon-box">
                <svg className="about-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="about-special-title">Cochlear Implants</h3>
              <p className="about-special-desc">
                Pre and post-surgical counseling, device programming, mapping, and auditory-verbal
                therapy for cochlear implant recipients.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-icon-wrapper">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
              </svg>
            </div>
            <div>
              <h2 className="about-section-title">Awards & Recognition</h2>
              <p className="about-section-subtitle">Professional achievements and honors</p>
            </div>
          </div>

          <div className="about-awards-grid">
            <div className="about-award-card">
              <div className="about-award-icon-box">
                <svg className="about-award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="about-award-content">
                <div className="about-award-top">
                  <h3 className="about-award-title">Excellence in Clinical Practice Award</h3>
                  <span className="about-award-year-tag">2023</span>
                </div>
                <p className="about-award-org">Indian Speech & Hearing Association</p>
                <p className="about-award-desc">
                  Recognized for outstanding contributions to audiology practice and patient care excellence
                  in the field of hearing rehabilitation.
                </p>
              </div>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon-box">
                <svg className="about-award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="about-award-content">
                <div className="about-award-top">
                  <h3 className="about-award-title">Best Pediatric Audiologist Award</h3>
                  <span className="about-award-year-tag">2022</span>
                </div>
                <p className="about-award-org">Telangana Healthcare Excellence Summit</p>
                <p className="about-award-desc">
                  Honored for exceptional work in pediatric hearing assessment and early intervention
                  programs benefiting children across Telangana.
                </p>
              </div>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon-box">
                <svg className="about-award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="about-award-content">
                <div className="about-award-top">
                  <h3 className="about-award-title">Research Publication Award</h3>
                  <span className="about-award-year-tag">2021</span>
                </div>
                <p className="about-award-org">Journal of Audiology & Otology</p>
                <p className="about-award-desc">
                  Published research on "Efficacy of Early Intervention in Pediatric Hearing Loss"
                  recognized as a significant contribution to the field.
                </p>
              </div>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon-box">
                <svg className="about-award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="about-award-content">
                <div className="about-award-top">
                  <h3 className="about-award-title">Community Service Recognition</h3>
                  <span className="about-award-year-tag">2020</span>
                </div>
                <p className="about-award-org">Hyderabad Medical Association</p>
                <p className="about-award-desc">
                  Acknowledged for free hearing screening camps and speech therapy services
                  provided to underprivileged communities.
                </p>
              </div>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon-box">
                <svg className="about-award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="about-award-content">
                <div className="about-award-top">
                  <h3 className="about-award-title">Young Researcher Award</h3>
                  <span className="about-award-year-tag">2018</span>
                </div>
                <p className="about-award-org">National Conference on Communication Disorders</p>
                <p className="about-award-desc">
                  Awarded for innovative research presentation on cochlear implant outcomes
                  in Indian pediatric population.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AboutDocter;