import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE, pageHead } from "@/lib/site";
import { PageHero, Placeholder, Section, SectionTitle } from "@/components/site/Blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/admissions")({
  head: () => pageHead("Admissions", `Admission process, eligibility, documents and enquiry form for ${SITE.name}, Khategaon.`),
  component: Admissions,
});

const STEPS = ["Submit an enquiry online or visit the college office", "Collect and fill the admission form", "Submit required documents", "Document verification / counselling (as applicable)", "Confirmation and fee deposit"];
const DOCS = ["Class 12 / graduation mark sheets", "Transfer Certificate (TC) & Migration Certificate", "Caste / income certificate (if applicable)", "Recent passport-size photographs", "Aadhaar card of student and parents", "Address proof"];
const FAQ = [
  ["Which courses are admissions open for?", "VIPS offers undergraduate and postgraduate courses. Please contact the college office to confirm seat availability."],
  ["Which university is the college affiliated to?", "Please contact the college office for affiliation details."],
  ["What is the fee structure?", "Please contact the college office for the current fee structure."],
  ["Is transport available?", "Please contact the college office for transport routes and availability."],
  ["What is the eligibility?", "UG courses require Class 12 pass; PG courses require a relevant graduation degree. The office will confirm criteria for each course."],
];

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Begin your journey with VIPS" text="Undergraduate & Postgraduate Courses" />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Process" title="How to apply" />
            <ol className="space-y-4">
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-bold text-gold-foreground">{i + 1}</span>
                  <span className="pt-1.5 font-medium">{s}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-12 text-2xl font-semibold text-primary">Required documents</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {DOCS.map((d) => <li key={d} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />{d}</li>)}
            </ul>
            <div className="mt-8"><Placeholder>Confirm eligibility rules and the exact document list with the college office.</Placeholder></div>
          </div>
          <div><EnquiryForm /></div>
        </div>
      </Section>
      <Section muted>
        <SectionTitle center eyebrow="FAQs" title="Frequently asked questions" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-2xl border bg-card px-6">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left font-semibold text-primary">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
