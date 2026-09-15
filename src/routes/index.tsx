import { createFileRoute } from "@tanstack/react-router";
import { Header, MobileDock } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Notice } from "@/components/site/notice";
import { Gallery } from "@/components/site/gallery";
import { Pricing } from "@/components/site/pricing";
import { HowItWorks } from "@/components/site/how-it-works";
import { Specs } from "@/components/site/specs";
import { Rules } from "@/components/site/rules";
import { Booking } from "@/components/site/booking";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Notice />
        <Gallery />
        <Pricing />
        <HowItWorks />
        <Specs />
        <Rules />
        <Booking />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
