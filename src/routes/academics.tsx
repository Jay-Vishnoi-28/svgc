import { createFileRoute } from "@tanstack/react-router";
import { Baby, BookOpen, GraduationCap, School } from "lucide-react";
import lab from "@/assets/lab.jpg";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/academics")({
  head: () => pageHead("Academics", `CBSE curriculum from Pre-Nursery to Class 12 at ${SITE.name}, Khategaon.`),
  component: Academics,
});

const STAGES = [
  { icon: Baby, title: "Pre-Primary", range: "Pre-Nursery · Nursery · KG", text: "Play-based early learning building language, numbers, motor skills and social confidence." },
  { icon: BookOpen, title: "Primary", range: "Classes 1 – 5", text: "Strong foundations in languages, mathematics, environmental studies, art and physical education." },
  { icon: School, title: "Middle", range: "Classes 6 – 8", text: "Deeper study of languages, mathematics, science and social science with activity-based learning." },
  { icon: GraduationCap, title: "Secondary & Senior Secondary", range: "Classes 9 – 12", text: "CBSE board preparation with focused, guided study for Class 10 and Class 12 examinations." },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Learning at every stage" text={`${SITE.board} curriculum from Pre-Nursery to Class 12.`} image={lab} />
      <Section>
        <SectionTitle eyebrow="Programmes" title="Our academic journey" />
        <div className="grid gap-6 md:grid-cols-2">
          {STAGES.map(({ icon: Icon, title, range, text }) => (
            <div key={title} className="flex gap-5 rounded-2xl border bg-card p-7 transition hover:shadow-soft">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-navy-gradient text-gold"><Icon /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">{range}</p>
                <h3 className="mt-1 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section muted>
        <SectionTitle eyebrow="Subjects" title="Core subject areas" text="Indicative subjects as per the CBSE scheme of studies." />
        <div className="flex flex-wrap gap-3">
          {["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Education", "Environmental Studies", "Art Education", "Physical Education"].map((s) => (
            <span key={s} className="rounded-full border bg-card px-5 py-2.5 text-sm font-semibold text-primary">{s}</span>
          ))}
        </div>
        <div className="mt-8">
          <Placeholder>Senior secondary (Class 11–12) streams and elective subjects will be listed here once confirmed by the school.</Placeholder>
        </div>
      </Section>
    </>
  );
}
