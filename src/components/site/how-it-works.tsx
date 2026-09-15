const STEPS = [
  {
    n: "01",
    title: "Book",
    body: "Send the date, Sentosa address, and your delivery and pickup windows. We’ll confirm availability.",
  },
  {
    n: "02",
    title: "We deliver",
    body: "We drop the packed castle and blower at your condo or hotel on Sentosa.",
  },
  {
    n: "03",
    title: "Inflate & enjoy",
    body: "Plug in a nearby power point and inflate — it takes a few minutes. An adult should supervise while it’s up.",
  },
  {
    n: "04",
    title: "We collect",
    body: "Pack it down dry when you’re done. We pick up the same evening or the next morning.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          Four simple steps.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
          We bring it to you, you host the party, we take it away. Inflation
          and pack-down are straightforward — blower included.
        </p>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-cream p-6 sm:p-7">
              <p className="font-serif text-3xl text-mist">{step.n}</p>
              <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
