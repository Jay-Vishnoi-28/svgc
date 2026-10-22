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

const STEPS = ["Submit an enquiry online or visit the school office", "Collect and fill the admission form", "Submit required documents", "Interaction / assessment (as applicable)", "Confirmation and fee deposit"];
const DOCS = ["Birth certificate", "Transfer Certificate (TC) from previous school", "Previous year report card / mark sheet", "Recent passport-size photographs", "Aadhaar card of student and parents", "Address proof"];
const FAQ = [
  ["Which classes are admissions open for?", "SVPS offers education from Pre-Nursery to Class 12. Please contact the school office to confirm seat availability."],
  ["Which board is the school affiliated to?", `The school is affiliated to CBSE, affiliation number ${SITE.affiliation}.`],
  ["What is the fee structure?", "Please contact the school office for the current fee structure."],
  ["Is transport available?", "Please contact the school office for transport routes and availability."],
  ["What is the age criteria?", "Age eligibility follows CBSE and state guidelines. The office will confirm the criteria for each class."],
];

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Begin your journey with SVPS" text="Pre-Nursery to Class 12 · CBSE" />
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
            <div className="mt-8"><Placeholder>Confirm eligibility rules and the exact document list with the school office.</Placeholder></div>
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
