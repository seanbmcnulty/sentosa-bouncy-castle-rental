import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.seoDescription,
    areaServed: {
      "@type": "Place",
      name: "Sentosa Island, Singapore",
    },
    priceRange: `S$${SITE.priceSgd}`,
    currenciesAccepted: "SGD",
    telephone: isPlaceholder(SITE.whatsappDisplay) ? undefined : SITE.whatsappDisplay,
    image: "/images/hero.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function isPlaceholder(value: string) {
  return value.includes("XXXX");
}
