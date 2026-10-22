import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import hero from "@/assets/hero.jpg";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section } from "@/components/site/Blocks";

export const Route = createFileRoute("/facilities")({
  head: () => pageHead("Facilities", `Library, classrooms, laboratories, IT and transport at ${SITE.name}, Khategaon.`),
  component: Facilities,
});

const ITEMS = [
  { title: "Library", img: library, text: "A reading space with books and reference material for all age groups." },
  { title: "Classrooms", img: hero, text: "Spacious, well-lit classrooms designed for focused learning." },
  { title: "Laboratories", img: lab, text: "Science laboratories for practical, hands-on experiments." },
  { title: "IT Infrastructure", img: lab, text: "Computer education to build digital skills." },
  { title: "Transport", img: hero, text: "College transport for students from surrounding areas." },
  { title: "Playground", img: sports, text: "Open grounds for sports, games and assemblies." },
];

function Facilities() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="A campus built for learning" image={library} />
      <Section>
        <div className="mb-10"><Placeholder>Photos are illustrative. Replace with authentic campus photographs and confirm each facility's details.</Placeholder></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((f) => (
            <article key={f.title} className="group overflow-hidden rounded-2xl border bg-card transition hover:shadow-soft">
              <div className="overflow-hidden"><img src={f.img} alt={f.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
