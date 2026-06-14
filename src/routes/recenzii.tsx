import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import { PageHero, CTASection } from "../components/cta-section";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii Clienți – Electric Expert București | 4.9/5" },
      { name: "description", content: "Peste 480 de recenzii reale de la clienți din București. Vezi ce spun despre serviciile noastre de electrician autorizat." },
      { property: "og:title", content: "Recenzii Electric Expert București" },
      { property: "og:description", content: "Rating 4.9/5 din peste 480 de recenzii verificate." },
      { property: "og:url", content: "/recenzii" },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: Recenzii,
});

const reviews = [
  { name: "Andrei Popescu", area: "Sector 3", text: "Au venit în 45 de minute pentru o defecțiune la tablou. Profesioniști, curați și prețuri corecte. Recomand!" },
  { name: "Mihaela Ionescu", area: "Sector 6", text: "Am refăcut instalația electrică complet într-un apartament de 3 camere. Echipă punctuală, totul executat impecabil." },
  { name: "Radu Stanciu", area: "Sector 1", text: "Cei mai buni electricieni cu care am lucrat. Explică totul clar, dau preț ferm înainte și termină la timp." },
  { name: "Cristina Dumitrescu", area: "Pipera", text: "Am chemat pentru montaj spoturi LED și au făcut o treabă excelentă. Foarte atenți la detalii și politicoși." },
  { name: "Vlad Marinescu", area: "Sector 2", text: "Pană de curent la 11 noaptea, au venit în mai puțin de o oră și au rezolvat. Salvatori adevărați!" },
  { name: "Elena Georgescu", area: "Voluntari", text: "Au modernizat tabloul electric și au pus siguranțe diferențiale. Lucrare curată, factură corectă, garanție inclusă." },
];

function Recenzii() {
  return (
    <>
      <PageHero eyebrow="Recenzii" title="Ce spun clienții despre noi" subtitle="Rating mediu 4.9/5 din peste 480 de recenzii verificate de la clienți reali din București." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r)=>(
              <article key={r.name} className="rounded-xl bg-white border border-border p-6 shadow-sm flex flex-col">
                <div className="flex text-brand-yellow mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" fill="currentColor"/>)}</div>
                <p className="text-foreground/85 flex-1">"{r.text}"</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-brand-yellow font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-bold text-brand-navy-deep">{r.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.area}, București</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Alătură-te clienților noștri mulțumiți" />
    </>
  );
}