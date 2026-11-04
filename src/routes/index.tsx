import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, FlaskConical, Trophy, Users, Bus } from "lucide-react";
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";
import { SITE, pageHead } from "@/lib/site";
import { FeatureCard, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => pageHead("College in Khategaon", `${SITE.name} — college in Khategaon, Dewas, MP offering UG and PG courses in Arts, Commerce and Science since 2009.`),
  component: Index,
});

function Index() {
  const years = new Date().getFullYear() - SITE.established;
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden text-primary-foreground">
        <img src={hero} alt="VIPS campus with students" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative flex min-h-[88vh] flex-col justify-center py-24">
          <p className="eyebrow animate-fade-up">Est. {SITE.established} · Undergraduate & Postgraduate · Khategaon</p>
          <h1 className="mt-4 max-w-4xl animate-fade-up text-4xl font-semibold leading-[1.08] md:text-6xl">
            Vidhyasagar Institute of <span className="italic text-gold">Professional Studies</span>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg text-primary-foreground/85 md:text-xl">{SITE.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Link to="/admissions" className="btn-gold">Apply for Admission <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/about" className="btn-outline-light">Explore Our College</Link>
          </div>
        </div>
      </section>

      <div className="container-x relative z-10 -mt-14">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border shadow-soft md:grid-cols-4">
          {[
            [`${years}+`, "Years of Excellence"],
            ["UG & PG", "Degree Programmes"],
            ["Arts · Commerce · Science", "Faculties"],
            ["Khategaon", "Dewas, Madhya Pradesh"],
          ].map(([a, b]) => (
            <div key={b} className="bg-card p-6 text-center">
              <div className="font-display text-2xl font-semibold text-primary md:text-3xl">{a}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={lab} alt="Students in science lab" loading="lazy" width={1200} height={912} className="aspect-[3/4] rounded-2xl object-cover" />
            <img src={library} alt="Students reading in library" loading="lazy" width={1200} height={912} className="mt-12 aspect-[3/4] rounded-2xl object-cover" />
          </div>
          <div>
            <SectionTitle eyebrow="Welcome to VIPS" title="Where learning meets values" />
            <p className="text-muted-foreground leading-relaxed">
              Since {SITE.established}, {SITE.name} has been a trusted centre of learning in Khategaon. Through quality
              undergraduate and postgraduate programmes, we prepare young people for careers, competitive exams and responsible citizenship.
            </p>
            <blockquote className="mt-8 border-l-4 border-gold pl-5">
              <p className="font-display text-lg italic text-primary">“Our aim is to help every student grow into a confident, responsible and caring citizen.”</p>
              <footer className="mt-2 text-sm font-semibold text-muted-foreground">— {SITE.director}, Director</footer>
            </blockquote>
            <Link to="/about" className="btn-navy mt-8">Read our story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionTitle center eyebrow="Why VIPS" title="A complete education" text="Academics, activities and care — balanced for every student." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<BookOpen />} title="Degree Programmes" text="University-recognised courses in Arts, Commerce, Science and Computers." />
          <FeatureCard icon={<FlaskConical />} title="Hands-on Learning" text="Laboratories and projects that turn concepts into understanding." />
          <FeatureCard icon={<Trophy />} title="Sports & Activities" text="Sports, debates, quizzes, music, dance, art and cultural events." />
          <FeatureCard icon={<Users />} title="Dedicated Teachers" text="Qualified professors who mentor students in and beyond the classroom." />
          <FeatureCard icon={<Award />} title="Values & Discipline" text="Character, respect and responsibility at the heart of college life." />
          <FeatureCard icon={<Bus />} title="Safe Campus" text="A secure, supportive campus for students to learn and thrive." />
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl text-primary-foreground">
          <img src={sports} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative max-w-xl p-10 md:p-16">
            <p className="eyebrow">Admissions Open</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Build your future at VIPS</h2>
            <p className="mt-4 text-primary-foreground/80">Enquire today for undergraduate and postgraduate courses.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-gold">Apply for Admission</Link>
              <Link to="/contact" className="btn-outline-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
