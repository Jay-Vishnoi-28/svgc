import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Heart, Shield, Lightbulb, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SITE, pageHead } from "@/lib/site";
import { FeatureCard, PageHero, Placeholder, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Us", `History, vision, mission and leadership of ${SITE.name}, Khategaon — established ${SITE.established}.`),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={`Shaping futures since ${SITE.established}`} text="A CBSE-affiliated school rooted in the Khategaon community." image={hero} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Our History" title="A legacy of learning" />
            <p className="leading-relaxed text-muted-foreground">
              {SITE.name} was established in {SITE.established} in Khategaon, Dewas district, Madhya Pradesh. The school is affiliated
              to the Central Board of Secondary Education (CBSE) under affiliation number {SITE.affiliation}, and offers education from
              Pre-Nursery to Class 12.
            </p>
            <div className="mt-6"><Placeholder>Add the school's detailed history, founders and milestones here once verified.</Placeholder></div>
          </div>
          <div className="grid gap-6">
            <FeatureCard icon={<Eye />} title="Our Vision" text="To be a centre of excellence that nurtures knowledgeable, confident and value-driven individuals." />
            <FeatureCard icon={<Target />} title="Our Mission" text="To provide quality CBSE education in a safe, inclusive environment that develops the intellectual, physical and moral potential of every child." />
          </div>
        </div>
      </Section>
      <Section muted>
        <SectionTitle center eyebrow="Core Values" title="What we stand for" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<Heart />} title="Respect" text="For self, others and the environment." />
          <FeatureCard icon={<Shield />} title="Integrity" text="Honesty and responsibility in all we do." />
          <FeatureCard icon={<Lightbulb />} title="Curiosity" text="A lifelong love of learning." />
          <FeatureCard icon={<Users />} title="Community" text="Growing together as one school family." />
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Leadership" title="From the Principal's desk" />
        <div className="grid items-center gap-10 rounded-3xl border bg-card p-8 shadow-soft md:grid-cols-[200px_1fr] md:p-12">
          <div className="grid aspect-square place-items-center rounded-2xl bg-navy-gradient font-display text-5xl text-gold">AJ</div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">{SITE.principal}</h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Principal</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Welcome to {SITE.name}. We believe every child is unique and capable of greatness. Together with parents, we strive to give our
              students the knowledge, skills and values they need for life.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">Placeholder message — replace with the Principal's official message and photo.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
