import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, CONTACT_WA, EMAIL, WA_DISPLAY, SERVICES } from "@/lib/site-data";

export function CtaButton({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "outline" | "light" }) {
  const styles = {
    solid: "bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(36,87,214,0.16)] hover:-translate-y-0.5 hover:bg-[#1948bf]",
    outline: "border border-foreground/20 bg-white text-foreground hover:border-primary hover:text-primary",
    light: "bg-white text-primary hover:bg-blue-50",
  }[variant];
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${styles}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-[0.96rem] font-extrabold tracking-[0.13em] text-[#172033]">VEKTORA</span>
          <span className="text-sm font-semibold tracking-tight text-primary">digital</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-[13px] font-medium">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="rounded-md py-2 text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "rounded-md py-2 font-semibold text-primary" }} activeOptions={{ exact: true }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden xl:block"><CtaButton href={CONTACT_WA}>Diskusikan Proyek</CtaButton></div>
        <button className="rounded-lg border border-border p-2.5 text-foreground transition-colors hover:bg-secondary xl:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Navigasi mobile" className="border-t border-border bg-white px-5 pb-7 pt-2 shadow-lg xl:hidden">
          <ul>
            {NAV.map((n, i) => (
              <li key={n.to} className="border-b border-border/80">
                <Link to={n.to} onClick={() => setOpen(false)} className="flex items-center justify-between py-3.5 text-base font-semibold tracking-tight">
                  {n.label}<span className="text-xs font-medium text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5"><CtaButton href={CONTACT_WA}>Diskusikan Proyek</CtaButton></div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="text-xl font-extrabold tracking-[0.14em]">VEKTORA DIGITAL</p>
          <p className="mt-2 text-lg font-semibold text-blue-300">your branding solutions</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            Identitas visual, desain profesional, dan solusi website untuk UMKM, founder, dan bisnis yang sedang bertumbuh.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-white/40">Navigasi</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-white/70 transition-colors hover:text-white">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-white/40">Layanan</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SERVICES.map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-white/40">Kontak</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={CONTACT_WA} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">WhatsApp {WA_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all text-white/70 transition-colors hover:text-white">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-2 px-5 py-6 text-xs text-white/45 md:flex-row md:px-8">
          <p>© {year} Vektora Digital</p>
          <p>Thoughtfully crafted for brands ready to grow.</p>
        </div>
      </div>
    </footer>
  );
}
