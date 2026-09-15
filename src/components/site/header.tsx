import { SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { SiteMark } from "@/components/site/mark";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how", label: "How it works" },
  { href: "#rules", label: "Rules" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink">
          <SiteMark className="size-6 shrink-0 sm:size-7" />
          <span className="truncate font-serif text-lg font-medium tracking-tight sm:text-xl">
            {SITE.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "sm:h-11 sm:px-5")}
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
}

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a href="#book" className={cn(buttonVariants({ variant: "primary" }), "h-12 flex-1")}>
          Book now
        </a>
        <a href="#book" className={cn(buttonVariants({ variant: "outline" }), "h-12 flex-1")}>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
