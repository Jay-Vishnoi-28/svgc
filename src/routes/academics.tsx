import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Briefcase, FlaskConical, Monitor } from "lucide-react";
import lab from "@/assets/lab.jpg";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/academics")({
  head: () => pageHead("Courses & Academics", `Undergraduate and postgraduate courses in Arts, Commerce, Science and Computers at ${SITE.name}, Khategaon.`),
  component: Academics,
});

const STAGES = [
  { icon: BookOpen, title: "Faculty of Arts", range: "B.A. · M.A.", text: "Hindi, English, History, Political Science, Economics, Sociology and more." },
  { icon: Briefcase, title: "Faculty of Commerce", range: "B.Com. · M.Com. · BBA", text: "Accounting, business studies, taxation and management for careers in commerce." },
  { icon: FlaskConical, title: "Faculty of Science", range: "B.Sc. · M.Sc.", text: "Physics, Chemistry, Mathematics, Botany and Zoology with laboratory practicals." },
  { icon: Monitor, title: "Computer Applications", range: "BCA · PGDCA", text: "Programming, databases and IT skills for the digital workplace." },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Courses that build careers" text="Undergraduate and postgraduate programmes." image={lab} />
      <Section>
        <SectionTitle eyebrow="Faculties" title="Our courses" />
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
        <SectionTitle eyebrow="Subjects" title="Popular subjects" text="Indicative subjects; final list as per university scheme." />
        <div className="flex flex-wrap gap-3">
          {["English", "Hindi", "Mathematics", "History", "Commerce", "Economics", "Computer Science", "Political Science", "Physics", "Chemistry"].map((s) => (
            <span key={s} className="rounded-full border bg-card px-5 py-2.5 text-sm font-semibold text-primary">{s}</span>
          ))}
        </div>
        <div className="mt-8">
          <Placeholder>Exact courses, seats, fees and university affiliation will be listed here once confirmed by the college.</Placeholder>
        </div>
      </Section>
    </>
  );
}
