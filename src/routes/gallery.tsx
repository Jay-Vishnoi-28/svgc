import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section } from "@/components/site/Blocks";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Gallery", `Photos of campus life, celebrations, sports and events at ${SITE.name}.`),
  component: Gallery,
});

// PLACEHOLDER images — replace with authentic college photos.
const PHOTOS = [
  { src: hero, cat: "Campus Life", alt: "College campus" },
  { src: lab, cat: "Campus Life", alt: "Science lab session" },
  { src: sports, cat: "Sports", alt: "Cricket on the ground" },
  { src: library, cat: "Campus Life", alt: "Library reading" },
  { src: sports, cat: "Events", alt: "Sports day" },
  { src: hero, cat: "Celebrations", alt: "Annual day" },
];
const CATS = ["All", "Campus Life", "Celebrations", "Sports", "Events"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState<number | null>(null);
  const list = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % list.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, list.length]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments at SVC" />
      <Section>
        <div className="mb-8"><Placeholder>Images shown are illustrative. Add real photographs of college events and campus.</Placeholder></div>
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "bg-primary text-primary-foreground" : "border bg-card hover:bg-secondary"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {list.map((p, i) => (
            <button key={i} onClick={() => setIdx(i)} className="group relative overflow-hidden rounded-2xl" aria-label={`Open ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 bg-hero-overlay p-3 text-left text-sm font-semibold text-primary-foreground opacity-0 transition group-hover:opacity-100">{p.cat}</span>
            </button>
          ))}
        </div>
      </Section>
      {idx !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/95 p-4" onClick={() => setIdx(null)}>
          <button className="absolute right-5 top-5 text-primary-foreground" aria-label="Close"><X className="h-8 w-8" /></button>
          <button className="absolute left-3 text-primary-foreground" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + list.length) % list.length); }}><ChevronLeft className="h-10 w-10" /></button>
          <img src={list[idx]?.src} alt={list[idx]?.alt} className="max-h-[85vh] max-w-full rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-3 text-primary-foreground" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % list.length); }}><ChevronRight className="h-10 w-10" /></button>
        </div>
      )}
    </>
  );
}
