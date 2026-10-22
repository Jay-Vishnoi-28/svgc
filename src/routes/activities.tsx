import { createFileRoute } from "@tanstack/react-router";
import { Trophy, FlaskConical, Brain, Mic, Music, Sparkles, Palette, PartyPopper, Bus } from "lucide-react";
import sports from "@/assets/sports.jpg";
import { SITE, pageHead } from "@/lib/site";
import { FeatureCard, PageHero, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/activities")({
  head: () => pageHead("Activities", `Sports, science exhibitions, quizzes, debates, music, dance, art and cultural events at ${SITE.name}.`),
  component: Activities,
});

function Activities() {
  return (
    <>
      <PageHero eyebrow="Beyond the Classroom" title="Activities that inspire" text="Discovering talents, building teamwork and confidence." image={sports} />
      <Section>
        <SectionTitle center eyebrow="Co-Curricular" title="Something for every child" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Trophy />} title="Sports" text="Outdoor and indoor games that build fitness and sportsmanship." />
          <FeatureCard icon={<FlaskConical />} title="Science Exhibitions" text="Students present models and experiments to showcase innovation." />
          <FeatureCard icon={<Brain />} title="Quizzes" text="Inter-house and inter-college quizzes to sharpen knowledge." />
          <FeatureCard icon={<Mic />} title="Debates" text="Public speaking that builds reasoning and confidence." />
          <FeatureCard icon={<Music />} title="Music" text="Vocal and instrumental music to nurture creativity." />
          <FeatureCard icon={<Sparkles />} title="Dance" text="Classical and folk dance performances." />
          <FeatureCard icon={<Palette />} title="Art & Craft" text="Drawing, painting and craft to express imagination." />
          <FeatureCard icon={<PartyPopper />} title="Cultural Events" text="Annual functions and festival celebrations." />
          <FeatureCard icon={<Bus />} title="Educational Tours" text="Learning trips that connect lessons with the real world." />
        </div>
      </Section>
    </>
  );
}
