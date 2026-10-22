import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Medal, Trophy } from "lucide-react";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section } from "@/components/site/Blocks";

export const Route = createFileRoute("/achievements")({
  head: () => pageHead("Achievements & Results", `Academic results, awards and competition achievements of ${SITE.name} students.`),
  component: Achievements,
});

const CATS = [
  { icon: GraduationCap, title: "Board Examination Results", hint: "Class 10 & 12 CBSE results by year" },
  { icon: Award, title: "Academic Achievements", hint: "Toppers, olympiads and scholarships" },
  { icon: Trophy, title: "Competitions", hint: "Sports, quiz, debate and science fair results" },
  { icon: Medal, title: "Student Awards", hint: "Recognitions and honours" },
];

function Achievements() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Celebrating our students" text="Only verified results and awards are published here." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {CATS.map(({ icon: Icon, title, hint }) => (
            <div key={title} className="rounded-2xl border bg-card p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-gold-foreground"><Icon /></div>
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
              </div>
              <div className="mt-5"><Placeholder>To be updated with verified information — {hint}.</Placeholder></div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
