import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl animate-fade-up text-4xl font-semibold md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl animate-fade-up text-lg text-primary-foreground/80">{text}</p>}
      </div>
    </section>
  );
}

export function Section({ children, muted = false, className = "" }: { children: ReactNode; muted?: boolean; className?: string }) {
  return (
    <section className={`${muted ? "bg-muted" : ""} py-16 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-primary md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-gold group-hover:text-gold-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gold/60 bg-accent p-6 text-sm text-accent-foreground">
      <span className="mr-2 rounded-full bg-gold px-2 py-0.5 text-xs font-bold text-gold-foreground">Placeholder</span>
      {children}
    </div>
  );
}
