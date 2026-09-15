import { Check, Minus } from "lucide-react";
import { SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const included = [
  "All-white Oxford bounce house, slide and ball pit",
  "Electric blower",
  "Free delivery on Sentosa Island",
  "Free pickup on Sentosa Island",
];

const notIncluded = [
  "On-site setup or staffing",
  "Staffing or on-site supervision",
  "Plastic balls for the pit",
  "Islandwide or mainland delivery",
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            One rate. One island.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
            Built for kids’ birthdays, condo functions and hotel events on
            Sentosa. Clear space, a nearby power point, and a few minutes to
            inflate — that’s all you need.
          </p>
        </div>

        <div className="rounded-2xl bg-paper p-6 shadow-soft sm:p-8">
          <p className="text-sm text-stone">Per day</p>
          <p className="mt-1 font-serif text-6xl leading-none font-medium tracking-tight">
            S${SITE.priceSgd}
          </p>
          <p className="mt-3 text-sm text-stone">{SITE.damageNote}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <ul className="space-y-3">
              <li className="text-xs font-medium tracking-[0.18em] text-mist uppercase">
                Included
              </li>
              {included.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-snug">
                  <Check className="mt-0.5 size-4 shrink-0 text-ok" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li className="text-xs font-medium tracking-[0.18em] text-mist uppercase">
                Not included
              </li>
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-snug text-stone">
                  <Minus className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#book"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 h-12 w-full")}
          >
            Book this date
          </a>
        </div>
      </div>
    </section>
  );
}
