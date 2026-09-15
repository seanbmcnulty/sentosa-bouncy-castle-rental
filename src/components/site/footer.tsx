import { SITE, isWhatsAppReady, whatsappUrl } from "@/lib/site";
import { SiteMark } from "@/components/site/mark";

export function Footer() {
  const wa = whatsappUrl();
  return (
    <footer className="border-t border-line bg-paper pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <SiteMark className="size-6" />
            <p className="font-serif text-xl font-medium">{SITE.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
            All-white bounce house rental for Sentosa Island. S${SITE.priceSgd} a
            day. We deliver and collect — you set up and pack down.
          </p>
        </div>
        <div className="text-sm text-stone">
          <p className="font-medium text-ink">WhatsApp</p>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block hover:text-ink"
            >
              {SITE.whatsappDisplay}
            </a>
          ) : (
            <p className="mt-1">
              {SITE.whatsappDisplay}{" "}
              <span className="text-mist">(placeholder — set in site.ts)</span>
            </p>
          )}
          <p className="mt-4 font-medium text-ink">Service area</p>
          <p className="mt-1">Sentosa Island, Singapore</p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-mist sm:px-8">
          {SITE.name} delivers and collects on Sentosa Island only. Customers are
          responsible for setup, pack-down, adult supervision, and a nearby power
          point. Bookings are confirmed after we review your enquiry. CE / KC
          certified equipment. No damage deposit — you’re billed only if the
          castle is torn, stained or lost.
          {isWhatsAppReady() ? "" : " WhatsApp number not yet connected."}
        </p>
      </div>
    </footer>
  );
}
