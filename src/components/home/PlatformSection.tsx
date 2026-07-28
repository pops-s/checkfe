import { Fingerprint, Gauge, ShieldCheck, Workflow } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Separated access",
    description:
      "Admin, HR and employee journeys are distinct by design. People see the workspace their role requires and nothing beyond it.",
  },
  {
    icon: Workflow,
    title: "Documents that flow",
    description:
      "Quotation to order to invoice to payment carries its own history forward, so nothing is re-keyed and nothing is lost.",
  },
  {
    icon: Gauge,
    title: "Built for daily use",
    description:
      "Dense where it needs to be, quiet everywhere else. Status, ownership and next action are always visible.",
  },
  {
    icon: Fingerprint,
    title: "Your data, attributable",
    description:
      "Every entry is traceable to a person and a moment, which is what makes a report worth trusting.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <span className="premium-eyebrow">
            <Gauge className="h-3 w-3" />
            Craft
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
            Built for operators who need
            <span className="font-display italic tracking-normal text-gold"> calm, </span>
            not noise.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-ink">
            An ERP is used every single day by people who did not choose it. That constraint shaped every
            screen: fewer decisions, clearer defaults, no ceremony.
          </p>

          <blockquote className="mt-10 border-l pl-6 hairline">
            <p className="font-display text-xl leading-snug sm:text-2xl">
              &ldquo;It feels organised, deliberate and credible. It looks like software our team can trust
              every day.&rdquo;
            </p>
            <footer className="mt-5 flex items-center gap-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border hairline bg-[hsl(var(--gold)/0.1)] text-[11px] font-semibold text-gold">
                JD
              </span>
              <span className="text-[12.5px]">
                <span className="block font-medium">John Doe</span>
                <span className="block text-muted-ink">Operations Director, TechRetail</span>
              </span>
            </footer>
          </blockquote>
        </div>

        <ul className="flex flex-col divide-y divide-[hsl(var(--paper)/0.08)] border-y hairline">
          {pillars.map(({ icon: Icon, title, description }) => (
            <li key={title} className="group flex gap-5 py-7">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border hairline transition-colors duration-300 group-hover:bg-[hsl(var(--gold)/0.08)]">
                <Icon className="h-4 w-4 text-gold" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-pretty text-[13.5px] leading-relaxed text-muted-ink">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
