const RULES = [
  {
    title: "Sentosa only",
    body: "Free delivery and pickup are for Sentosa Island only. We do not offer islandwide free delivery.",
  },
  {
    title: "Easy self-setup",
    body: "We deliver and pick up. Inflation takes a few minutes with the blower included; pack-down is just as simple. We don’t stay on site.",
  },
  {
    title: "Power point",
    body: "Please have a nearby 13A power point ready for the blower for the whole booking.",
  },
  {
    title: "Clear space",
    body: "You need about 5.5m × 5.5m of reasonably flat ground — the castle is 4.3m × 4.5m including the ball pit — and 3.2m+ ceiling if indoors.",
  },
  {
    title: "Damage",
    body: "No deposit is collected. If the castle comes back torn, stained, or missing parts, we’ll bill the repair or replacement cost.",
  },
  {
    title: "Supervision",
    body: "Please have an adult supervising children whenever the castle is inflated.",
  },
];

export function Rules() {
  return (
    <section id="rules" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
          Fine print
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          A few practical notes.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((rule) => (
            <article
              key={rule.title}
              className="rounded-xl bg-cream p-6 shadow-soft"
            >
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {rule.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{rule.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
