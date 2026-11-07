import { createFileRoute } from "@tanstack/react-router";
import { Works, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/karya")({
  head: () => seo("Karya — Vektora Digital", "Beberapa brand dan bisnis yang pernah dibantu Vektora Digital."),
  component: () => (
    <>
      <Works asPage />
      <Contact />
    </>
  ),
});
