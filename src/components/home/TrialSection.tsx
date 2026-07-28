import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const included = [
  "All seven core modules",
  "Accounting & financial reports",
  "Inventory and stock valuation",
  "Sales, purchase and CRM records",
  "HR and attendance",
  "AI insights and predictions",
  "Onboarding and setup support",
  "Data import from spreadsheets",
];

export function TrialSection() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="border-y hairline bg-[hsl(var(--ink-raised)/0.5)]">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="premium-card premium-sheen relative overflow-hidden">
          <div
            aria-hidden="true"
            className="premium-grid-lines absolute inset-0 opacity-70"
          />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:p-14">
            <div>
              <span className="premium-eyebrow">Beta access</span>
              <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
                Run one real month on it.
                <span className="block font-display italic tracking-normal text-gold">Then decide.</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-ink">
                Ten days of full access, no credit card, no obligation. Bring last month&apos;s numbers and
                see whether they finally agree with each other.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate("/signup")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[hsl(var(--ink))] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => navigate("/contact-sales")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-[hsl(var(--paper)/0.06)]"
                >
                  Request a walkthrough
                </button>
              </div>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t hairline pt-7">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-muted-ink">Trial length</dt>
                  <dd className="mt-1.5 font-display text-xl text-gold">10 days</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-muted-ink">Card required</dt>
                  <dd className="mt-1.5 font-display text-xl text-gold">None</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-muted-ink">Setup</dt>
                  <dd className="mt-1.5 font-display text-xl text-gold">Assisted</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border hairline bg-[hsl(var(--ink)/0.6)] p-7">
              <p className="text-[10px] uppercase tracking-[0.26em] text-muted-ink">What&apos;s included</p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
