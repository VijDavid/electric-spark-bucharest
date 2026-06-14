import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PageHero } from "../components/cta-section";
import { PHONE, PHONE_DISPLAY } from "../components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Electric Expert București | Sună 0721 456 789" },
      { name: "description", content: "Contactează electricienii autorizați din București. Telefon, email, formular de ofertă și program. Răspuns în 15 minute." },
      { property: "og:title", content: "Contact Electric Expert București" },
      { property: "og:description", content: "Cere o ofertă sau sună acum pentru intervenție rapidă în București." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Sună-ne sau cere o ofertă" subtitle="Suntem disponibili 24/7 pentru urgențe. La cereri de ofertă răspundem în maxim 15 minute în timpul programului." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={`tel:${PHONE}`} className="rounded-xl bg-brand-navy text-white p-6 hover:bg-brand-navy-deep transition-colors">
                <Phone className="h-7 w-7 text-brand-yellow" />
                <div className="mt-3 text-xs uppercase tracking-wider text-white/70">Telefon</div>
                <div className="text-lg font-extrabold mt-1">{PHONE_DISPLAY}</div>
                <div className="text-xs text-white/70 mt-1">Disponibil 24/7</div>
              </a>
              <a href="mailto:contact@electricexpert.ro" className="rounded-xl bg-white border border-border p-6 hover:border-brand-yellow transition-colors">
                <Mail className="h-7 w-7 text-brand-navy" />
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-base font-bold text-brand-navy-deep mt-1 break-all">contact@electricexpert.ro</div>
              </a>
              <div className="rounded-xl bg-white border border-border p-6">
                <MapPin className="h-7 w-7 text-brand-navy" />
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Sediu</div>
                <div className="text-sm font-semibold text-brand-navy-deep mt-1">Str. Unirii 25, Sector 3, București</div>
              </div>
              <div className="rounded-xl bg-white border border-border p-6">
                <Clock className="h-7 w-7 text-brand-navy" />
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Program</div>
                <div className="text-sm font-semibold text-brand-navy-deep mt-1">L–V: 08:00 – 20:00</div>
                <div className="text-sm text-foreground/80">S–D: 09:00 – 18:00</div>
                <div className="text-xs text-brand-navy mt-1 font-bold">Urgențe: 24/7</div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Hartă Electric Expert București"
                src="https://www.google.com/maps?q=Bucuresti+Piata+Unirii&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-extrabold text-brand-navy-deep">Cere o ofertă gratuită</h2>
            <p className="mt-1 text-sm text-muted-foreground">Completează formularul – te sunăm înapoi în maxim 15 minute.</p>
            {sent ? (
              <div className="mt-8 rounded-xl bg-secondary p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-navy mx-auto" />
                <div className="mt-3 font-bold text-brand-navy-deep">Mulțumim! Te contactăm imediat.</div>
                <p className="text-sm text-muted-foreground mt-1">Cererea ta a fost înregistrată.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy-deep mb-1">Nume *</label>
                    <input required maxLength={80} className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy-deep mb-1">Telefon *</label>
                    <input required maxLength={20} type="tel" className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy-deep mb-1">Email</label>
                  <input type="email" maxLength={120} className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy-deep mb-1">Tipul lucrării</label>
                  <select className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy">
                    <option>Urgență electrică</option>
                    <option>Instalație nouă</option>
                    <option>Înlocuire tablou</option>
                    <option>Reparație</option>
                    <option>Iluminat / prize</option>
                    <option>Comercial</option>
                    <option>Altele</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy-deep mb-1">Detalii</label>
                  <textarea rows={4} maxLength={1000} className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" placeholder="Descrie pe scurt problema sau lucrarea" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 py-3.5 text-base font-extrabold text-brand-navy-deep hover:bg-brand-yellow-deep transition-colors">
                  <Send className="h-4 w-4" /> Trimite cererea
                </button>
                <p className="text-xs text-muted-foreground text-center">Prin trimitere accepți să fii contactat telefonic în legătură cu solicitarea ta.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}