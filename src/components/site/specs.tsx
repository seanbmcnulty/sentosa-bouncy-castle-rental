import { SITE } from "@/lib/site";

const ROWS = [
  { label: "Size", value: SITE.size },
  { label: "Material", value: SITE.material },
  { label: "Layout", value: "Bounce house with attached slide" },
  { label: "Power", value: "Blower included. Nearby 13A power point required." },
  { label: "Setup", value: "Self-setup and self pack-down. We do not inflate or staff." },
  { label: "Safety", value: "CE / KC certified. Suitable for kids’ parties with adult supervision." },
  { label: "Best for", value: "Birthdays, condo functions, hotel events on Sentosa." },
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
