import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CLASSES, enquirySchema, type Enquiry } from "@/lib/enquiry";
import { SITE } from "@/lib/site";

const empty: Enquiry = { name: "", phone: "", email: "", className: "", message: "" };

export function EnquiryForm({ title = "Admission Enquiry", withClass = true }: { title?: string; withClass?: boolean }) {
  const [data, setData] = useState<Enquiry>(withClass ? empty : { ...empty, className: "General" });
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Enquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData({ ...data, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = enquirySchema.safeParse(data);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Enquiry] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = r.data;
    const text = `${title}\nName: ${v.name}\nPhone: ${v.phone}\nEmail: ${v.email || "-"}\nClass: ${v.className}\nMessage: ${v.message || "-"}`;
    if (SITE.whatsapp) {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else if (SITE.email) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}`;
    }
    setSent(true);
    setData(withClass ? empty : { ...empty, className: "General" });
  }

  if (sent)
    return (
      <div className="rounded-2xl border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 text-2xl font-semibold text-primary">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">Your enquiry has been noted. The school office will contact you soon.</p>
        <button onClick={() => setSent(false)} className="btn-navy mt-6">Send another</button>
      </div>
    );

  const field = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";
  const Err = ({ k }: { k: keyof Enquiry }) => (errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null);

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-soft md:p-8">
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Full name *
          <input className={field} value={data.name} onChange={set("name")} maxLength={100} autoComplete="name" />
          <Err k="name" />
        </label>
        <label className="text-sm font-semibold">Mobile number *
          <input className={field} value={data.phone} onChange={set("phone")} inputMode="numeric" maxLength={10} autoComplete="tel" />
          <Err k="phone" />
        </label>
        <label className="text-sm font-semibold">Email
          <input className={field} type="email" value={data.email} onChange={set("email")} maxLength={255} autoComplete="email" />
          <Err k="email" />
        </label>
        {withClass && (
          <label className="text-sm font-semibold">Class applying for *
            <select className={field} value={data.className} onChange={set("className")}>
              <option value="">Select class</option>
              {CLASSES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <Err k="className" />
          </label>
        )}
      </div>
      <label className="text-sm font-semibold">Message
        <textarea className={field} rows={4} value={data.message} onChange={set("message")} maxLength={1000} />
        <Err k="message" />
      </label>
      <button type="submit" className="btn-gold justify-self-start">Submit Enquiry</button>
    </form>
  );
}
