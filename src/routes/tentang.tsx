import { createFileRoute } from "@tanstack/react-router";
import { About, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tentang")({
  head: () => seo("Tentang — Vektora Digital", "Vektora Digital membantu bisnis menerjemahkan ide dan karakter menjadi solusi kreatif yang relevan."),
  component: () => (
    <>
      <About asPage />
      <Contact />
    </>
  ),
});
