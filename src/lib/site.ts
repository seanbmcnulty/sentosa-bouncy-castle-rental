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
    "Rent an all-white Oxford bounce house with slide on Sentosa Island. S$249 a day, free delivery and pickup. You set up — we collect. For kids’ birthdays, condos and hotel functions.",

  whatsappDisplay: "+65 XXXX XXXX",
  whatsappE164: "",

  googleFormEmbedUrl: "",

  priceSgd: 249,
  damageNote: "No deposit. You’re billed only if the castle is torn, stained or lost.",

  size: "approximately 4m × 4.5m × 3m (L × W × H)",
  sizeShort: "4m × 4.5m × 3m",
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
    src: "/images/hero.jpg",
    alt: "All-white bounce house with slide on a tropical Sentosa villa lawn at golden hour",
    caption: "Placeholder — swap /public/images/hero.jpg with a real party photo.",
  },
  gallery: [
    {
      src: "/images/gallery-entrance.jpg",
      alt: "Arched entrance of the all-white bounce house in a tropical garden",
      caption: "Placeholder — swap gallery-entrance.jpg",
    },
    {
      src: "/images/gallery-courtyard.jpg",
      alt: "All-white bounce house with slide in a luxury condominium courtyard",
      caption: "Placeholder — swap gallery-courtyard.jpg",
    },
    {
      src: "/images/gallery-slide.jpg",
      alt: "Close-up of the white inflatable slide",
      caption: "Placeholder — swap gallery-slide.jpg",
    },
    {
      src: "/images/gallery-dusk.jpg",
      alt: "All-white bounce house on a hotel lawn at dusk",
      caption: "Placeholder — swap gallery-dusk.jpg",
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
