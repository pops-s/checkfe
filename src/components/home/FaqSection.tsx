import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Bebasthapan built specifically for Nepal?",
    a: "Yes. The accounting structure, fiscal year handling, currency and document flows are built around how businesses in Nepal actually operate, rather than a foreign template adapted after the fact.",
  },
  {
    q: "Can I move data in from my existing spreadsheets?",
    a: "You can. There is a dedicated import flow for bringing across customers, suppliers, products and opening balances, and the team assists with the first import during onboarding.",
  },
  {
    q: "What happens when the 10-day trial ends?",
    a: "Nothing is deleted and no card is charged. You choose a plan to continue, or your workspace simply pauses until you do.",
  },
  {
    q: "Do employees need separate accounts?",
    a: "Yes, and that is intentional. Employees log in through their own journey with role-scoped access, so attendance and records stay attributable without exposing financial data.",
  },
  {
    q: "How do the AI insights work?",
    a: "They read only your own operating data — sales, purchase, stock and receivables — to surface forecasts, trends and early warnings. There are no generic industry benchmarks involved.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="premium-eyebrow">FAQ</span>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
            Questions, answered
            <span className="font-display italic tracking-normal text-gold"> plainly.</span>
          </h2>
        </div>

        <ul className="flex flex-col divide-y divide-[hsl(var(--paper)/0.08)] border-y hairline">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[15px] font-medium tracking-tight">{faq.q}</span>
                  <Plus
                    className={`mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="max-w-xl overflow-hidden text-pretty text-[13.5px] leading-relaxed text-muted-ink">
                    {faq.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
