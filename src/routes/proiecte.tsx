import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "../components/cta-section";
import panel from "../assets/project-panel.jpg";
import lighting from "../assets/project-lighting.jpg";
import commercial from "../assets/project-commercial.jpg";
import before from "../assets/before-panel.jpg";
import socket from "../assets/project-socket.jpg";
import hero from "../assets/hero-electrician.jpg";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/proiecte")({
  head: () => ({
    meta: [
      { title: "Proiecte Realizate – Galerie Lucrări Electrice București" },
      { name: "description", content: "Galerie cu proiectele noastre electrice rezidențiale și comerciale realizate în București: tablouri, iluminat, instalații complete." },
      { property: "og:title", content: "Proiecte Realizate în București" },
      { property: "og:description", content: "Vezi proiectele Electric Expert: înainte și după, rezidențial și comercial." },
      { property: "og:url", content: "/proiecte" },
    ],
    links: [{ rel: "canonical", href: "/proiecte" }],
  }),
  component: Proiecte,
});

const projects = [
  { img: panel, title: "Înlocuire tablou siguranțe", location: "Sector 3", type: "Rezidențial" },
  { img: lighting, title: "Iluminat LED living", location: "Pipera", type: "Rezidențial" },
  { img: commercial, title: "Instalație birou open-space", location: "Sector 1", type: "Comercial" },
  { img: socket, title: "Montaj prize moderne", location: "Sector 6", type: "Rezidențial" },
  { img: hero, title: "Mentenanță hală industrială", location: "Voluntari", type: "Comercial" },
];

function Proiecte() {
  return (
    <>
      <PageHero eyebrow="Portofoliu" title="Proiecte realizate în București" subtitle="Lucrări rezidențiale și comerciale, executate la cele mai înalte standarde." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy-deep mb-8">Înainte și după</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <figure className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src={before} alt="Tablou electric vechi înainte de modernizare" loading="lazy" width={1024} height={768} className="w-full aspect-[4/3] object-cover" />
              <figcaption className="absolute top-3 left-3 rounded-md bg-destructive px-3 py-1 text-xs font-bold text-white uppercase">Înainte</figcaption>
            </figure>
            <figure className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src={panel} alt="Tablou electric modernizat după lucrare" loading="lazy" width={1024} height={768} className="w-full aspect-[4/3] object-cover" />
              <figcaption className="absolute top-3 left-3 rounded-md bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy-deep uppercase">După</figcaption>
            </figure>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy-deep mb-8">Galerie proiecte</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p)=>(
              <article key={p.title} className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 rounded-md bg-brand-navy-deep/85 backdrop-blur px-2.5 py-1 text-xs font-semibold text-white">{p.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-navy-deep">{p.title}</h3>
                  <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}, București</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Vrei un proiect similar?" />
    </>
  );
}