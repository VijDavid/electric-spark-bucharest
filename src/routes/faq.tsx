import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "../components/cta-section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Cât costă o intervenție de electrician în București?", a: "Deplasarea în București costă 80 lei și se include în costul lucrării dacă o executăm. O reparație simplă pornește de la 150 lei. Pentru lucrări mai complexe oferim deviz gratuit înainte de începere." },
  { q: "În cât timp ajungeți la o urgență?", a: "Răspundem la urgențe în maxim 60 de minute oriunde în București, 24/7, inclusiv în weekend și sărbători legale." },
  { q: "Sunteți electricieni autorizați ANRE?", a: "Da, toți electricienii noștri dețin autorizație ANRE valabilă (grad IIA și IIIA) și asigurare de răspundere civilă profesională." },
  { q: "Ce garanție oferiți la lucrări?", a: "Oferim 24 de luni garanție scrisă la manopera executată. Pentru materialele furnizate de noi se aplică garanția producătorului." },
  { q: "Emiteți factură fiscală?", a: "Da, lucrăm cu factură fiscală pentru toți clienții – persoane fizice și juridice. Acceptăm plata cu cardul, transfer bancar sau cash." },
  { q: "Pot obține un deviz înainte de lucrare?", a: "Absolut. Pentru lucrările de peste 500 lei venim gratuit la fața locului, evaluăm și oferim deviz scris. Pentru reparații mici, vă spunem prețul telefonic." },
  { q: "Lucrați și pentru spații comerciale?", a: "Da, executăm lucrări electrice pentru birouri, magazine, restaurante și mici unități de producție. Oferim și contracte de mentenanță." },
  { q: "Ce zone din București acoperiți?", a: "Acoperim toate cele 6 sectoare ale Bucureștiului și județul Ilfov: Pipera, Băneasa, Voluntari, Otopeni, Bragadiru, Chiajna și împrejurimi." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Întrebări Frecvente – Electrician București | Electric Expert" },
      { name: "description", content: "Răspunsuri la întrebările frecvente despre serviciile noastre electrice: prețuri, urgențe, garanție, autorizații." },
      { property: "og:title", content: "Întrebări Frecvente – Electric Expert" },
      { property: "og:description", content: "Tot ce trebuie să știi despre serviciile noastre electrice în București." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Întrebări frecvente" subtitle="Tot ce trebuie să știi înainte de a ne contacta." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl border border-border bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary transition-colors"
                >
                  <span className="font-semibold text-brand-navy-deep">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand-navy transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-foreground/80 text-sm leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
      <CTASection title="Mai ai întrebări?" subtitle="Sună-ne sau scrie-ne și îți răspundem în maxim 15 minute." />
    </>
  );
}