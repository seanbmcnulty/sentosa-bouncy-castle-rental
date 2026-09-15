/**
 * Easy-edit business settings.
 *
 * To go live:
 * 1. Set `whatsappE164` to digits only with country code, e.g. "6591234567"
 * 2. Set `whatsappDisplay` to the printed number, e.g. "+65 9123 4567"
 * 3. Optional: paste a Google Form embed URL into `googleFormEmbedUrl`
 *    to replace the built-in booking form with an iframe.
 * 4. Swap the JPEGs in /public/images/ with real party photos (same filenames).
 */
export const SITE = {
  name: "Sentosa Bouncy Castle Rental Co",
  shortName: "Sentosa Bouncy Castle",
  urlPath: "/",
  locale: "en-SG",

  seoTitle: "White Bouncy Castle Rental Sentosa | Sentosa Bouncy Castle Rental Co",
  seoDescription:
    "Rent an all-white Oxford bounce house with slide and ball pit on Sentosa Island. S$249 a day, free delivery and pickup. Easy self-setup. For kids’ birthdays, condos and hotel functions.",

  whatsappDisplay: "+65 XXXX XXXX",
  whatsappE164: "",

  googleFormEmbedUrl: "",

  priceSgd: 249,
  damageNote: "No deposit. You’re billed only if the castle is torn, stained or lost.",

  size: "4.3m × 4.5m × 3.0m (14 ft × 14.9 ft × 10 ft)",
  sizeShort: "4.3m × 4.5m × 3.0m",
  bounceArea: "2.96m × 2.44m (9.7 ft × 8 ft)",
  ballPit: "4.3m × 1.3m (14 ft × 4.3 ft) — plastic balls not included",
  clearSpace: "about 5.5m × 5.5m of reasonably flat ground; 3.2m+ ceiling if indoors",
  material: "All-white Oxford inflatable",

  deliveryWindows: [
    { value: "morning", label: "Morning", hint: "8:00–11:00" },
    { value: "afternoon", label: "Afternoon", hint: "12:00–16:00" },
    { value: "evening", label: "Evening", hint: "16:00–19:00" },
  ] as const,

  pickupOptions: [
    { value: "same-day-evening", label: "Same-day evening" },
    { value: "next-morning", label: "Next morning" },
  ] as const,
} as const;

export const PHOTOS = {
  hero: {
    src: "/images/hero.jpg?v=3",
    alt: "All-white bounce house with slide, ball pit and gold balloon garland on turf at dusk",
    caption: "",
  },
  gallery: [
    {
      src: "/images/gallery-entrance.jpg?v=3",
      alt: "Front view of the all-white bounce house with slide and ball pit",
      caption: "",
    },
    {
      src: "/images/gallery-courtyard.jpg?v=3",
      alt: "Studio view of the white bounce house with pastel balloons, slide and ball pit",
      caption: "",
    },
    {
      src: "/images/gallery-slide.jpg?v=3",
      alt: "White inflatable slide and front ball pit",
      caption: "",
    },
    {
      src: "/images/gallery-dusk.jpg?v=3",
      alt: "Children playing in the all-white bounce house with slide and ball pit",
      caption: "",
    },
  ],
} as const;

export function isWhatsAppReady() {
  return SITE.whatsappE164.replace(/\D/g, "").length >= 10;
}

export function whatsappUrl(prefill?: string) {
  const digits = SITE.whatsappE164.replace(/\D/g, "");
  if (digits.length < 10) return null;
  const url = new URL(`https://wa.me/${digits}`);
  if (prefill) url.searchParams.set("text", prefill);
  return url.toString();
}

export const DEFAULT_WHATSAPP_TEXT =
  "Hello — I’d like to book the all-white bounce house on Sentosa.";
