import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Zap, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useState, type ReactNode } from "react";

const PHONE = "+40721456789";
const PHONE_DISPLAY = "0721 456 789";

const navItems = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/despre", label: "Despre" },
  { to: "/proiecte", label: "Proiecte" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="hidden md:block bg-brand-navy-deep text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-brand-yellow" /> {PHONE_DISPLAY}</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-brand-yellow" /> contact@electricexpert.ro</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-yellow" /> Urgențe 24/7</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Servim tot Bucureștiul & Ilfov</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-navy">
              <Zap className="h-5 w-5 text-brand-yellow" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-brand-navy text-base">Electric Expert</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">București</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-brand-navy bg-secondary" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-brand-navy hover:bg-secondary" }}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand-yellow px-4 py-2.5 text-sm font-bold text-brand-navy-deep hover:bg-brand-yellow-deep transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              aria-label="Meniu"
              className="lg:hidden p-2 rounded-md hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="mx-auto max-w-7xl px-4 py-2 flex flex-col">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-brand-navy bg-secondary" }}
                  inactiveProps={{ className: "text-foreground/80" }}
                  className="px-3 py-3 rounded-md text-sm font-medium"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-navy-deep text-white/85 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-yellow">
                <Zap className="h-5 w-5 text-brand-navy-deep" fill="currentColor" />
              </div>
              <div className="font-extrabold text-white text-lg">Electric Expert București</div>
            </div>
            <p className="text-sm text-white/70">Electrician autorizat ANRE. Intervenții rapide în toate sectoarele Bucureștiului.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Servicii</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicii" className="hover:text-brand-yellow">Instalații electrice</Link></li>
              <li><Link to="/servicii" className="hover:text-brand-yellow">Înlocuire tablou siguranțe</Link></li>
              <li><Link to="/servicii" className="hover:text-brand-yellow">Reparații urgente</Link></li>
              <li><Link to="/servicii" className="hover:text-brand-yellow">Iluminat & prize</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand-yellow" /> <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand-yellow" /> contact@electricexpert.ro</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-yellow" /> Str. Unirii 25, București</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-brand-yellow" /> Urgențe 24/7</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Urmărește-ne</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-brand-yellow hover:text-brand-navy-deep transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-brand-yellow hover:text-brand-navy-deep transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
            <p className="text-xs text-white/60 mt-4">Autorizat ANRE • CIF RO12345678</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/60 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Electric Expert București. Toate drepturile rezervate.</span>
            <span>Electrician autorizat în București – Sector 1, 2, 3, 4, 5, 6 & Ilfov</span>
          </div>
        </div>
      </footer>

      {/* Sticky mobile call button */}
      <a
        href={`tel:${PHONE}`}
        className="fixed bottom-4 right-4 left-4 sm:hidden z-50 flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-4 text-base font-extrabold text-brand-navy-deep shadow-lg shadow-brand-yellow/40"
      >
        <Phone className="h-5 w-5" /> Sună acum: {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export { PHONE, PHONE_DISPLAY };