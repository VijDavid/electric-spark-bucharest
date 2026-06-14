import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ShieldCheck, Clock, Award, ThumbsUp, Zap, Star,
  CheckCircle2, AlertTriangle, MapPin, Wrench, Lightbulb, Plug,
  Building2, Wallet, ArrowRight,
} from "lucide-react";
import heroImg from "../assets/hero-electrician.jpg";
import { PHONE, PHONE_DISPLAY } from "../components/site-layout";
import { CTASection } from "../components/cta-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrician Autorizat București – Intervenții 24/7 | Electric Expert" },
      { name: "description", content: "Electrician autorizat în București: instalații, reparații, tablouri, urgențe 24/7. Răspuns rapid în toate sectoarele. Sună 0721 456 789." },
      { property: "og:title", content: "Electrician Autorizat București – Intervenții 24/7" },
      { property: "og:description", content: "Echipă de electricieni autorizați ANRE. Intervenții rapide în București și Ilfov." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Wrench, title: "Instalații electrice", desc: "Instalații complete pentru apartamente, case și spații comerciale." },
  { icon: Zap, title: "Tablou de siguranțe", desc: "Înlocuire și modernizare tablouri electrice conform normativelor." },
  { icon: AlertTriangle, title: "Urgențe 24/7", desc: "Intervenții rapide în maxim 60 de minute în București." },
  { icon: Lightbulb, title: "Iluminat & LED", desc: "Montaj corpuri de iluminat, spoturi LED, candelabre, benzi LED." },
  { icon: Plug, title: "Prize & întrerupătoare", desc: "Montaj și înlocuire prize, întrerupătoare, variatoare." },
  { icon: Building2, title: "Servicii comerciale", desc: "Birouri, magazine, restaurante – soluții electrice profesionale." },
];

const reasons = [
  { icon: ShieldCheck, title: "Autorizat ANRE", desc: "Toți electricienii noștri sunt autorizați și asigurați profesional." },
  { icon: Clock, title: "Răspuns în 60 min", desc: "Intervenții urgente în toate sectoarele Bucureștiului." },
  { icon: Wallet, title: "Preț corect", desc: "Estimare transparentă înainte de începerea lucrării, fără surprize." },
  { icon: Award, title: "10+ ani experiență", desc: "Peste 3.200 de lucrări finalizate cu garanție inclusă." },
];

const reviews = [
  { name: "Andrei Popescu", area: "Sector 3", text: "Au venit în 45 de minute pentru o defecțiune la tablou. Profesioniști, curați și prețuri corecte!" },
  { name: "Mihaela Ionescu", area: "Sector 6", text: "Am refăcut instalația electrică complet. Echipă punctuală, recomand cu încredere." },
  { name: "Radu Stanciu", area: "Sector 1", text: "Cei mai buni electricieni cu care am lucrat. Explică totul clar și termină la timp." },
];

const areas = ["Sector 1","Sector 2","Sector 3","Sector 4","Sector 5","Sector 6","Pipera","Băneasa","Voluntari","Otopeni","Bragadiru","Chiajna"];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-3 py-1 text-xs font-semibold text-brand-yellow uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" /> Electrician autorizat ANRE
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Electrician Autorizat în București <span className="text-brand-yellow">– Intervenții Rapide și Profesionale</span>
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Echipă locală cu peste 10 ani de experiență. Răspundem la urgențe 24/7 în toate sectoarele și oferim garanție la fiecare lucrare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-6 py-4 text-base font-extrabold text-brand-navy-deep hover:bg-brand-yellow-deep transition-colors shadow-lg shadow-brand-yellow/30">
                <Phone className="h-5 w-5" /> Sună acum: {PHONE_DISPLAY}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/25 px-6 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors">
                Cere ofertă gratuită <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-yellow" /> Devize gratuite</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-yellow" /> Garanție 24 luni</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-yellow" /> Factură fiscală</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-yellow/20 blur-2xl" />
            <img src={heroImg} alt="Electrician autorizat București lucrând la tablou electric" width={1024} height={1024} className="relative rounded-2xl shadow-2xl object-cover w-full aspect-square" />
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-white rounded-xl shadow-xl px-4 py-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-yellow text-brand-navy-deep font-extrabold">4.9</div>
              <div>
                <div className="flex text-brand-yellow">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" fill="currentColor"/>)}</div>
                <div className="text-xs text-muted-foreground">peste 480 clienți mulțumiți</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-yellow">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-navy-deep">
          <div className="flex items-center gap-3 font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy-deep text-brand-yellow animate-pulse">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <span className="text-base md:text-lg">URGENȚĂ ELECTRICĂ? Intervenim în 60 minute, 24/7</span>
          </div>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-brand-navy-deep px-5 py-3 text-sm font-bold text-white hover:bg-brand-navy transition-colors">
            <Phone className="h-4 w-4" /> Apel urgent: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">De ce noi</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy-deep">Electricienii preferați de bucureșteni</h2>
            <p className="mt-3 text-muted-foreground">Combinația perfectă între rapiditate, calitate și prețuri corecte.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({icon:Icon,title,desc})=>(
              <div key={title} className="rounded-xl bg-white border border-border p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-navy text-brand-yellow"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-4 font-bold text-brand-navy-deep">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <div>
              <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Servicii</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy-deep">Servicii electrice complete</h2>
            </div>
            <Link to="/servicii" className="text-brand-navy font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">Vezi toate serviciile <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({icon:Icon,title,desc})=>(
              <div key={title} className="group rounded-xl bg-white p-6 border border-border hover:border-brand-yellow transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-yellow/15 text-brand-navy group-hover:bg-brand-yellow group-hover:scale-110 transition-all"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-4 font-bold text-brand-navy-deep text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Recenzii</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy-deep">Ce spun clienții noștri</h2>
            <div className="mt-3 flex justify-center items-center gap-2">
              <div className="flex text-brand-yellow">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-5 w-5" fill="currentColor"/>)}</div>
              <span className="font-bold">4.9/5</span>
              <span className="text-muted-foreground text-sm">din 480+ recenzii</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r)=>(
              <div key={r.name} className="rounded-xl bg-white border border-border p-6 shadow-sm">
                <div className="flex text-brand-yellow mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" fill="currentColor"/>)}</div>
                <p className="text-foreground/85">"{r.text}"</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-brand-yellow font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-bold text-brand-navy-deep">{r.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/recenzii" className="text-brand-navy font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">Vezi toate recenziile <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-brand-yellow uppercase tracking-wider">Zone de acoperire</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Servim toate sectoarele Bucureștiului și Ilfov</h2>
              <p className="mt-4 text-white/75">Echipele noastre sunt distribuite strategic pentru a ajunge rapid oriunde în oraș – de la urgențe în Sector 3 până la lucrări noi în Pipera sau Voluntari.</p>
              <a href={`tel:${PHONE}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-yellow px-6 py-4 text-base font-extrabold text-brand-navy-deep hover:bg-brand-yellow-deep transition-colors">
                <Phone className="h-5 w-5" /> Sună acum: {PHONE_DISPLAY}
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((a)=>(
                <div key={a} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-brand-yellow shrink-0" /> {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}