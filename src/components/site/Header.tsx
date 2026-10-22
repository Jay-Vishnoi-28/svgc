import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground">
        <GraduationCap className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold ${light ? "text-primary-foreground" : "text-primary"}`}>
          {SITE.short} Khategaon
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-wider ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          CBSE Aff. No. {SITE.affiliation}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV.slice(0, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-navy ml-2 !py-2 text-sm">Contact</Link>
        </nav>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t bg-background xl:hidden" aria-label="Mobile">
          <div className="container-x grid gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-semibold hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="btn-gold mt-3">Apply for Admission</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
