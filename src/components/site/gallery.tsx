import { useEffect, useState } from "react";
import { PHOTOS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const photos = PHOTOS.gallery;
  const open = photos.find((p) => p.src === active) ?? null;

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.22em] text-mist uppercase">
            The castle
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Quiet white. Made for lawns and function rooms.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            All-white Oxford inflatable with slide — not a carnival. The photos
            below are style placeholders; swap the files in{" "}
            <span className="text-ink">/public/images/</span> for real party
            shots when you have them.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(photo.src)}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-paper-deep text-left shadow-soft",
                i === 0 && "sm:col-span-2 lg:col-span-4 lg:row-span-2 min-h-72 lg:min-h-96",
                i === 1 && "lg:col-span-2 min-h-56",
                i === 2 && "lg:col-span-2 min-h-56",
                i === 3 && "sm:col-span-2 lg:col-span-6 min-h-56 lg:min-h-80",
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="img-frame size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/50 to-transparent p-4 pt-10 text-xs text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo"
          onClick={() => setActive(null)}
        >
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-[88svh] max-w-full rounded-lg object-contain shadow-soft"
          />
          <button
            type="button"
            className="absolute top-4 right-4 rounded-md bg-cream px-3 py-2 text-sm text-ink"
            onClick={() => setActive(null)}
          >
            Close
          </button>
        </div>
      ) : null}
    </section>
  );
}
