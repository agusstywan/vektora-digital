import { createFileRoute } from "@tanstack/react-router";
import { Pricing, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/paket-website")({
  head: () => seo("Paket Website — Vektora Digital", "Paket website Vektora Digital mulai Rp300.000 — BASIC, STARTER, PRO, PREMIUM, dan CUSTOM."),
  component: () => (
    <>
      <Pricing asPage />
      <Contact />
    </>
  ),
});
