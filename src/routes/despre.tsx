import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Clock, Award, Wrench, Users, MapPin } from "lucide-react";
import { PageHero, CTASection } from "../components/cta-section";
import heroImg from "../assets/hero-electrician.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi – Electric Expert București | Electricieni Autorizați" },
      { name: "description", content: "Companie locală de electricieni autorizați din București cu peste 10 ani de experiență. Aflați despre echipa și valorile noastre." },
      { property: "og:title", content: "Despre Electric Expert București" },
      { property: "og:description", content: "Electricieni autorizați ANRE, locali, cu peste 3.200 de lucrări finalizate în București." },
      { property: "og:url", content: "/despre" },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: Despre,
});

const stats = [
  { value: "10+", label: "Ani experiență" },
  { value: "3.200+", label: "Lucrări finalizate" },
  { value: "480+", label: "Clienți mulțumiți" },
  { value: "60 min", label: "Răspuns urgențe" },
];

const values = [
  { icon: ShieldCheck, title: "Autorizați ANRE", desc: "Toți electricienii dețin autorizație ANRE valabilă și asigurare profesională." },
  { icon: Clock, title: "Punctualitate", desc: "Respectăm intervalul orar comunicat. Dacă întârziem, te anunțăm telefonic." },
  { icon: Wrench, title: "Echipament profesional", desc: "Folosim scule și aparate de măsură de top: Fluke, Bosch, Knipex." },
  { icon: Award, title: "Garanție 24 luni", desc: "Oferim garanție scrisă la manoperă pentru fiecare lucrare executată." },
  { icon: Users, title: "Echipă locală", desc: "Suntem din București și cunoaștem fiecare cartier și tip de instalație." },
  { icon: MapPin, title: "Acoperire totală", desc: "Servim toate cele 6 sectoare ale Capitalei și județul Ilfov." },
];

function Despre() {
  return (
    <>
      <PageHero eyebrow="Despre noi" title="Compania locală în care bucureștenii au încredere" subtitle="Suntem o echipă de electricieni autorizați ANRE, dedicați să oferim servicii rapide, sigure și transparente." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img src={heroImg} alt="Echipa Electric Expert București" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-xl object-cover w-full aspect-square" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy-deep">Povestea Electric Expert București</h2>
            <p className="mt-4 text-foreground/80">Am pornit în 2014 cu o misiune simplă: să oferim bucureștenilor un electrician pe care să se poată baza. Astăzi, echipa noastră numără 8 electricieni autorizați și am intervenit la peste 3.200 de lucrări în toate sectoarele Capitalei.</p>
            <p className="mt-3 text-foreground/80">Lucrăm la fel de bine atât pentru un proprietar de apartament cu o priză defectă, cât și pentru un restaurant care are nevoie de instalație electrică nouă. Ne mândrim cu transparența prețurilor, garanția lucrărilor și răspunsul rapid la urgențe.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map(s=>(
                <div key={s.label} className="rounded-xl bg-secondary p-4 text-center">
                  <div className="text-3xl font-extrabold text-brand-navy-deep">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Valorile noastre</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy-deep">Ce ne diferențiază</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({icon:Icon,title,desc})=>(
              <div key={title} className="rounded-xl bg-white border border-border p-6">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-yellow text-brand-navy-deep"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-4 font-bold text-brand-navy-deep">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}