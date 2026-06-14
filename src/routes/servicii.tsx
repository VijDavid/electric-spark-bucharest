import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Zap, AlertTriangle, Lightbulb, Plug, Building2, Cable, Settings2, CheckCircle2 } from "lucide-react";
import { PageHero, CTASection } from "../components/cta-section";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii Electrice București – Instalații, Reparații, Urgențe" },
      { name: "description", content: "Servicii electrice complete în București: instalații, înlocuire tablou siguranțe, iluminat, prize, urgențe 24/7, lucrări comerciale." },
      { property: "og:title", content: "Servicii Electrice București" },
      { property: "og:description", content: "Toate serviciile electrice de care ai nevoie, executate de electricieni autorizați." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: Servicii,
});

const services = [
  { icon: Cable, title: "Instalații electrice", points: ["Instalații complete apartamente și case","Cablu nou, conform normativelor I7","Schemă electrică & proces verbal","Garanție 24 luni"] },
  { icon: Wrench, title: "Reparații electrice", points: ["Diagnoză și depanare","Reparații prize, întrerupătoare","Înlocuire siguranțe defecte","Verificări instalație"] },
  { icon: Zap, title: "Înlocuire tablou siguranțe", points: ["Tablouri Schneider, Hager, Legrand","Diferențial și siguranțe automate","Marcaj circuite","Conform ANRE"] },
  { icon: Settings2, title: "Modernizare tablou electric", points: ["Upgrade la siguranțe diferențiale","Protecție supratensiuni","Reorganizare circuite","Etichetare profesională"] },
  { icon: Lightbulb, title: "Montaj iluminat", points: ["Spoturi LED & benzi LED","Candelabre și aplice","Iluminat exterior","Sisteme smart home"] },
  { icon: Plug, title: "Prize și întrerupătoare", points: ["Montaj prize noi","Înlocuire întrerupătoare","Prize cu USB / smart","Circuite dedicate"] },
  { icon: AlertTriangle, title: "Urgențe electrice 24/7", points: ["Răspuns în maxim 60 min","Scurtcircuite & pene curent","Tablouri arse","Disponibil weekend și sărbători"] },
  { icon: Building2, title: "Servicii comerciale", points: ["Birouri, magazine, restaurante","PRAM și verificări periodice","Mentenanță contractuală","Facturare cu TVA"] },
];

function Servicii() {
  return (
    <>
      <PageHero eyebrow="Servicii" title="Toate serviciile electrice de care ai nevoie" subtitle="De la montajul unei prize la refacerea completă a instalației – avem echipa și experiența potrivită." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          {services.map(({icon:Icon,title,points})=>(
            <article key={title} className="rounded-xl bg-white border border-border p-6 md:p-8 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy text-brand-yellow"><Icon className="h-7 w-7" /></div>
                <div className="min-w-0">
                  <h2 className="text-xl font-extrabold text-brand-navy-deep">{title}</h2>
                  <ul className="mt-3 space-y-2">
                    {points.map(p=>(
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/85"><CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-yellow-deep shrink-0" /> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}