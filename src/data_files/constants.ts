import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Agroindustrias Equatorial",
  tagline: "Top-quality Hardware Tools",
  description: "Agroindustrias Equatorianas ofrece herramientas de hardware de alta calidad y servicios de construcción expertos para satisfacer todas tus necesidades de proyecto. Inicia tu exploración y contacta nuestro equipo de ventas para una calidad superior y confiabilidad.",
  description_short: "Agroindustrias Equatorianas ofrece herramientas de hardware de alta calidad y servicios de construcción expertos para satisfacer todas tus necesidades de proyecto.",
  url: "https://agroindustrias-equatorianas.com",
  author: "IsnotCristhianr",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_EC",
  type: "website", 
  url: SITE.url,
  title: `${SITE.title}: Vinos y Licores Artesanales`,
  description: "Descubre nuestra exquisita selección de vinos y licores artesanales elaborados con frutas tropicales de Ibarra. Productos de alta calidad que fusionan tradición e innovación. ¡Explora nuestro catálogo y encuentra el sabor perfecto para cada ocasión!",
  image: ogImageSrc,
};
