import { Layers } from "lucide-react";

const contrast = [
  {
    label: "Before",
    lines: [
      "Sales in one file, stock in another",
      "Month-end reconciled by hand",
      "Dues discovered too late",
      "Reports assembled, not read",
    ],
  },
  {
    label: "With Bebasthapan",
    lines: [
      "One record every module reads from",
      "Books that stay closed and correct",
      "Receivables surfaced the day they age",
      "Reports that are already waiting",
    ],
    highlight: true,
  },
];

export function WhySection() {
  return (
    <section id="why" className="border-y hairline bg-[hsl(var(--ink-raised)/0.5)]">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="premium-eyebrow">
              <Layers className="h-3 w-3" />
              Why it exists
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
              Most businesses here don&apos;t lack data. They lack
              <span className="font-display italic tracking-normal text-gold"> agreement </span>
              between it.
            </h2>
            <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-ink">
              Distribution, accounting, stock, clients, invoices and attendance usually live in separate
              systems. The result is duplicate entry, disputed numbers and decisions made a week late.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              {contrast.map((column) => (
                <div
                  key={column.label}
                  className={`rounded-2xl border p-6 ${
                    column.highlight
                      ? "border-[hsl(var(--gold)/0.28)] bg-[hsl(var(--gold)/0.05)]"
                      : "hairline"
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.26em] ${
                      column.highlight ? "text-gold" : "text-muted-ink"
                    }`}
                  >
                    {column.label}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {column.lines.map((line) => (
                      <li key={line} className="flex gap-3 text-[13.5px] leading-relaxed">
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                            column.highlight ? "bg-gold" : "bg-[hsl(var(--paper)/0.25)]"
                          }`}
                        />
                        <span className={column.highlight ? "" : "text-muted-ink"}>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="premium-card premium-sheen p-7">
              <p className="text-[10px] uppercase tracking-[0.26em] text-muted-ink">Currently in beta</p>
              <p className="mt-4 text-pretty text-[15px] leading-relaxed">
                Bebasthapan is open for beta testing with a{" "}
                <span className="text-gold">10-day free trial</span> across the full core platform — so you
                can run a real month of your own operations through it before committing to anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
