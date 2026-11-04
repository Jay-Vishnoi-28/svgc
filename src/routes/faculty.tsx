import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/faculty")({
  head: () => pageHead("Faculty", `Meet the professors and staff of ${SITE.name}, Khategaon.`),
  component: Faculty,
});

// PLACEHOLDER: replace with verified professor details { name, qualification, subject, photo }
const FACULTY = Array.from({ length: 8 }, (_, i) => ({
  name: `Professor Name ${i + 1}`,
  qualification: "Qualification",
  subject: "Subject",
}));

function Faculty() {
  return (
    <>
      <PageHero eyebrow="Faculty" title="Our dedicated educators" text="Experienced, dedicated professors guiding every learner." />
      <Section>
        <div className="mb-10"><Placeholder>Faculty profiles below are placeholders. Replace with verified names, qualifications, subjects and photos.</Placeholder></div>
        <div className="mb-12 rounded-2xl border bg-card p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-gold">Director</p>
          <h3 className="mt-1 text-2xl font-semibold text-primary">{SITE.director}</h3>
        </div>
        <SectionTitle eyebrow="Teaching Staff" title="Faculty members" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f) => (
            <div key={f.name} className="overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid aspect-square place-items-center bg-secondary text-primary/40"><User className="h-20 w-20" /></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">{f.name}</h3>
                <p className="text-sm text-gold font-semibold">{f.subject}</p>
                <p className="text-sm text-muted-foreground">{f.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
