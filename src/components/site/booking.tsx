import { type ComponentProps, type FormEvent, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { SITE, isWhatsAppReady, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { cn } from "@/lib/utils";

type Enquiry = {
  fullName: string;
  mobile: string;
  email: string;
  eventDate: string;
  deliveryWindow: string;
  pickup: string;
  address: string;
  venueName: string;
  clearSpace: string;
  kidsCount: string;
  notes: string;
};

const fieldClass =
  "mt-1.5 h-11 w-full rounded-md border border-line bg-cream px-3 text-sm text-ink outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-mist focus:border-ink/30 focus:ring-2 focus:ring-ink/15";

const labelClass = "block text-sm font-medium";

function formatEnquiry(data: Enquiry) {
  const windowLabel =
    SITE.deliveryWindows.find((w) => w.value === data.deliveryWindow)?.label ??
    data.deliveryWindow;
  const pickupLabel =
    SITE.pickupOptions.find((p) => p.value === data.pickup)?.label ?? data.pickup;

  return [
    `New bounce house enquiry — ${SITE.name}`,
    ``,
    `Name: ${data.fullName}`,
    `Mobile / WhatsApp: ${data.mobile}`,
    `Email: ${data.email}`,
    `Event date: ${data.eventDate}`,
    `Delivery window: ${windowLabel}`,
    `Pickup: ${pickupLabel}`,
    `Venue: ${data.venueName}`,
    `Address: ${data.address}`,
    `Clear space: ${data.clearSpace}`,
    `Approx. kids: ${data.kidsCount}`,
    data.notes ? `Notes: ${data.notes}` : null,
    ``,
    `Confirmed: venue is on Sentosa; self-setup; power point available.`,
    `Agrees to S$${SITE.priceSgd}/day. Liable for damage; no deposit.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function GoogleForm() {
  return (
    <div className="overflow-hidden rounded-2xl bg-cream shadow-soft">
      <iframe
        title="Booking form"
        src={SITE.googleFormEmbedUrl}
        className="h-[52rem] w-full border-0"
      />
    </div>
  );
}

export function Booking() {
  const [sent, setSent] = useState<Enquiry | null>(null);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    const data: Enquiry = {
      fullName: String(fd.get("fullName") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      eventDate: String(fd.get("eventDate") ?? ""),
      deliveryWindow: String(fd.get("deliveryWindow") ?? ""),
      pickup: String(fd.get("pickup") ?? ""),
      address: String(fd.get("address") ?? ""),
      venueName: String(fd.get("venueName") ?? ""),
      clearSpace: String(fd.get("clearSpace") ?? ""),
      kidsCount: String(fd.get("kidsCount") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    };
    setSent(data);
    try {
      localStorage.setItem("sbcr-last-enquiry", JSON.stringify(data));
    } catch {
      /* ignore */
    }
    const href = whatsappUrl(formatEnquiry(data));
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  }

  const waAfterSend = sent ? whatsappUrl(formatEnquiry(sent)) : null;

  return (
    <section id="book" className="scroll-mt-20 bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_20rem]">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
            Book online
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Request a date.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
            This is an enquiry — we’ll confirm availability and delivery timing.
            No payment is taken here.
          </p>

          <div className="mt-10">
            {SITE.googleFormEmbedUrl ? (
              <GoogleForm />
            ) : sent ? (
              <SuccessCard enquiry={sent} waHref={waAfterSend} onReset={() => setSent(null)} />
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl bg-cream p-5 shadow-soft sm:p-8"
                noValidate={false}
              >
                <fieldset className="grid gap-5 sm:grid-cols-2">
                  <legend className="sr-only">Your details</legend>
                  <Field label="Full name" name="fullName" autoComplete="name" required />
                  <Field
                    label="Mobile / WhatsApp"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder="+65"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="sm:col-span-2"
                  />
                </fieldset>

                <fieldset className="mt-8 grid gap-5 sm:grid-cols-2">
                  <legend className="col-span-full font-serif text-xl font-medium">
                    When
                  </legend>
                  <Field
                    label="Event date"
                    name="eventDate"
                    type="date"
                    required
                    min={today}
                  />
                  <div>
                    <span className={labelClass}>Preferred delivery window</span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {SITE.deliveryWindows.map((w) => (
                        <label
                          key={w.value}
                          className="flex min-h-11 cursor-pointer flex-col items-center justify-center rounded-md border border-line bg-paper px-2 py-2 text-center has-checked:border-ink has-checked:bg-paper-deep"
                        >
                          <input
                            type="radio"
                            name="deliveryWindow"
                            value={w.value}
                            required
                            className="sr-only"
                            defaultChecked={w.value === "morning"}
                          />
                          <span className="text-sm font-medium">{w.label}</span>
                          <span className="text-xs text-mist">{w.hint}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <span className={labelClass}>Preferred pickup</span>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {SITE.pickupOptions.map((p, i) => (
                        <label
                          key={p.value}
                          className="flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-line bg-paper px-3 py-2 text-sm font-medium has-checked:border-ink has-checked:bg-paper-deep"
                        >
                          <input
                            type="radio"
                            name="pickup"
                            value={p.value}
                            required
                            className="sr-only"
                            defaultChecked={i === 0}
                          />
                          {p.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-8 grid gap-5">
                  <legend className="font-serif text-xl font-medium">Venue</legend>
                  <Field
                    label="Condo / hotel name"
                    name="venueName"
                    required
                    placeholder="e.g. The Residences at W, Sentosa Cove"
                  />
                  <Field
                    label="Sentosa delivery address"
                    name="address"
                    required
                    placeholder="Unit, building, Sentosa"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Approx. clear space"
                      name="clearSpace"
                      required
                      placeholder="e.g. 6m × 6m lawn"
                    />
                    <Field
                      label="Approx. number of kids"
                      name="kidsCount"
                      type="number"
                      min="1"
                      required
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className={labelClass}>
                      Notes / access instructions
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      className={cn(fieldClass, "h-auto py-2.5")}
                      placeholder="Gate code, loading bay, which lawn…"
                    />
                  </div>
                </fieldset>

                <fieldset className="mt-8 space-y-3">
                  <legend className="font-serif text-xl font-medium">
                    Please confirm
                  </legend>
                  <CheckRow
                    name="onSentosa"
                    label="The venue is on Sentosa Island."
                  />
                  <CheckRow
                    name="selfSetup"
                    label="I’ll take care of inflating and packing down — you deliver and collect."
                  />
                  <CheckRow
                    name="powerPoint"
                    label="A nearby power point is available for the blower."
                  />
                  <CheckRow
                    name="agreePrice"
                    label={`I agree to S$${SITE.priceSgd} per day. I am liable for tears, stains or loss — no deposit is collected.`}
                  />
                </fieldset>

                <Button type="submit" size="lg" className="mt-8 h-12 w-full">
                  Send enquiry
                </Button>
                <p className="mt-3 text-center text-xs text-mist">
                  {isWhatsAppReady()
                    ? "Submitting also opens WhatsApp with your details."
                    : `WhatsApp number is still a placeholder (${SITE.whatsappDisplay}). Use this form for now.`}
                </p>
              </form>
            )}
          </div>
        </div>

        <aside className="lg:pt-28">
          <div className="rounded-2xl bg-cream p-6 shadow-soft lg:sticky lg:top-24">
            <p className="font-serif text-2xl font-medium">At a glance</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
              <li>S${SITE.priceSgd} per day</li>
              <li>Free delivery & pickup on Sentosa only</li>
              <li>Easy self-setup · blower included</li>
              <li>Blower included · power point required</li>
              <li>{SITE.sizeShort} · bounce, slide, ball pit</li>
              <li>{SITE.damageNote}</li>
            </ul>
            <div className="mt-6">
              <WhatsAppLink variant="outline" className="w-full" />
            </div>
            <p className="mt-3 text-xs text-mist">
              WhatsApp: {SITE.whatsappDisplay}
              {isWhatsAppReady() ? "" : " · placeholder"}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  className,
  ...props
}: ComponentProps<"input"> & { label: string; name: string }) {
  const id = name;
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input id={id} name={name} className={fieldClass} {...props} />
    </div>
  );
}

function CheckRow({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-md border border-line bg-paper p-3 text-sm leading-snug has-checked:border-ink">
      <input
        type="checkbox"
        name={name}
        required
        value="yes"
        className="mt-0.5 size-4 shrink-0 accent-charcoal"
      />
      <span>{label}</span>
    </label>
  );
}

function SuccessCard({
  enquiry,
  waHref,
  onReset,
}: {
  enquiry: Enquiry;
  waHref: string | null;
  onReset: () => void;
}) {
  return (
    <div className="rounded-2xl bg-cream p-6 shadow-soft sm:p-10">
      <div className="flex size-10 items-center justify-center rounded-full bg-ok/10 text-ok">
        <Check className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-serif text-3xl font-medium tracking-tight">
        Enquiry received.
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">
        We’ll confirm {enquiry.eventDate} at {enquiry.venueName}. Keep an eye
        on WhatsApp and email. Nothing is booked until we reply.
      </p>
      <pre className="mt-6 overflow-x-auto rounded-lg bg-paper p-4 text-xs leading-relaxed text-stone whitespace-pre-wrap">
        {formatEnquiry(enquiry)}
      </pre>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        {waHref ? (
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            <Button type="button" className="w-full sm:w-auto">
              Open WhatsApp
            </Button>
          </a>
        ) : (
          <WhatsAppLink />
        )}
        <Button type="button" variant="outline" onClick={onReset}>
          Send another
        </Button>
      </div>
    </div>
  );
}
