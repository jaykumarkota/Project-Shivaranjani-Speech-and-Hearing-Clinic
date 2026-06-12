import { faqs } from "../assets/assets";
import { clinicInfo, clinicLocationLabel } from "./clinicInfo";
import {
  hearingServiceSections,
  implantServiceSections,
  speechServiceSections,
} from "./serviceCatalog";

function uniqueKeywords(values) {
  return [...new Set(values.filter(Boolean))];
}

function flattenSectionTitles(sections) {
  return sections.flatMap((section) => [
    section.title,
    ...section.items.map((item) => item.title),
  ]);
}

const hearingKeywords = flattenSectionTitles(hearingServiceSections);
const speechKeywords = flattenSectionTitles(speechServiceSections);
const implantKeywords = flattenSectionTitles(implantServiceSections);

export const siteKeywords = uniqueKeywords([
  "speech and hearing clinic Hyderabad",
  "speech therapy Hyderabad",
  "hearing test Hyderabad",
  "audiologist Uppal",
  "speech therapist Uppal",
  "hearing aid clinic Hyderabad",
  "cochlear implant mapping Hyderabad",
  "audiology clinic Peerzadiguda",
  "speech and language therapy for children Hyderabad",
  "adult speech therapy Hyderabad",
  "implant audiologist Hyderabad",
  "hearing aids Hyderabad",
  "PTA test Hyderabad",
  "BERA test Hyderabad",
  "Auditory Verbal Training Hyderabad",
  "Auditory Training Hyderabad",
  "Shivaranjani Speech and Hearing Clinic",
  clinicLocationLabel,
  ...hearingKeywords,
  ...speechKeywords,
  ...implantKeywords,
]);

export const pageKeywords = {
  home: uniqueKeywords([
    "speech and hearing clinic in Uppal Hyderabad",
    "speech therapy for children and adults Hyderabad",
    "hearing tests and hearing aids Hyderabad",
    "cochlear implant rehabilitation Hyderabad",
    "audiologist and speech therapist Hyderabad",
    ...hearingKeywords.slice(0, 8),
    ...speechKeywords.slice(0, 8),
    ...implantKeywords.slice(0, 6),
  ]),
  about: uniqueKeywords([
    "about Shivaranjani Speech and Hearing Clinic",
    "audiology and speech clinic Hyderabad",
    "RCI audiologist Hyderabad",
    "implant audiologist Hyderabad",
    "speech language therapist Hyderabad",
    clinicLocationLabel,
  ]),
  aboutDoctor: uniqueKeywords([
    "Dr Shivaranjani audiologist Hyderabad",
    "speech language therapist Hyderabad",
    "implant audiologist Hyderabad",
    "hearing specialist Uppal",
    "doctor for speech therapy Hyderabad",
  ]),
  services: uniqueKeywords([
    "hearing services Hyderabad",
    "speech services Hyderabad",
    "implant services Hyderabad",
    ...hearingKeywords,
    ...speechKeywords,
    ...implantKeywords,
  ]),
  hearing: uniqueKeywords([
    "hearing services Hyderabad",
    "hearing test Hyderabad",
    "PTA Hyderabad",
    "Impedance Audiometry Hyderabad",
    "Speech Audiometry Hyderabad",
    "BERA Hyderabad",
    "hearing aids Hyderabad",
    "hearing aid programming Hyderabad",
    "auditory verbal training Hyderabad",
    ...hearingKeywords,
  ]),
  speech: uniqueKeywords([
    "speech therapy Hyderabad",
    "speech evaluation Hyderabad",
    "voice therapy Hyderabad",
    "fluency therapy Hyderabad",
    "articulation therapy Hyderabad",
    "aphasia therapy Hyderabad",
    "autism speech therapy Hyderabad",
    "ADHD communication therapy Hyderabad",
    ...speechKeywords,
  ]),
  implant: uniqueKeywords([
    "implant services Hyderabad",
    "cochlear implant Hyderabad",
    "auditory brainstem implant Hyderabad",
    "implant mapping Hyderabad",
    "post implant rehabilitation Hyderabad",
    "AVT after cochlear implant Hyderabad",
    ...implantKeywords,
  ]),
  appointment: uniqueKeywords([
    "book speech therapy appointment Hyderabad",
    "book hearing test appointment Hyderabad",
    "book audiology consultation Hyderabad",
    "appointment speech and hearing clinic Uppal",
  ]),
  contact: uniqueKeywords([
    "contact speech and hearing clinic Hyderabad",
    "speech therapy clinic phone number Hyderabad",
    "hearing clinic email Hyderabad",
    clinicLocationLabel,
  ]),
  location: uniqueKeywords([
    "speech and hearing clinic location Hyderabad",
    "speech therapy clinic in Uppal",
    "audiology clinic Peerzadiguda",
    clinicLocationLabel,
  ]),
};

export function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL;

  if (configuredOrigin) {
    return configuredOrigin.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin.replace(/\/$/, "");
  }

  return "https://example.com";
}

export function toAbsoluteUrl(pathOrUrl, origin = getSiteOrigin()) {
  if (!pathOrUrl) {
    return origin;
  }

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${origin}${normalizedPath}`;
}

export function createBreadcrumbSchema(items, origin = getSiteOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path, origin),
    })),
  };
}

export function createWebSiteSchema(origin = getSiteOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: origin,
    name: clinicInfo.siteName,
    description: clinicInfo.description,
    inLanguage: clinicInfo.language,
    publisher: {
      "@id": `${origin}/#medical-clinic`,
    },
  };
}

export function createMedicalClinicSchema(origin = getSiteOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${origin}/#medical-clinic`,
    name: clinicInfo.siteName,
    url: origin,
    image: [
      toAbsoluteUrl(clinicInfo.ogImagePath, origin),
      toAbsoluteUrl(clinicInfo.logoPath, origin),
    ],
    logo: toAbsoluteUrl(clinicInfo.logoPath, origin),
    description: clinicInfo.description,
    telephone: clinicInfo.primaryPhone.e164,
    email: clinicInfo.email,
    address: {
      "@type": "PostalAddress",
      ...clinicInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.geo.latitude,
      longitude: clinicInfo.geo.longitude,
    },
    hasMap: clinicInfo.mapUrl,
    areaServed: clinicInfo.areaServed,
    openingHoursSpecification: clinicInfo.openingHoursSpecification.map(
      (specification) => ({
        "@type": "OpeningHoursSpecification",
        ...specification,
      }),
    ),
    availableService: [
      "Hearing Tests",
      "Hearing Aids",
      "Speech Therapy",
      "Speech Evaluation",
      "Cochlear Implant Support",
      "Auditory Training",
      "Auditory Verbal Training",
    ],
    medicalSpecialty: [
      "Audiology",
      "Speech Pathology",
      "Hearing Aid Fitting",
      "Cochlear Implant Rehabilitation",
    ],
  };
}

export function createWebPageSchema(
  {
    path,
    title,
    description,
    type = "WebPage",
  },
  origin = getSiteOrigin(),
) {
  const url = toAbsoluteUrl(path, origin);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${origin}/#website`,
    },
    about: {
      "@id": `${origin}/#medical-clinic`,
    },
    inLanguage: clinicInfo.language,
  };
}

function createServiceEntries(items, origin) {
  return items.map((item) => ({
    "@type": "Service",
    name: item.title,
    description: `${item.description} ${item.extra}`,
    provider: {
      "@id": `${origin}/#medical-clinic`,
    },
    areaServed: clinicInfo.areaServed,
  }));
}

export function createOfferCatalogSchema(origin = getSiteOrigin()) {
  const sections = [
    {
      name: "Hearing Services",
      groups: hearingServiceSections,
    },
    {
      name: "Speech Services",
      groups: speechServiceSections,
    },
    {
      name: "Implant Services",
      groups: implantServiceSections,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${origin}/#service-catalog`,
    name: "Speech, Hearing and Implant Services",
    itemListElement: sections.map((section) => ({
      "@type": "OfferCatalog",
      name: section.name,
      itemListElement: section.groups.map((group) => ({
        "@type": "OfferCatalog",
        name: group.title,
        description: group.description,
        itemListElement: createServiceEntries(group.items, origin),
      })),
    })),
  };
}

export function createServicePageSchema(
  {
    name,
    path,
    description,
    sections,
  },
  origin = getSiteOrigin(),
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${toAbsoluteUrl(path, origin)}#service`,
    name,
    url: toAbsoluteUrl(path, origin),
    description,
    areaServed: clinicInfo.areaServed,
    provider: {
      "@id": `${origin}/#medical-clinic`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: sections.map((section) => ({
        "@type": "OfferCatalog",
        name: section.title,
        description: section.description,
        itemListElement: createServiceEntries(section.items, origin),
      })),
    },
  };
}

export function createFaqSchema(origin = getSiteOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${origin}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
