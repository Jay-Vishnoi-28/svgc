import { createFileRoute } from "@tanstack/react-router";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ContactLines, SocialLinks } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Us", `Address, map and contact form for ${SITE.name}, Khategaon, Dewas, Madhya Pradesh.`),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div className="rounded-2xl bg-navy-gradient p-8 text-primary-foreground">
              <h2 className="mb-6 text-2xl font-semibold">{SITE.name}</h2>
              <ContactLines />
              <SocialLinks className="mt-6" />
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <iframe title="College location map" loading="lazy" className="h-80 w-full"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
            </div>
          </div>
          <EnquiryForm title="Send us a message" withClass={false} />
        </div>
      </Section>
    </>
  );
}
