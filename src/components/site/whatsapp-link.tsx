import { MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEFAULT_WHATSAPP_TEXT, SITE, isWhatsAppReady, whatsappUrl } from "@/lib/site";

type Props = {
  className?: string;
  variant?: "primary" | "outline" | "ghost" | "cream";
  size?: "sm" | "default" | "lg";
  label?: string;
  prefill?: string;
};

export function WhatsAppLink({
  className,
  variant = "outline",
  size = "default",
  label = "WhatsApp us",
  prefill = DEFAULT_WHATSAPP_TEXT,
}: Props) {
  const href = whatsappUrl(prefill);
  const ready = isWhatsAppReady();

  if (ready && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant, size }), className)}
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      title={`WhatsApp number placeholder: ${SITE.whatsappDisplay}. Swap it in src/lib/site.ts.`}
      onClick={() => {
        const el = document.getElementById("book");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </Button>
  );
}
