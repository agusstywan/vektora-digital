import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/kontak")({
  head: () => seo("Kontak — Vektora Digital", "Hubungi Vektora Digital via WhatsApp 085643672009 atau email agosst7@gmail.com."),
  component: () => <Contact asPage />,
});
