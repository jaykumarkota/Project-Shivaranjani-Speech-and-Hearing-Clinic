import "../styles/pages/ImplantServices.css";
import React from "react";
import { Link } from "react-router-dom";

const implantServiceContents = [
    {
        title: "Cochlear Implant Evaluation & Candidacy Assessment",
        description:
            "Cochlear implant candidacy evaluation is a comprehensive multi-step process to determine if a cochlear implant is the right solution for someone with severe-to-profound hearing loss. The assessment includes detailed audiological testing (pure tone and speech audiometry), medical examination by ENT specialists, imaging studies (CT/MRI scans), and functional hearing assessments to understand daily communication challenges.",
        extra:
            "The team evaluates factors such as the duration of deafness, age, cochlear structure, auditory nerve function, and realistic expectations. Candidates are counselled about surgical risks, device limitations, rehabilitation timelines, and long-term outcomes. The goal is to identify individuals who will benefit most from cochlear implantation and ensure informed decision-making.",
        metaDescription:
            "Comprehensive cochlear implant evaluation and candidacy assessment in Hyderabad to determine suitability for implant surgery and rehabilitation.",
        keywords:
            "cochlear implant evaluation, implant candidacy, hearing implant assessment, Hyderabad audiology, severe hearing loss",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
    },
    {
        title: "Pre-Implant Counseling & Diagnostic Support",
        description:
            "Pre-implant counseling prepares patients and families for the cochlear implant journey by providing detailed information about the surgical procedure, device technology, rehabilitation expectations, and realistic hearing outcomes. Counselling sessions address common concerns, emotional adjustment, financial planning, and long-term commitment required for successful implant use.",
        extra:
            "Diagnostic support includes coordination with ENT surgeons, radiologists, and audiologists to complete pre-surgical assessments, imaging reviews, and medical clearances. Families receive guidance on choosing the right implant brand, device features, and rehabilitation options. This collaborative approach ensures patients are fully informed, mentally prepared, and medically ready for implantation.",
        metaDescription:
            "Pre-implant counseling and diagnostic support in Hyderabad to prepare patients and families for cochlear implant surgery and rehabilitation.",
        keywords:
            "pre-implant counseling, cochlear implant preparation, implant diagnostic support, Hyderabad clinic, hearing implant guidance",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    },
    {
        title: "Post-Implant Mapping, Tuning & Rehabilitation Therapy",
        description:
            "Post-implant mapping (programming) is the process of customizing the cochlear implant's sound processor to match the patient's hearing needs. Mapping sessions begin 3-4 weeks after surgery, once the implant site has healed. The audiologist adjusts electrical stimulation levels across electrode channels to ensure comfortable and effective hearing while avoiding discomfort or overstimulation.",
        extra:
            "Tuning sessions are repeated regularly during the first year (weekly to monthly) and then annually to optimize hearing performance as the brain adapts to the new auditory input. Rehabilitation therapy includes auditory training, speech-language therapy, listening exercises, and communication strategies to help users make sense of sound signals and develop functional hearing and language skills. Ongoing support ensures maximum benefit from the cochlear implant and smooth integration into daily life.",
        metaDescription:
            "Post-implant mapping, tuning, and rehabilitation therapy in Hyderabad to optimize cochlear implant performance and develop hearing skills.",
        keywords:
            "cochlear implant mapping, implant tuning, post-implant therapy, auditory rehabilitation, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
        title: "Auditory-Verbal Therapy for Implant Users",
        description:
            "Auditory-Verbal Therapy (AVT) is a specialized approach for cochlear implant users that emphasizes listening and spoken language development without reliance on visual cues. Therapy is delivered by certified AVT practitioners who coach parents and caregivers to create rich listening environments and maximize everyday opportunities for auditory learning.",
        extra:
            "Sessions focus on sound detection, discrimination, identification, and comprehension skills, building from simple environmental sounds to complex speech understanding. AVT is particularly effective for children implanted early, helping them develop age-appropriate spoken language and integrate successfully into mainstream education. Regular monitoring and family involvement are key to achieving the best long-term outcomes.",
        metaDescription:
            "Auditory-Verbal Therapy (AVT) for cochlear implant users in Hyderabad to develop listening and spoken language skills effectively.",
        keywords:
            "auditory verbal therapy, AVT for implants, cochlear implant therapy, listening skills, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    },
    {
        title: "Device Troubleshooting & Maintenance Support",
        description:
            "Cochlear implant users need ongoing technical support to ensure their devices function optimally. Common issues include processor malfunctions, battery problems, coil connectivity issues, moisture damage, and cable wear. Our clinic provides device troubleshooting, routine maintenance checks, and minor repairs to minimize downtime and maintain consistent hearing access.",
        extra:
            "We offer guidance on daily care routines, cleaning protocols, battery replacement, accessory usage (such as remote controls and streaming devices), and protective measures for sports and water exposure. In case of major technical failures, we coordinate with manufacturers for warranty claims, loaner equipment, and device upgrades. Regular check-ups and preventive maintenance ensure reliable long-term implant performance.",
        metaDescription:
            "Cochlear implant device troubleshooting and maintenance support in Hyderabad to ensure optimal device performance and reliability.",
        keywords:
            "implant troubleshooting, cochlear implant maintenance, device support, implant repair, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
    },
    {
        title: "Bilateral Implant Assessment & Sequential Implantation",
        description:
            "Bilateral cochlear implantation (implants in both ears) offers significant benefits over unilateral implantation, including improved sound localization, better speech understanding in noisy environments, and enhanced overall hearing quality. Assessment for bilateral implants involves evaluating residual hearing in both ears, candidacy criteria, and the potential benefits versus risks of a second surgery.",
        extra:
            "Sequential implantation (second implant after the first has been successfully used) is common when the first implant demonstrates clear benefit. Our team guides patients through the decision-making process, insurance coordination, surgical planning, and post-implant rehabilitation for both devices. Bilateral users typically report greater confidence and ease in complex listening situations, making it a valuable option for many implant candidates.",
        metaDescription:
            "Bilateral cochlear implant assessment and sequential implantation services in Hyderabad for enhanced hearing and sound localization.",
        keywords:
            "bilateral cochlear implants, sequential implantation, two implants, sound localization, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
        title: "Implant Upgrades & Processor Replacement",
        description:
            "Cochlear implant technology advances rapidly, and processor upgrades can significantly improve hearing performance, sound quality, connectivity features, and device comfort. Existing implant users are eligible for processor upgrades (typically every 5-7 years, depending on warranty and manufacturer policies) without requiring additional surgery, as the internal implant remains unchanged.",
        extra:
            "Our clinic assists with upgrade evaluations, insurance approvals, new processor programming, and orientation to updated features such as Bluetooth streaming, noise reduction algorithms, and rechargeable battery systems. We also support older implant users whose devices have been discontinued, helping them transition to compatible modern processors or guiding them through reimplantation if necessary. Staying current with technology ensures users continue to hear their best.",
        metaDescription:
            "Cochlear implant upgrades and processor replacement services in Hyderabad to improve hearing with the latest technology.",
        keywords:
            "implant upgrades, processor replacement, cochlear implant technology, device updates, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=800&q=80",
    },
    {
        title: "Pediatric Implant Support & Family Training",
        description:
            "Children with cochlear implants require specialized care, including age-appropriate mapping, regular developmental monitoring, and family-centered rehabilitation. Our pediatric implant program includes device programming tailored to young users, play-based auditory training, speech-language therapy, and educational advocacy to support school inclusion and communication development.",
        extra:
            "Family training is essential — parents learn how to troubleshoot devices, recognize listening milestones, create language-rich environments, and collaborate with educators for optimal academic outcomes. We provide ongoing support through regular audiology appointments, parent workshops, and coordination with teachers and early intervention programs. Early implantation and consistent follow-up maximize a child's potential to develop spoken language naturally.",
        metaDescription:
            "Pediatric cochlear implant support and family training in Hyderabad to help children develop listening and language skills effectively.",
        keywords:
            "pediatric cochlear implants, child implant support, family training, hearing development, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    },
    {
        title: "Adult Implant Rehabilitation & Adaptation Strategies",
        description:
            "Adults receiving cochlear implants — especially those who lost hearing later in life or have used hearing aids for years — face unique challenges adapting to the new way sounds are perceived. Rehabilitation focuses on auditory training exercises, speech recognition practice, telephone communication skills, and strategies for managing background noise and group conversations.",
        extra:
            "Therapy sessions are tailored to individual lifestyles and communication needs, whether for workplace demands, social interactions, or entertainment activities. Adult users typically progress faster than children due to prior language experience, but realistic expectations and consistent practice are key. Our team provides counseling on adjustment timelines, troubleshooting common frustrations, and celebrating incremental progress to ensure successful long-term implant use.",
        metaDescription:
            "Adult cochlear implant rehabilitation and adaptation strategies in Hyderabad to support successful hearing recovery and communication.",
        keywords:
            "adult cochlear implants, implant rehabilitation, hearing adaptation, adult hearing loss, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    },
    {
        title: "Hybrid & Electroacoustic Implant Solutions",
        description:
            "Hybrid cochlear implants (also called electroacoustic stimulation devices) combine electrical stimulation for high-frequency sounds with acoustic amplification for residual low-frequency hearing. These devices are ideal for individuals with severe high-frequency hearing loss but preserved low-frequency hearing, offering better sound quality and music appreciation compared to traditional cochlear implants alone.",
        extra:
            "Candidacy assessment includes careful audiometric testing to confirm low-frequency hearing preservation and suitability for hybrid technology. Post-implant programming requires specialized mapping to balance electrical and acoustic inputs for optimal hearing. Our clinic provides evaluation, surgical coordination, programming, and ongoing support for hybrid implant users, helping them achieve natural-sounding hearing and improved communication across diverse listening environments.",
        metaDescription:
            "Hybrid and electroacoustic cochlear implant solutions in Hyderabad for individuals with residual low-frequency hearing.",
        keywords:
            "hybrid cochlear implants, electroacoustic implants, residual hearing, hearing technology, Hyderabad clinic",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    },
];

function ImplantServices() {
    return (
        <section
            className="implant-services container"
            aria-labelledby="implant-services-heading"
            role="region"
        >
            <h2 className="implant-services-title">Our Implant Services</h2>
            <p
                className="implant-services-subtitle"
                aria-label="Introduction to cochlear implant services"
            >
                Comprehensive cochlear implant solutions from evaluation to
                rehabilitation at Shivaranjani Speech & Hearing Clinic.
            </p>
            <div className="services-grid" role="list">
                {implantServiceContents.map((service, index) => {
                    return (
                        <React.Fragment key={service.title}>
                            <h3 className="service-title-small">{service.title}</h3>
                            <div
                                className={`service-card img-cont-${index + 1}`}
                                role="img"
                                aria-label={`${service.title} illustration`}
                            >
                                <img
                                    src={service.image}
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
                                        state={{
                                            serviceType: "implant",
                                            service: service.title,
                                        }}
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

export default ImplantServices;
