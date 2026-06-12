import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clinicInfo } from "../data/clinicInfo";
import { toAbsoluteUrl } from "../data/seo";

function upsertMeta(attribute, key, content) {
  if (!content) {
    return;
  }

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) {
    return;
  }

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function createManagedScript(id, payload) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seoManaged = "true";
  script.dataset.seoId = id;
  script.textContent = JSON.stringify(payload);
  return script;
}

function Seo({
  title,
  description,
  path,
  keywords = [],
  image = clinicInfo.ogImagePath,
  imageAlt = clinicInfo.siteName,
  type = "website",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  noindex = false,
  jsonLd = [],
}) {
  const location = useLocation();

  useEffect(() => {
    const origin =
      (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const resolvedPath = path || location.pathname;
    const canonicalUrl = toAbsoluteUrl(resolvedPath, origin);
    const titleText = title.includes(clinicInfo.siteName)
      ? title
      : `${title} | ${clinicInfo.siteName}`;
    const resolvedImage = toAbsoluteUrl(image, origin);
    const resolvedRobots = noindex ? "noindex, nofollow" : robots;
    const structuredData = Array.isArray(jsonLd)
      ? jsonLd.filter(Boolean)
      : [jsonLd].filter(Boolean);

    document.documentElement.lang = clinicInfo.language;
    document.title = titleText;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords.join(", "));
    upsertMeta("name", "robots", resolvedRobots);
    upsertMeta("name", "googlebot", resolvedRobots);
    upsertMeta("name", "author", clinicInfo.siteName);
    upsertMeta("name", "application-name", clinicInfo.siteName);
    upsertMeta("name", "apple-mobile-web-app-title", clinicInfo.siteName);
    upsertMeta("name", "theme-color", clinicInfo.themeColor);

    upsertMeta("property", "og:locale", clinicInfo.locale);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", titleText);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", clinicInfo.siteName);
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", titleText);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", resolvedImage);

    upsertLink("canonical", canonicalUrl);
    upsertLink("icon", clinicInfo.logoPath);
    upsertLink("apple-touch-icon", clinicInfo.appleTouchIconPath);
    upsertLink("manifest", clinicInfo.manifestPath);

    document.head
      .querySelectorAll('script[data-seo-managed="true"]')
      .forEach((script) => script.remove());

    structuredData.forEach((payload, index) => {
      document.head.appendChild(createManagedScript(`seo-${index}`, payload));
    });

    return () => {
      document.head
        .querySelectorAll('script[data-seo-managed="true"]')
        .forEach((script) => script.remove());
    };
  }, [
    image,
    imageAlt,
    jsonLd,
    keywords,
    location.pathname,
    noindex,
    path,
    robots,
    title,
    description,
    type,
  ]);

  return null;
}

export default Seo;
