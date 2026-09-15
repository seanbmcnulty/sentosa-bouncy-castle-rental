import { PHOTOS, SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div className="relative min-h-[88svh] overflow-hidden bg-ink">
        <img
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          className="absolute inset-0 size-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/25 to-ink/15"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-32 pt-28 sm:px-8 sm:pb-20 lg:pb-24">
          <div className="stagger-in max-w-2xl text-cream">
            <p className="text-xs font-medium tracking-[0.22em] text-cream/80 uppercase">
              Sentosa Island · Kids’ parties
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-cream sm:text-6xl lg:text-7xl">
              The all-white bounce house for Sentosa.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              An Oxford inflatable with bounce area, slide and ball pit.{" "}
              <span className="text-cream">S${SITE.priceSgd} a day</span>, free
              delivery and pickup on Sentosa Island.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#book"
                className={cn(buttonVariants({ variant: "cream", size: "lg" }), "h-12")}
              >
                Book now
              </a>
              <WhatsAppLink variant="outline" size="lg" className="h-12 border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50" />
            </div>
            <p className="mt-6 text-sm text-cream/75">
              CE / KC certified · Easy self-setup · Sentosa delivery and pickup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
