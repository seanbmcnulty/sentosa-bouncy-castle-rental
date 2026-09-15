import { SITE } from "@/lib/site";

const ROWS = [
  { label: "Overall size", value: SITE.size },
  { label: "Bounce area", value: SITE.bounceArea },
  { label: "Ball pit", value: SITE.ballPit },
  { label: "Slide", value: "Attached side slide, about 1.0 m (3.2 ft)" },
  { label: "Material", value: SITE.material },
  { label: "Layout", value: "Bounce house + slide + ball pit (3-in-1)" },
  { label: "Clear space", value: SITE.clearSpace },
  { label: "Power", value: "Blower included. Nearby 13A power point required." },
  { label: "Setup", value: "Easy self-setup — we deliver and collect. Inflation takes a few minutes with the blower included." },
  { label: "Safety", value: "CE / KC certified. Suitable for kids’ parties with adult supervision." },
  { label: "Best for", value: "Birthdays, condo functions, hotel events on Sentosa. Outdoor lawns preferred; indoor only with 3.2 m+ ceiling." },
  { label: "Where we go", value: "Sentosa Island only for free delivery and pickup." },
];

export function Specs() {
  return (
    <section id="specs" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
          Specs
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          What you’re renting.
        </h2>

        <dl className="mt-12 divide-y divide-line border-y border-line">
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <dt className="text-sm font-medium">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-stone sm:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
