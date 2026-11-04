import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Header";

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
    { href: SITE.social.youtube, label: "YouTube", Icon: Youtube },
    { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
  ];
  return (
    <div className={`flex gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-current/30 transition hover:bg-gold hover:text-gold-foreground hover:border-gold">
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function ContactLines({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3 text-sm ${className}`}>
      <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />{SITE.address}</li>
      <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" />
        {SITE.phone ? <a href={`tel:${SITE.phone}`} className="hover:underline">{SITE.phone}</a> : <span className="opacity-70">Phone: to be updated</span>}
      </li>
      <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" />
        {SITE.email ? <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a> : <span className="opacity-70">Email: to be updated</span>}
      </li>
      <li className="flex gap-3"><Globe className="h-4 w-4 shrink-0 text-gold" />
        {SITE.website ? <a href={SITE.website} className="hover:underline">{SITE.website}</a> : <span className="opacity-70">Official website: to be updated</span>}
      </li>
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-primary-foreground/75">
            {SITE.name} — a college serving Khategaon and nearby communities since {SITE.established}.
          </p>
          <SocialLinks />
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Contact</h3>
          <ContactLines className="text-primary-foreground/85" />
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Admissions Open</h3>
          <p className="mb-5 text-sm text-primary-foreground/75">UG & PG courses. Send us an enquiry and our office will get in touch.</p>
          <Link to="/admissions" className="btn-gold">Apply for Admission</Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Director: {SITE.director}</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  const href = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello VIPS, I would like to enquire about admissions.")}`
    : "/contact";
  return (
    <a href={href} target={SITE.whatsapp ? "_blank" : undefined} rel="noopener noreferrer"
      aria-label="WhatsApp enquiry"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-gold transition hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
