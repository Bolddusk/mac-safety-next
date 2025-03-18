export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAC Safety Consultants",
  url: "https://macsafety.com/",
  logo: "https://macsafety.com/uploads/Untitled%20design%20(11).webp",
  image: "https://macsafety.com/favicon.ico",
  description:
    "MAC Safety Consultants uniquely integrates human expertise, audits, compliance monitoring, safety program implementation, safety assessments, mission-critical software, and AI-driven intelligence to deliver unparalleled value across the enterprise safety ecosystem. Serving industries including Airline, Auto, Chemical Processing, Construction, Data Centers, Defense & Aerospace, Healthcare, Insurance, Life Science, Manufacturing, Maritime, Mining, Oil & Gas, Power Generation, Rail, Renewable Energy, Steel, Telecommunications, and Warehousing.",
  foundingDate: "2005",
  numberOfEmployees: "50+",
  areaServed: ["US", "Global"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    ratingCount: "245",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "724.513.4491",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "info@macsafety.us",
      contactType: "general inquiries",
    },
    {
      "@type": "ContactPoint",
      email: "press@macsafety.us",
      contactType: "media inquiries",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/mac-safety-consultants-inc-",
    "https://github.com/MAC-Intel",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 Brkich Way",
    addressLocality: "Beaver",
    addressRegion: "PA",
    postalCode: "15009",
    addressCountry: "US",
  },
  subjectOf: {
    "@type": "DefinedTermSet",
    name: "Industries Served",
    hasDefinedTerm: [
      { "@type": "DefinedTerm", name: "Airline" },
      { "@type": "DefinedTerm", name: "Auto" },
      { "@type": "DefinedTerm", name: "Chemical Processing" },
      { "@type": "DefinedTerm", name: "Construction" },
      { "@type": "DefinedTerm", name: "Data Centers" },
      { "@type": "DefinedTerm", name: "Defense & Aerospace" },
      { "@type": "DefinedTerm", name: "Healthcare" },
      { "@type": "DefinedTerm", name: "Insurance" },
      { "@type": "DefinedTerm", name: "Life Science" },
      { "@type": "DefinedTerm", name: "Manufacturing" },
      { "@type": "DefinedTerm", name: "Maritime" },
      { "@type": "DefinedTerm", name: "Mining" },
      { "@type": "DefinedTerm", name: "Oil & Gas" },
      { "@type": "DefinedTerm", name: "Power Generation" },
      { "@type": "DefinedTerm", name: "Rail" },
      { "@type": "DefinedTerm", name: "Renewable Energy" },
      { "@type": "DefinedTerm", name: "Steel" },
      { "@type": "DefinedTerm", name: "Telecommunications" },
      { "@type": "DefinedTerm", name: "Warehousing" },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Offered",
    itemListElement: [
      {
        "@type": "Service",
        name: "People Services",
        description:
          "Expert consultants and safety specialists for your mission-critical operations",
      },
      {
        "@type": "Service",
        name: "Software Solutions",
        description:
          "Advanced AI-powered platforms for comprehensive risk management",
      },
      {
        "@type": "Service",
        name: "Software Platforms",
        description:
          "Integrate reporting, predictive analytics, and real-time intelligence into a unified dashboard.",
      },
      {
        "@type": "Service",
        name: "Safety & Health Consultations",
        description:
          "Diagnose vulnerabilities and chart strategic improvements.",
      },
      {
        "@type": "Service",
        name: "Safety Professional Staffing",
        description:
          "On-site experts to drive best practices and reduce hazards.",
      },
      {
        "@type": "Service",
        name: "Safety Attendant Services",
        description:
          "Real-time oversight in high-risk settings, preventing incidents before they occur.",
      },
      {
        "@type": "Service",
        name: "Occupational Medicine Support",
        description: "Keep employees healthy, productive, and on the job.",
      },
      {
        "@type": "Service",
        name: "Drug & Alcohol Testing",
        description: "Safeguard compliance and workplace integrity.",
      },
      {
        "@type": "Service",
        name: "Industrial Hygiene Testing",
        description: "Monitor exposures to protect your team’s well-being.",
      },
    ],
  },
};
