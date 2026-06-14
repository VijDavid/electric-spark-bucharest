import { Link } from "@tanstack/react-router";
import { Phone, ThumbsUp } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "./site-layout";

export function CTASection({ title = "Ai nevoie de un electrician autorizat?", subtitle = "Estimare gratuită în maxim 15 minute. Fără deplasare facturată la urgențe în București." }: { title?: string; subtitle?: string }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "var(--gradient-hero)" }}>
          <ThumbsUp className="h-12 w-12 text-brand-yellow mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">{subtitle}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-6 py-4 text-base font-extrabold text-brand-navy-deep hover:bg-brand-yellow-deep">
              <Phone className="h-5 w-5" /> Sună acum: {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/25 px-6 py-4 text-base font-semibold text-white hover:bg-white/15">
              Cere ofertă online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 text-center text-white">
        <span className="inline-block rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-3 py-1 text-xs font-bold text-brand-yellow uppercase tracking-wider">{eyebrow}</span>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}