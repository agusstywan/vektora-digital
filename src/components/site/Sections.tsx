import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Minus, Mail, MessageCircle, Sparkles, MoveUpRight, Image as ImageIcon, Zap } from "lucide-react";
import studioImage from "@/assets/vektora-studio.jpg";
import { CtaButton } from "./Layout";
import { SERVICES, PACKAGES, packageWa, WORKS, PROCESS, CONTACT_WA, EMAIL, WA_DISPLAY, WA_NUMBER } from "@/lib/site-data";

const wrap = "mx-auto max-w-[1280px] px-5 md:px-8";

function SectionHead({ index, label, title, as = "h2" }: { index: string; label: string; title: React.ReactNode; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-8">
      <p className="eyebrow text-muted-foreground md:col-span-3"><span className="text-primary">{index}</span> — {label}</p>
      <H className="display text-3xl md:col-span-9 md:text-5xl">{title}</H>
    </div>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#f7f9fd_0%,#ffffff_80%)]">
      <div className={`${wrap} grid items-center gap-12 pb-16 pt-14 md:grid-cols-2 md:gap-10 md:pb-24 md:pt-20`}>
        <div className="relative z-10">
          <p className="eyebrow rise inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-primary shadow-sm">
            <span className="size-2 rounded-full bg-primary" /> Creative Digital Agency
          </p>
          <h1 className="display rise mt-7 max-w-[12ch] text-[clamp(2.8rem,6.3vw,5.7rem)] [animation-delay:80ms]">
            Bangun brand yang lebih <em className="not-italic text-primary">jelas,</em> kuat, dan dipercaya.
          </h1>
          <div className="rise mt-7 max-w-xl [animation-delay:160ms]">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              Vektora Digital membantu bisnis membangun identitas visual, menghadirkan desain yang profesional, dan menciptakan pengalaman digital yang membuat brand lebih siap berkembang.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={CONTACT_WA}>Diskusikan Proyek</CtaButton>
              <Link to="/karya" className="group inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary">
                Lihat Karya Kami <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-xs font-semibold text-muted-foreground sm:text-sm">
            {["Brand Identity", "Visual Design", "Website", "Digital Solutions"].map((t, i) => (
              <p key={t}><span className="mr-2 text-primary">0{i + 1}</span>{t}</p>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[590px] md:pl-3">
          <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_28px_80px_rgba(28,55,110,0.15)]">
            <img src={studioImage} alt="Vektora Digital creative studio" className="aspect-[1.12/1] w-full rounded-xl object-cover" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur">
              <div>
                <p className="eyebrow text-primary">VEKTORA DIGITAL</p>
                <p className="mt-1 text-sm font-semibold text-[#172033]">your branding solutions</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-white"><ArrowUpRight className="size-5" /></span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 -z-0 h-24 w-24 rounded-2xl border border-blue-100 bg-blue-50" />
        </div>
      </div>
    </section>
  );
}

export function Services({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={`${wrap} py-16 md:py-24`}>
      <SectionHead as={asPage ? "h1" : "h2"} index="01" label="Layanan" title={<>Solusi kreatif dari logo hingga <em className="not-italic text-primary">website.</em></>} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <article key={s.title} className="group relative flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(26,55,110,0.08)] md:p-7">
            <div className="-mx-1 -mt-1 mb-6 aspect-[7/5] overflow-hidden rounded-lg border border-border bg-blue-50/60">
              {s.image ? (
                <img src={s.image} alt={s.title} loading="lazy" className="size-full object-cover" />
              ) : (
                <div data-image-slot className="flex size-full flex-col items-center justify-center gap-2 border-2 border-dashed border-blue-200 p-4 text-center text-primary">
                  <ImageIcon className="size-6" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">Posisi gambar {i + 1}</span>
                  <span className="text-[11px] text-muted-foreground">Rasio 7:5 · ±1400×1000 px</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-primary"><Sparkles className="size-5" /></span>
              <span className="text-sm font-semibold text-blue-300">0{i + 1}</span>
            </div>
            <h3 className="mt-7 text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            <MoveUpRight className="absolute bottom-7 right-7 size-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}

const ROWS: { label: string; get: (p: (typeof PACKAGES)[number]) => React.ReactNode }[] = [
  { label: "Domain", get: (p) => p.domain },
  { label: "Dashboard admin", get: (p) => (p.admin ? <Check className="size-4 text-primary" aria-label="Ya" /> : <Minus className="size-4 text-muted-foreground" aria-label="Tidak" />) },
];

export function Pricing({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-24">
      <div className={wrap}>
        <SectionHead as={asPage ? "h1" : "h2"} index="02" label="Paket Website" title={<>Pilih paket yang sesuai dengan <em className="not-italic text-primary">tahap bisnis</em> Anda.</>} />
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PACKAGES.map((p, i) => (
            <article key={p.name} className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.featured ? "border-primary bg-[#172b57] text-white shadow-[0_18px_45px_rgba(36,87,214,0.18)]" : "border-border bg-white text-foreground shadow-[0_4px_16px_rgba(20,35,65,0.035)]"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-extrabold tracking-[0.14em]">{p.name}</h3>
                <span className={`text-xs font-semibold ${p.featured ? "text-blue-200" : "text-blue-400"}`}>0{i + 1}</span>
              </div>
              <p className={`mt-7 text-[10px] font-bold uppercase tracking-[0.18em] ${p.featured ? "text-white/50" : "text-muted-foreground"}`}>Mulai</p>
              <p className="mt-1 whitespace-nowrap text-[1.65rem] font-extrabold tracking-tight">{p.price}</p>
              <p className={`mt-3 min-h-[3.5rem] text-xs leading-6 ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.summary}</p>
              <dl className={`mt-5 border-y py-3 text-xs ${p.featured ? "border-white/15" : "border-border"}`}>
                {ROWS.map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-1.5">
                    <dt className={p.featured ? "text-white/60" : "text-muted-foreground"}>{r.label}</dt>
                    <dd className="font-semibold">{r.get(p)}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 space-y-2.5 text-xs leading-5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5"><Check className={`mt-0.5 size-3.5 shrink-0 ${p.featured ? "text-blue-300" : "text-primary"}`} aria-hidden />{f}</li>
                ))}
              </ul>
              {p.note && <p className={`mt-5 text-sm font-medium italic leading-6 ${p.featured ? "text-blue-200" : "text-primary"}`}>“{p.note}”</p>}
              <div className="mt-auto pt-7">
                <a href={packageWa(p)} target="_blank" rel="noopener noreferrer"
                  className={`group flex w-full items-center justify-between rounded-lg px-4 py-3 text-xs font-bold transition-colors ${p.featured ? "bg-white text-primary hover:bg-blue-50" : "bg-primary text-white hover:bg-[#1948bf]"}`}>
                  Pilih Paket Ini <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-muted-foreground">BASIC tanpa dashboard admin dan memakai domain .vercel.app · STARTER, PRO, PREMIUM, dan CUSTOM memakai domain .com.</p>
      </div>
    </section>
  );
}

export function Works({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={`${wrap} py-16 md:py-24`}>
      <SectionHead as={asPage ? "h1" : "h2"} index="03" label="Karya" title={<>Beberapa brand yang pernah kami <em className="not-italic text-primary">bantu.</em></>} />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((w, i) => (
          <li key={w.name}>
            <a href={w.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(26,55,110,0.09)]">
              {w.logo ? (
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden" style={{ backgroundColor: w.bg ?? "#ffffff" }}>
                  <img src={w.logo} alt={`Logo ${w.name}`} loading="lazy" className="size-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-3 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-bold text-primary">0{i + 1}</span>
                  <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm"><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /></span>
                </div>
              ) : (
                <div className={`relative flex aspect-[4/3] items-end overflow-hidden p-6 ${i % 3 === 1 ? "bg-[#172b57] text-white" : i % 3 === 2 ? "bg-[#eaf0ff] text-[#172033]" : "bg-[#f1f4f9] text-[#172033]"}`}>
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 80% 15%, rgba(36,87,214,.18), transparent 40%), linear-gradient(135deg, transparent 55%, rgba(36,87,214,.08))" }} />
                  <span className="absolute right-5 top-4 text-xs font-bold text-primary/60">0{i + 1}</span>
                  <span className="relative display max-w-[10ch] text-[clamp(1.8rem,3.5vw,2.8rem)] transition-transform duration-500 group-hover:-translate-y-1">{w.name}</span>
                  <ArrowUpRight className="absolute bottom-6 right-6 size-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
              )}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <h3 className="font-bold">{w.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{w.cat}</p>
                </div>
                <span className="text-xs font-semibold text-primary">Visit <span className="sr-only">(membuka tab baru)</span></span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Process({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className="bg-[#172b57] py-16 text-white md:py-24">
      <div className={wrap}>
        <div className="grid gap-4 border-t border-white/20 pt-6 md:grid-cols-12 md:gap-8">
          <p className="eyebrow text-white/55 md:col-span-3"><span className="text-blue-300">04</span> — Proses</p>
          {asPage
            ? <h1 className="display text-3xl md:col-span-9 md:text-5xl">Terarah dari brief hingga <em className="not-italic text-blue-300">serah terima.</em></h1>
            : <h2 className="display text-3xl md:col-span-9 md:text-5xl">Terarah dari brief hingga <em className="not-italic text-blue-300">serah terima.</em></h2>}
        </div>
        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-white/15 bg-white/[0.06] p-6 transition-colors hover:bg-white/[0.1] md:min-h-[250px]">
              <span className="text-4xl font-extrabold tracking-tight text-blue-300">0{i + 1}</span>
              <h3 className="mt-9 text-base font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={`${wrap} py-16 md:py-24`}>
      <SectionHead as={asPage ? "h1" : "h2"} index="05" label="Tentang" title={<>Setiap bisnis memiliki cerita dan <em className="not-italic text-primary">karakter</em> yang berbeda.</>} />
      <div className="mt-10 grid gap-7 md:grid-cols-12">
        <p className="text-lg leading-8 md:col-span-5 md:col-start-4">
          Kami percaya bahwa identitas visual dan kehadiran digital yang tepat dapat membantu sebuah bisnis tampil lebih profesional dan membangun kepercayaan. Vektora Digital hadir untuk membantu bisnis menerjemahkan ide, karakter, dan tujuan mereka menjadi solusi kreatif yang relevan.
        </p>
        <p className="leading-8 text-muted-foreground md:col-span-4">
          Dari sebuah logo hingga website profesional, setiap proyek kami kerjakan dengan pendekatan yang terarah, detail, dan berorientasi pada kebutuhan bisnis.
        </p>
      </div>
    </section>
  );
}

const NEEDS = [...SERVICES.map((s) => s.title), "Paket Website", "Lainnya"];
const field = "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ProjectForm() {
  const [f, setF] = useState({ nama: "", bisnis: "", email: "", wa: "", kebutuhan: "", budget: "", pesan: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const buildMessage = () =>
    [
      "Halo Vektora Digital, saya ingin memulai proyek.",
      "",
      `Nama: ${f.nama}`,
      `Nama Bisnis: ${f.bisnis || "-"}`,
      `Email: ${f.email || "-"}`,
      `WhatsApp: ${f.wa || "-"}`,
      `Kebutuhan: ${f.kebutuhan}`,
      `Budget: ${f.budget || "-"}`,
      `Pesan: ${f.pesan || "-"}`,
    ].join("\n");

  const valid = () => {
    if (!f.nama.trim() || !f.kebutuhan) {
      setErr("Mohon isi Nama Lengkap dan pilih Kebutuhan terlebih dahulu.");
      return false;
    }
    setErr("");
    return true;
  };

  const sendWa = () => {
    if (!valid()) return;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer");
  };
  const sendEmail = () => {
    if (!valid()) return;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Proyek baru: ${f.kebutuhan} — ${f.nama}`)}&body=${encodeURIComponent(buildMessage())}`;
  };

  return (
    <section id="form-proyek" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-[760px] px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">Hubungi Kami</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">Mulai Proyek Desainmu</h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">Isi form singkat ini, dan kami akan segera menghubungimu.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} noValidate className="mt-10 rounded-2xl border border-border bg-white p-5 shadow-[0_18px_40px_rgba(26,55,110,0.06)] md:p-7">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <input className={field} placeholder="Nama Lengkap" aria-label="Nama Lengkap" autoComplete="name" value={f.nama} onChange={set("nama")} required />
            <input className={field} placeholder="Nama Bisnis" aria-label="Nama Bisnis" autoComplete="organization" value={f.bisnis} onChange={set("bisnis")} />
            <input className={field} type="email" placeholder="Email" aria-label="Email" autoComplete="email" value={f.email} onChange={set("email")} />
            <input className={field} type="tel" placeholder="Nomor WhatsApp" aria-label="Nomor WhatsApp" autoComplete="tel" value={f.wa} onChange={set("wa")} />
          </div>
          <select className={`${field} mt-3.5`} aria-label="Pilih Kebutuhan" value={f.kebutuhan} onChange={set("kebutuhan")} required>
            <option value="">Pilih Kebutuhan</option>
            {NEEDS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          <input className={`${field} mt-3.5`} placeholder="Budget (contoh: 300K)" aria-label="Budget" value={f.budget} onChange={set("budget")} />
          <textarea className={`${field} mt-3.5 min-h-[104px] resize-y`} placeholder="Pesan tambahan..." aria-label="Pesan tambahan" value={f.pesan} onChange={set("pesan")} />
          {err && <p role="alert" className="mt-3 text-sm text-red-600">{err}</p>}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={sendWa} data-action="wa" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb957] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366]/50 focus-visible:ring-offset-2">
              <MessageCircle className="size-4" aria-hidden /> Kirim &amp; Konsultasi via WhatsApp
            </button>
            <button type="button" onClick={sendEmail} data-action="email" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2">
              <Mail className="size-4" aria-hidden /> Kirim via Email
            </button>
          </div>
          <p className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground"><Zap className="size-3" aria-hidden /> Biasanya kami respon dalam 5–15 menit di WhatsApp</p>
        </form>
      </div>
    </section>
  );
}

export function Contact({ asPage = false }: { asPage?: boolean }) {
  return (
    <>
    <ProjectForm />
    <section className="bg-[#111827] py-16 text-white md:py-24">
      <div className={wrap}>
        <p className="eyebrow text-white/50"><span className="text-blue-300">06</span> — Kontak</p>
        {asPage
          ? <h1 className="display mt-7 max-w-[16ch] text-[clamp(2.5rem,6vw,5.2rem)]">Siap membangun brand yang lebih <em className="not-italic text-blue-300">kuat?</em></h1>
          : <h2 className="display mt-7 max-w-[16ch] text-[clamp(2.5rem,6vw,5.2rem)]">Siap membangun brand yang lebih <em className="not-italic text-blue-300">kuat?</em></h2>}
        <div className="mt-11 grid gap-3 md:grid-cols-2">
          <a href={CONTACT_WA} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] p-6 transition-colors hover:border-blue-300/50 hover:bg-white/[0.1] md:p-8">
            <span className="flex items-center gap-4"><MessageCircle className="size-5 text-blue-300" aria-hidden />
              <span><span className="eyebrow block text-white/45">WhatsApp</span><span className="mt-1 block text-xl font-semibold md:text-2xl">{WA_DISPLAY}</span></span></span>
            <ArrowUpRight className="size-5 text-blue-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
          </a>
          <a href={`mailto:${EMAIL}`} className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] p-6 transition-colors hover:border-blue-300/50 hover:bg-white/[0.1] md:p-8">
            <span className="flex min-w-0 items-center gap-4"><Mail className="size-5 shrink-0 text-blue-300" aria-hidden />
              <span className="min-w-0"><span className="eyebrow block text-white/45">Email</span><span className="mt-1 block truncate text-lg font-semibold md:text-2xl">{EMAIL}</span></span></span>
            <ArrowUpRight className="size-5 shrink-0 text-blue-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
