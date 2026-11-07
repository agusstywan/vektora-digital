import { createFileRoute } from "@tanstack/react-router";
import { Services, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/layanan")({
  head: () => seo("Layanan — Vektora Digital", "Brand identity, desain media sosial, branding kit, website, dan solusi e-commerce dari Vektora Digital."),
  component: () => (
    <>
      <Services asPage />
      <Contact />
    </>
  ),
});
