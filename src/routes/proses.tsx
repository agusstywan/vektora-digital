import { createFileRoute } from "@tanstack/react-router";
import { Process, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/proses")({
  head: () => seo("Proses — Vektora Digital", "Lima tahap kerja Vektora Digital: discovery, creative direction, design & development, review, dan final delivery."),
  component: () => (
    <>
      <Process asPage />
      <Contact />
    </>
  ),
});
