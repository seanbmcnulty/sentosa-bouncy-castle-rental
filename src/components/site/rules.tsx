const RULES = [
  {
    title: "Sentosa only",
    body: "Free delivery and pickup are for Sentosa Island only. We do not offer islandwide free delivery.",
  },
  {
    title: "Self-setup",
    body: "We deliver and pick up. You inflate, supervise, and pack down. We do not set up or staff the castle.",
  },
  {
    title: "Power point",
    body: "The blower needs a nearby 13A power point for the whole booking. No power, no bounce.",
  },
  {
    title: "Clear space",
    body: `You need a reasonably flat, clear area larger than ${"4m × 4.5m"} — lawn, function deck, or indoor hall with ceiling height to spare.`,
  },
  {
    title: "Damage",
    body: "No deposit is collected. If the castle comes back torn, stained, or missing parts, we’ll bill the repair or replacement cost.",
  },
  {
    title: "Supervision",
    body: "An adult must supervise children the entire time the castle is inflated. This is not a staffed attraction.",
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
          Please read this before you book.
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
