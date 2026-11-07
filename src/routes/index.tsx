import { createFileRoute } from "@tanstack/react-router";
import { Hero, Services, Pricing, Works, Process, About, Contact } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Vektora Digital — Your Branding Solutions",
      "Vektora Digital membantu bisnis membangun identitas visual, desain profesional, dan solusi website untuk brand yang ingin berkembang.",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Works />
      <Process />
      <About />
      <Contact />
    </>
  );
}
